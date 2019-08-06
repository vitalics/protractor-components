import { $ } from "protractor";

export type InputTypes =
    | 'button'
    | 'checkbox'
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'file'
    | 'hidden'
    | 'image'
    | 'month'
    | 'number'
    | 'password'
    | 'radio'
    | 'range'
    | 'reset'
    | 'search'
    | 'submit'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week';

type FileMimeType = 'audio/*' | 'video/' | 'image/*';

export interface InputLike {
    /**
     * Specifies the value of an <input> element
     *
     * @type {(string | Promise<string>)}
     * @memberof InputLike
     */
    value: string | Promise<string>;
    /**
     * Specifies the type <input> element to display
     *
     * @type {(InputTypes | Promise<InputTypes>)}
     * @memberof InputLike
     */
    type?: InputTypes | Promise<InputTypes>;

    /**
     * Specifies a filter for what file types the user can pick from the file input dialog box (only for type="file")
     * 
     * File mime type should be following next pattern(s):
     * 
     * `audio/*`, `'video/*`, `image/*`
     * @type {(string | Promise<string>)}
     * @memberof InputLike
     */
    accept?: string | Promise<string>;
    /**
     * **Checkbox/Radio API**. 
     *
     * Set value to input
     *
     * @param {boolean} value
     * @returns {(boolean | Promise<boolean>)}
     * @memberof InputLike
     */
    check?(value: boolean): void | Promise<void>;

    /**
     * **Checkbox/Radio API**.
     *
     * Get value from input.
     *
     * @returns {(boolean | Promise<boolean>)}
     * @memberof InputLike
    */
    isChecked(): boolean | Promise<boolean>;

    /**
     * **File API**.
     * 
     * set to input file path.
     *
     * @param {string} filePath
     * @returns {(void | Promise<void>)}
     * @memberof InputLike
     */
    upload(filePath: string): void | Promise<void>;

    sendKeys(...sequence: string[]): void | Promise<void>;
}
