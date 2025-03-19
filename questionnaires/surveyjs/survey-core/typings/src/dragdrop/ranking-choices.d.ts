import { ItemValue } from "../itemvalue";
import { DragDropChoices } from "./choices";
import { QuestionRankingModel } from "../question_ranking";
export declare class DragDropRankingChoices extends DragDropChoices {
    protected get draggedElementType(): string;
    protected createDraggedElementShortcut(text: string, draggedElementNode: HTMLElement, event: PointerEvent): HTMLElement;
    private get shortcutClass();
    protected getDropTargetByDataAttributeValue(dataAttributeValue: string): ItemValue;
    private isDragOverRootNode;
    protected findDropTargetNodeByDragOverNode(dragOverNode: HTMLElement): HTMLElement;
    private getIsDragOverRootNode;
    protected isDropTargetValid(dropTarget: ItemValue, dropTargetNode?: HTMLElement): boolean;
    protected calculateIsBottom(clientY: number, dropTargetNode?: HTMLElement): boolean;
    protected doDragOver: () => any;
    getIndices(model: any, fromChoicesArray: Array<ItemValue>, toChoicesArray: Array<ItemValue>): {
        fromIndex: number;
        toIndex: number;
    };
    protected afterDragOver(dropTargetNode: HTMLElement): void;
    reorderRankedItem: (questionModel: QuestionRankingModel, fromIndex: number, toIndex: number) => void;
    protected updateDraggedElementShortcut(newIndex: number): void;
    protected ghostPositionChanged(): void;
    protected doBanDropHere: () => any;
    protected doDrop(): any;
    clear(): void;
}
