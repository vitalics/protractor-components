import { Component } from "../src/component";
import { ButtonLike } from "./typings/button";
export declare class Button extends Component implements ButtonLike {
    click(timeout?: number): Promise<void>;
}
