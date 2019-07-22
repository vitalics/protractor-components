"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class Component {
    constructor(root) {
        this.root = root;
    }
    getText() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.root.getText();
        });
    }
    $(locator) {
        return this.root.element(locator);
    }
    $$(locator) {
        return this.root.all(locator);
    }
    find(locator) {
        return this.$(locator);
    }
    findAll(locator) {
        return this.$$(locator);
    }
    getAttribute(attribute) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.root.getAttribute(attribute);
        });
    }
    getCssValue(cssStyleProperty) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.root.getCssValue(cssStyleProperty);
        });
    }
    getId() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.root.getId();
        });
    }
    getSize() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.root.getSize();
        });
    }
    getLocation() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.root.getLocation();
        });
    }
    takeScreenshot() {
        return __awaiter(this, void 0, void 0, function* () {
            // scroll into view
            return this.root.takeScreenshot(true);
        });
    }
    getTagName() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.root.getTagName();
        });
    }
    static isComponent(componentLike) {
        return componentLike instanceof Component;
    }
    static toComponent(root, type) {
        return type ? new type(root) : new Component(root);
    }
}
exports.Component = Component;
//# sourceMappingURL=component.js.map