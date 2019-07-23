import { ElementFinder, Locator } from "protractor";
export declare class Component {
    readonly root: ElementFinder;
    constructor(root: ElementFinder);
    getText(): Promise<string>;
    $(locator: Locator): ElementFinder;
    $$(locator: Locator): import("protractor").ElementArrayFinder;
    find(locator: Locator): ElementFinder;
    findAll(locator: Locator): import("protractor").ElementArrayFinder;
    getAttribute(attribute: string): Promise<string>;
    getCssValue(cssStyleProperty: string): Promise<string>;
    getId(): Promise<string>;
    getSize(): Promise<import("selenium-webdriver").ISize>;
    getLocation(): Promise<import("selenium-webdriver").ILocation>;
    takeScreenshot(): Promise<string>;
    getTagName<K extends HTMLElementTagNameMap>(): Promise<K>;
    getTagName(): Promise<string>;
    static isComponent(componentLike: any): componentLike is Component;
    static toComponent<T extends Component>(root: ElementFinder, type?: new (root: ElementFinder) => T): Component | T;
}
