import { ElementFinder, Locator } from "protractor";

export class Component {
    public constructor(public readonly root: ElementFinder) { }

    async getText() {
        return this.root.getText();
    }
    $(locator: Locator) {
        return this.root.element(locator);
    }
    $$(locator: Locator) {
        return this.root.all(locator);
    }
    find(locator: Locator) {
        return this.$(locator);
    }
    findAll(locator: Locator) {
        return this.$$(locator);
    }

    async getAttribute(attribute: string) {
        return this.root.getAttribute(attribute);
    }

    async getCssValue(cssStyleProperty: string) {

        return this.root.getCssValue(cssStyleProperty);
    }

    async getId() {
        return this.root.getId();
    }

    async getSize() {
        return this.root.getSize();
    }

    async getLocation() {
        return this.root.getLocation();
    }

    async takeScreenshot() {
        // scroll into view
        return this.root.takeScreenshot(true);
    }
    async getTagName<K extends HTMLElementTagNameMap>(): Promise<K>
    async getTagName(): Promise<string>;
    async getTagName(): Promise<string> {
        return this.root.getTagName();
    }

    static isComponent(componentLike: any): componentLike is Component {
        return componentLike instanceof Component;
    }

    static toComponent<T extends Component>(root: ElementFinder, type?: new (root: ElementFinder) => T): Component | T {
        return type ? new type(root) : new Component(root);
    }
}
