import { Component } from "../src";
import { SourceLike } from "./api/source";

export class Source extends Component implements SourceLike {
    get src(): Promise<string> {
        return this.getAttribute('src');
    }
    get type(): Promise<string> {
        return this.getAttribute('type');
    }
}