import { ExpectedConditions as EC, browser } from 'protractor';

import { Component } from "../src/component";
import { ButtonLike } from "./typings/button";

export class Button extends Component implements ButtonLike {
    async click(timeout?: number) {
        await browser.wait(EC.elementToBeClickable(this.root), timeout);
        await this.root.click();
    }
}
