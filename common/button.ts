import { ExpectedConditions as EC, browser, $ } from 'protractor';

import { Component } from "../src/component";
import { ButtonLike, TapOptions, ClickOptions } from "./api/button";

export class Button extends Component implements ButtonLike {
    async click({ timeout, double }: ClickOptions = {}) {
        await browser.wait(EC.elementToBeClickable(this.root), timeout);
        if (double) {
            await browser.actions().doubleClick(this.root).perform();
        } else {
            await this.root.click();
        }
    }

    async tap({ double, hold }: TapOptions = {}) {
        if (double && !hold) {
            await browser.touchActions().doubleTap(this.root).perform();
        } else if (hold && !double) {
            await browser.touchActions().tapAndHold(await this.root.getLocation()).perform();
        } else if (double && hold) {
            throw new Error('cannot double tap and holding to element, please provide one of option');
        } else {
            await browser.touchActions().tap(this.root).perform();
        }
    }
}
