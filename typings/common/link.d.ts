import { Component } from "../src/component";
import { LinkLike } from "./typings/link";
export declare class Link extends Component implements LinkLike {
    getHref(): Promise<string>;
}
