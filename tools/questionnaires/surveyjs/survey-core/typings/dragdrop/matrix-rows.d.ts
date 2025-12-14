import { MatrixDropdownRowModelBase } from "../question_matrixdropdownbase";
import { QuestionMatrixDynamicModel, MatrixDynamicRowModel } from "../question_matrixdynamic";
import { DragDropCore } from "./core";
export declare class DragDropMatrixRows extends DragDropCore<QuestionMatrixDynamicModel> {
    protected get draggedElementType(): string;
    protected restoreUserSelectValue: string;
    protected onStartDrag(): void;
    protected createDraggedElementShortcut(text: string, draggedElementNode: HTMLElement, event: PointerEvent): HTMLElement;
    private fromIndex;
    private toIndex;
    protected getDropTargetByDataAttributeValue(dataAttributeValue: any): MatrixDropdownRowModelBase;
    canInsertIntoThisRow(row: MatrixDynamicRowModel): boolean;
    protected isDropTargetValid(dropTarget: any, dropTargetNode?: HTMLElement): boolean;
    protected calculateIsBottom(clientY: number): boolean;
    protected afterDragOver(dropTargetNode: HTMLElement): void;
    protected doDrop: () => QuestionMatrixDynamicModel;
    clear(): void;
}
