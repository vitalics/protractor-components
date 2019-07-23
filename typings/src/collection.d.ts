import { Component } from "./component";
import { ElementArrayFinder, ElementFinder } from "protractor";
export declare class Collection<C extends Component> implements AsyncIterable<C> {
    readonly root: ElementArrayFinder;
    private readonly comp?;
    protected readonly component: new (el: ElementFinder) => C;
    constructor(root: ElementArrayFinder, comp?: (new (el: ElementFinder) => C) | undefined);
    [Symbol.asyncIterator](): AsyncIterator<C>;
    getLength(): Promise<number>;
    get(index: number): C;
    first(): C;
    last(): C;
    toArrayFinder(): ElementArrayFinder;
    static isCollection(collectionLike: any): collectionLike is Collection<any>;
}
