import { Component } from "./component";
import { ElementArrayFinder, ElementFinder } from "protractor";

export class Collection<C extends Component = Component> implements AsyncIterable<C>{
    protected readonly component: new (el: ElementFinder) => C;
    public constructor(
        public readonly root: ElementArrayFinder,
        private readonly comp?: (new (el: ElementFinder) => C)
    ) {
        this.component = comp ? comp : Component as any;
    }
    [Symbol.asyncIterator](): AsyncIterator<C> {
        let index = 0;
        const instance = this;
        return {
            async next(): Promise<IteratorResult<C>> {
                const value = await instance.get(index);
                const length = await instance.getLength();
                if (index >= length) {
                    return Promise.resolve<IteratorResult<C>>({ done: true, value })
                }
                index++;
                return Promise.resolve<IteratorResult<C>>({ done: false, value, })
            }
        };
    }
    public async getLength() {
        return await this.root.count();
    }

    public get(index: number): C {
        return new this.component(this.root.get(index));
    }

    public first(): C {
        return new this.component(this.root.first());
    }
    public last(): C {
        return new this.component(this.root.last());
    }
    public toArrayFinder() {
        return this.root;
    }

    public static isCollection(collectionLike: any): collectionLike is Collection<any> {
        return collectionLike instanceof Collection;
    }
}
