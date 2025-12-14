import { ItemValue } from "../itemvalue";
import { QuestionSelectBase } from "../question_baseselect";
import { DragDropCore } from "./core";
export declare class DragDropChoices extends DragDropCore<QuestionSelectBase> {
    private imagepickerControlsNode;
    protected readonly draggedElementType: string;
    protected createDraggedElementShortcut(text: string, draggedElementNode: HTMLElement, event: PointerEvent): HTMLElement;
    onShortcutCreated: (node: HTMLElement) => void;
    private createImagePickerShortcut;
    protected getDropTargetByDataAttributeValue(dataAttributeValue: string): ItemValue;
    private getVisibleChoices;
    protected doDragOver: () => any;
    protected isDropTargetValid(dropTarget: ItemValue, dropTargetNode?: HTMLElement): boolean;
    protected doBanDropHere: () => any;
    protected calculateIsBottom(clientY: number): boolean;
    protected afterDragOver(dropTargetNode: HTMLElement): void;
    protected doDrop(): any;
    clear(): void;
    private updateVisibleChoices;
}
