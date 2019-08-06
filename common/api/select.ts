
export interface SelectLike<Option extends string = string> {
    getOptions(): readonly Option[] | Promise<readonly Option[]>;
    setValue(value: Option): void | Promise<void>;
    getValue(): Option | Promise<Option>;
}