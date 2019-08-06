import { InputLike, InputTypes } from './api/input';
import { Component } from '../src/component';
import { browser } from 'protractor';
import { resolve } from 'path';

export class Input extends Component implements InputLike {
    get type(): Promise<InputTypes> {
        return this.getAttribute('type') as Promise<InputTypes>;
    }
    get value(): Promise<string> {
        return this.getAttribute('value');
    }

    get accept() {
        return this.getAttribute('accept');
    }
    async isChecked() {
        return browser.executeScript<boolean>(`arguments[0].checked`, this.root);
    }
    async check(value: boolean) {
        return browser.executeScript<void>(`arguments[0].checked = ${value}`, this.root);
    }

    upload(filePath: string): void | Promise<void> {
        const absolutePath =  resolve(__dirname, filePath);
        this.sendKeys(absolutePath);
    }

    async sendKeys(...sequence: string[]): Promise<void> {
        await this.root.sendKeys(...sequence);
    }
}