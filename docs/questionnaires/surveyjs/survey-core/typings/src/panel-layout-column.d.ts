import { Base } from "./base";
export declare class PanelLayoutColumnModel extends Base {
    width: number;
    effectiveWidth: number;
    questionTitleWidth: string;
    constructor(width?: number, questionTitleWidth?: string);
    getType(): string;
    isEmpty(): boolean;
}
