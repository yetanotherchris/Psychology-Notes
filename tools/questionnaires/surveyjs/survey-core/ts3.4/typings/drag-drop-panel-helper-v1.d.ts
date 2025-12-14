import { IElement, ISurveyElement } from "./base-interfaces";
import { DragDropInfo } from "./drag-drop-helper-v1";
import { PanelModelBase, QuestionRowModel } from "./panel";
export declare class DragDropPanelHelperV1 {
    private panel;
    constructor(panel: PanelModelBase);
    dragDropAddTarget(dragDropInfo: DragDropInfo): void;
    dragDropFindRow(findElement: ISurveyElement): QuestionRowModel;
    dragDropMoveElement(src: IElement, target: IElement, targetIndex: number): void;
    updateRowsOnElementAdded(element: IElement, index: number, dragDropInfo?: DragDropInfo, thisElement?: PanelModelBase): void;
    private dragDropAddTargetToRow;
    private dragDropAddTargetToEmptyPanel;
    private dragDropAddTargetToExistingRow;
    private dragDropAddTargetToNewRow;
    private dragDropAddTargetToEmptyPanelCore;
}
