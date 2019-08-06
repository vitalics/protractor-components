import { ElementFinder, Locator, ElementArrayFinder } from "protractor";
import { Collection } from "collection";

export class Component {
    public constructor(public readonly root: ElementFinder) { }

    /**
     * Get the visible (i.e. not hidden by CSS) innerText of this element, including
     * sub-elements, without any leading or trailing whitespace.
     * @return {Promise.<string>} A promise that will be
     *     resolved with the element's visible text.
    */
    async getText() {
        return this.root.getText();
    }
    /**
     * Calls to {@code element} may be chained to find elements within a parent.
     *
     * @alias element(locator).element(locator)
     * @view
     * <div class="parent">
     *   <div class="child">
     *     Child text
     *     <div>{{person.phone}}</div>
     *   </div>
     * </div>
     *
     * @example
     * // Chain 2 element calls.
     * let child = element(by.css('.parent')).
     *     element(by.css('.child'));
     * expect(child.getText()).toBe('Child text\n555-123-4567');
     *
     * // Chain 3 element calls.
     * let triple = element(by.css('.parent')).
     *     element(by.css('.child')).
     *     element(by.binding('person.phone'));
     * expect(triple.getText()).toBe('555-123-4567');
     *
     * // Or using the shortcut $() notation instead of element(by.css()):
     *
     * // Chain 2 element calls.
     * let child = $('.parent').$('.child');
     * expect(child.getText()).toBe('Child text\n555-123-4567');
     *
     * // Chain 3 element calls.
     * let triple = $('.parent').$('.child').
     *     element(by.binding('person.phone'));
     * expect(triple.getText()).toBe('555-123-4567');
     *
     * @param {webdriver.Locator} subLocator
     * @returns {ElementFinder}
    */
    $(locator: Locator) {
        return this.root.element(locator);
    }

    /**
     * Calls to {@code all} may be chained to find an array of elements within a
     * parent.
     *
     * @alias element(locator).all(locator)
     * @view
     * <div class="parent">
     *   <ul>
     *     <li class="one">First</li>
     *     <li class="two">Second</li>
     *     <li class="three">Third</li>
     *   </ul>
     * </div>
     *
     * @example
     * let items = element(by.css('.parent')).all(by.tagName('li'));
     *
     * // Or using the shortcut $() notation instead of element(by.css()):
     *
     * let items = $('.parent').all(by.tagName('li'));
     *
     * @param {webdriver.Locator} subLocator
     * @returns {ElementArrayFinder}
    */
    $$<C extends Component>(locator: Locator):  Collection<C> {
        return new Collection<C>(this.root.all(locator))
    }

    /**
     * Schedules a command to query for the value of the given attribute of the
     * element. Will return the current value, even if it has been modified after
     * the page has been loaded. More exactly, this method will return the value of
     * the given attribute, unless that attribute is not present, in which case the
     * value of the property with the same name is returned. If neither value is
     * set, null is returned (for example, the 'value' property of a textarea
     * element). The 'style' attribute is converted as best can be to a
     * text representation with a trailing semi-colon. The following are deemed to
     * be 'boolean' attributes and will return either 'true' or null:
     *
     * async, autofocus, autoplay, checked, compact, complete, controls, declare,
     * defaultchecked, defaultselected, defer, disabled, draggable, ended,
     * formnovalidate, hidden, indeterminate, iscontenteditable, ismap, itemscope,
     * loop, multiple, muted, nohref, noresize, noshade, novalidate, nowrap, open,
     * paused, pubdate, readonly, required, reversed, scoped, seamless, seeking,
     * selected, spellcheck, truespeed, willvalidate
     *
     * Finally, the following commonly mis-capitalized attribute/property names
     * are evaluated as expected:
     *
     * - 'class'
     * - 'readonly'
     *
     * @param {string} attributeName The name of the attribute to query.
     * @return {Promise.<?string>} A promise that will be
     *     resolved with the attribute's value. The returned value will always be
     *     either a string or null.
    */
    async getAttribute(attribute: string): Promise<string> {
        return this.root.getAttribute(attribute);
    }

    /**
     * Schedules a command to query for the computed style of the element
     * represented by this instance. If the element inherits the named style from
     * its parent, the parent will be queried for its value.  Where possible, color
     * values will be converted to their hex representation (e.g. #00ff00 instead of
     * rgb(0, 255, 0)).
     *
     * _Warning:_ the value returned will be as the browser interprets it, so
     * it may be tricky to form a proper assertion.
     *
     * @param {string} cssStyleProperty The name of the CSS style property to look
     *     up.
     * @return {Promise<string>} A promise that will be
     *     resolved with the requested CSS value.
    */
    async getCssValue(cssStyleProperty: string) {

        return this.root.getCssValue(cssStyleProperty);
    }

    /**
     * @return {Promise<string>} A promise that resolves to
     *     the server-assigned opaque ID assigned to this element.
    */
    async getId() {
        return this.root.getId();
    }

    /**
     * Schedules a command to compute the size of this element's bounding box, in
     * pixels.
     * @return {Promise.<{width: number, height: number}>} A
     *     promise that will be resolved with the element's size as a
     *     {@code {width:number, height:number}} object.
    */
    async getSize() {
        return this.root.getSize();
    }

    /**
     * 
     * Schedules a command to compute the location of this element in page space.
     * @return {!promise.Promise.<{x: number, y: number}>} A promise that
     *     will be resolved to the element's location as a
     *     {@code {x:number, y:number}} object.
    */
    async getLocation() {
        return this.root.getLocation();
    }

    public locator() {
        return this.root.locator();
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