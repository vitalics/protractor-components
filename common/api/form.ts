export interface Form<T> {
    submit(): void | Promise<void>;
    fill?(model: T): void | Promise<void>;
}