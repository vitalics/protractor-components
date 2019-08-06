import { Component } from "index";
import { TextAreaLike } from "./api/textarea";

export class TextArea extends Component implements TextAreaLike {
    get cols() {
        return this.getAttribute('cols');
    }
    get maxlength() {
        return this.getAttribute('maxlength');
    }
    get readonly() {
        return this.getAttribute('readonly');
    }
    get required() {
        return this.getAttribute('required');
    }
    get rows() {
        return this.getAttribute('rows');
    }

    async sendKeys(...sequence: string[]) {
        await this.root.sendKeys(...sequence);
    }
}