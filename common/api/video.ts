import { SourceLike } from "./source";
import { Collection, Component } from "../../src";

export interface VideoLike {
    controls?: string | Promise<string>;
    width?: string | Promise<string>;
    height?: string | Promise<string>;
    src?: string | Promise<string>;
    getSources<C extends Component & SourceLike>(): Collection<C>;
}
