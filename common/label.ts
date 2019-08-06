import { Component } from "../src/component";
import { LabelLike } from "./api/label";

export class Label extends Component implements LabelLike {
    get for() {
        return this.getAttribute('for');
    }
}
