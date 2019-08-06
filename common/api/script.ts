export interface ScriptLike {
    src?: string | Promise<string>;
    getScriptFromUrl(url: string): Promise<string>;
}