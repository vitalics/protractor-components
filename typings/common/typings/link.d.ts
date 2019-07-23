export interface LinkLike {
    getHref(): string | Promise<string>;
}
