export interface SourceLike {
    src: string | Promise<string>;
    type?: string | Promise<string>;
}