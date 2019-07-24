import { Component } from "../src/component";
import { ImageLike } from "./api/image";

export class Image extends Component implements ImageLike {
    get src(): Promise<string> {
        return this.getAttribute('src');
    };
    get alt(): Promise<string> {
        return this.getAttribute('alt');
    };
    get height(): Promise<string> {
        return this.getAttribute('height');
    };
    get width(): Promise<string> {
        return this.getAttribute('width');
    };
}