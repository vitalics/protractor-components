export interface ImageLike {
    readonly src: string | Promise<string>;
    readonly alt: string | Promise<string>;
    readonly height: string | Promise<string>;
    readonly width: string | Promise<string>;
}
