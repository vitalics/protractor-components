import { Component } from "../src/component";
import { ImageLike } from "./typings/image";
export declare class Image extends Component implements ImageLike {
    readonly src: Promise<string>;
    readonly alt: Promise<string>;
    readonly height: Promise<string>;
    readonly width: Promise<string>;
}
