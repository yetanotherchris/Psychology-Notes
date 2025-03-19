import { IElement, ISurveyElement } from "./base-interfaces";
export declare class DragDropInfo {
    source: IElement;
    target: IElement;
    nestedPanelDepth: number;
    constructor(source: IElement, target: IElement, nestedPanelDepth?: number);
    destination: ISurveyElement;
    isBottom: boolean;
    isEdge: boolean;
}
