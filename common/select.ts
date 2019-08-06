import { browser } from "protractor";
import { Component } from "../src";
import { SelectLike } from "./api/select";

export class Select<PossibleOptions extends string = string> extends Component implements SelectLike<PossibleOptions> {
    async getOptions(): Promise<readonly PossibleOptions[]> {
        const options: PossibleOptions[] = [];
        const collection = this.$$<Option>('option');
        for await (const option of collection) {
            options.push(
                await option.getAttribute('value') as PossibleOptions
                || await option.getText() as PossibleOptions
            );
        }
        return options;
    }
    async setValue(value: PossibleOptions): Promise<void> {
        await browser.executeScript(`arguments[0].value = ${value}`, this.root);
    }
    async getValue(): Promise<PossibleOptions> {
        const value = await browser.executeScript<PossibleOptions>('arguments[0].value', this.root);
        return value;
    }
}

class Option extends Component {
    get value() {
        return this.getAttribute('value');
    }
}
