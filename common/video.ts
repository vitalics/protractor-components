import { Component, Collection } from "../src";
import { VideoLike } from "./api/video";
import { SourceLike } from './api/source';

export class Video extends Component implements VideoLike {
    get controls(): Promise<string> {
        return this.getAttribute('controls');
    }
    get width(): Promise<string> {
        return this.getAttribute('width');
    }
    get height(): Promise<string> {
        return this.getAttribute('height');
    }
    get src(): Promise<string> {
        return this.getAttribute('src');
    }
    getSources<C extends SourceLike & Component>(): Collection<C> {
        return this.$$('source');
    }
}
