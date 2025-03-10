import { IElement, IShortcutText } from "../base-interfaces";
import { JsonObject } from "../jsonobject";
import { PageModel } from "../page";
import { DragDropCore } from "./core";
export declare class DragDropSurveyElements extends DragDropCore<any> {
    static newGhostPage: PageModel;
    static restrictDragQuestionBetweenPages: boolean;
    static edgeHeight: number;
    static nestedPanelDepth: number;
    static ghostSurveyElementName: string;
    protected isEdge: boolean;
    protected prevIsEdge: any;
    protected ghostSurveyElement: IElement;
    protected readonly draggedElementType: string;
    protected isDraggedElementSelected: boolean;
    private isRight;
    protected prevIsRight: boolean;
    startDragToolboxItem(event: PointerEvent, draggedElementJson: JsonObject, toolboxItemTitle: string): void;
    startDragSurveyElement(event: PointerEvent, draggedElement: any, isElementSelected?: boolean): void;
    protected getShortcutText(draggedElement: IShortcutText): string;
    protected createDraggedElementShortcut(text: string, draggedElementNode?: HTMLElement, event?: PointerEvent): HTMLElement;
    protected createDraggedElementIcon(): HTMLElement;
    protected getDraggedElementClass(): string;
    protected createElementFromJson(json: object): HTMLElement;
    private createNewElement;
    protected findDropTargetNodeByDragOverNode(dragOverNode: HTMLElement): HTMLElement;
    protected getDropTargetByDataAttributeValue(dataAttributeValue: string, dropTargetNode: HTMLElement, event: PointerEvent): any;
    protected isDropTargetValid(): boolean;
    protected calculateIsBottom(clientY: number, dropTargetNode?: HTMLElement): boolean;
    protected calculateIsRight(clientX: number, dropTargetNode?: HTMLElement): boolean;
    protected isDropTargetDoesntChanged(newIsBottom: boolean): boolean;
    private shouldRestricDragQuestionBetweenPages;
    private getPanelDropTarget;
    protected findDeepestDropTargetChild(parent: HTMLElement): HTMLElement;
    private calculateIsEdge;
    protected doDragOver(dropTargetNode?: HTMLElement, event?: PointerEvent): void;
    protected afterDragOver(dropTargetNode: HTMLElement, event: PointerEvent): void;
    protected onStartDrag(): void;
    protected doBanDropHere: () => void;
    protected doDrop: () => any;
    protected doClear: () => void;
    protected insertGhostElementIntoSurvey(): boolean;
    private calcTargetRowMultiple;
    private getTargetParent;
    private getTargetRow;
    private isDragOverInsideEmptyPanel;
    protected removeGhostElementFromSurvey(): void;
    private insertRealElementIntoSurvey;
    private createFakeTargetElement;
    private createGhostSurveyElement;
}
