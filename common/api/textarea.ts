import { InputLike } from "./input";

export interface TextAreaLike extends Pick<InputLike, 'sendKeys'> {
    cols?: string | Promise<string>;
    rows?: string | Promise<string>;
    maxlength?: string | Promise<string>;
    readonly?: string | Promise<string>;
    required?: string | Promise<string>;
}