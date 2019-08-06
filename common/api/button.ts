export interface TapOptions {
    double?: boolean;
    hold?: boolean;
}

export interface ClickOptions {
    double?: boolean;
    timeout?: number;
}
export interface ButtonLike {
    click(options?: ClickOptions): void | Promise<void>;
    tap(options?: TapOptions): void | Promise<void>;
}
