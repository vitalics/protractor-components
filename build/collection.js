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
const component_1 = require("./component");
class Collection {
    constructor(root, comp) {
        this.root = root;
        this.comp = comp;
        this.component = comp ? comp : component_1.Component;
    }
    [Symbol.asyncIterator]() {
        let index = 0;
        const instance = this;
        return {
            next() {
                return __awaiter(this, void 0, void 0, function* () {
                    const value = yield instance.get(index);
                    const length = yield instance.getLength();
                    if (index >= length) {
                        return Promise.resolve({ done: true, value });
                    }
                    index++;
                    return Promise.resolve({ done: false, value, });
                });
            }
        };
    }
    getLength() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.root.count();
        });
    }
    get(index) {
        return new this.component(this.root.get(index));
    }
    first() {
        return new this.component(this.root.first());
    }
    last() {
        return new this.component(this.root.last());
    }
    toArrayFinder() {
        return this.root;
    }
    static isCollection(collectionLike) {
        return collectionLike instanceof Collection;
    }
}
exports.Collection = Collection;
//# sourceMappingURL=collection.js.map