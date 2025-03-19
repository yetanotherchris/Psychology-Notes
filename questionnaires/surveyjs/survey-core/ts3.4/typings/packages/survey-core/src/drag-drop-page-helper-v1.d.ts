import { IElement, ISurveyElement } from "./base-interfaces";
import { PageModel } from "./page";
export declare class DragDropPageHelperV1 {
    private page;
    constructor(page: PageModel);
    private dragDropInfo;
    getDragDropInfo(): any;
    dragDropStart(src: IElement, target: IElement, nestedPanelDepth?: number): void;
    dragDropMoveTo(destination: ISurveyElement, isBottom?: boolean, isEdge?: boolean): boolean;
    private correctDragDropInfo;
    private dragDropAllowFromSurvey;
    dragDropFinish(isCancel?: boolean): IElement;
    private dragDropGetElementIndex;
    private dragDropCanDropTagert;
    private dragDropCanDropSource;
    private dragDropCanDropCore;
    private dragDropCanDropNotNext;
    private dragDropIsSameElement;
}
