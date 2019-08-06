import axios from 'axios';
import { Component } from "index";
import { ScriptLike } from "./api/script";

export class Script extends Component implements ScriptLike {
    get src(): Promise<string> {
        return this.getAttribute('src');
    }
    async getScriptFromUrl(url: string) {
        const req = await axios.get<string>(url);
        return req.data;
    }
}