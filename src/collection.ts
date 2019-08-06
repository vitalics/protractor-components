import { Component } from "./component";
import { ElementArrayFinder, ElementFinder, $ } from "protractor";

export class Collection<C extends Component = Component> implements AsyncIterable<C> {
    protected readonly component: new (el: ElementFinder) => C;
    private readonly $$values: C[] = [];
    public constructor(
        public readonly root: ElementArrayFinder,
        private readonly comp?: (new (el: ElementFinder) => C)
    ) {
        this.component = comp ? comp : Component as any;
        this.root.each((el, index) => {
            this.$$values.push(this.get(index!))
        });
    }
    [Symbol.asyncIterator](): AsyncIterator<C> {
        let index = 0;
        const instance = this;
        return {
            async next(): Promise<IteratorResult<C>> {
                const value = await instance.get(index);
                const length = await instance.length;
                if (index >= length) {
                    return Promise.resolve<IteratorResult<C>>({ done: true, value })
                }
                index++;
                return Promise.resolve<IteratorResult<C>>({ done: false, value })
            }
        };
    }
    public get length() {
        return this.root.count() as Promise<number>;
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
    /**
     * Returns the most relevant locator.
     *
     * @example
     * // returns by.css('#ID1')
     * $('#ID1').locator();
     *
     * // returns by.css('#ID2')
     * $('#ID1').$('#ID2').locator();
     *
     * // returns by.css('#ID1')
     * $$('#ID1').filter(filterFn).get(0).click().locator();
     *
     * @returns {webdriver.Locator}
    */
    public locator() {
        return this.root.locator();
    }
    public toArrayFinder() {
        return this.root;
    }

    public static isCollection<C extends Component>(collectionLike: unknown): collectionLike is Collection<C> {
        return collectionLike instanceof Collection;
    }

    public async toArray(): Promise<readonly C[]> {
        const arr: C[] = [];
        await this.root.each(el => {
            if (el) arr.push(new this.component(el));
        });
        return arr;
    }
}
