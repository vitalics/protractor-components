import { Component } from "../src/component";
import { LinkLike } from "./api/link";

export class Link extends Component implements LinkLike {
    async getHref() {
        return this.root.getAttribute('href');
    }
}
