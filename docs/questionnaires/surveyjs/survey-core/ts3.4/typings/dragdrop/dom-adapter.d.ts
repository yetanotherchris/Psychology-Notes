import { IDragDropEngine } from "./engine";
export interface IDragDropDOMAdapter {
    startDrag(event: PointerEvent, draggedElement: any, parentElement: any, draggedElementNode: HTMLElement, preventSaveTargetNode: boolean): void;
    draggedElementShortcut: HTMLElement;
    rootContainer: HTMLElement;
    documentOrShadowRoot: Document | ShadowRoot;
}
export declare class DragDropDOMAdapter implements IDragDropDOMAdapter {
    private dd;
    private longTap;
    private fitToContainer;
    static PreventScrolling: boolean;
    private timeoutID;
    private startX;
    private startY;
    private currentX;
    private currentY;
    private savedTargetNode;
    private savedTargetNodeParent;
    private savedTargetNodeIndex;
    private scrollIntervalId;
    constructor(dd: IDragDropEngine, longTap?: boolean, fitToContainer?: boolean);
    readonly documentOrShadowRoot: Document | ShadowRoot;
    private readonly rootElement: any;
    private stopLongTapIfMoveEnough;
    private readonly isMicroMovement: any;
    private stopLongTap;
    private startLongTapProcessing;
    private handlePointerCancel;
    private handleEscapeButton;
    private onContextMenu;
    private moveShortcutElement;
    private getShortcutBottomCoordinate;
    private getShortcutRightCoordinate;
    protected requestAnimationFrame(callback: any): number;
    protected scrollByDrag(scrollableParentNode: HTMLElement, clientY: number, clientX: number): void;
    private doScroll;
    private dragOver;
    private clear;
    private drop;
    private doStartDrag;
    private returnUserSelectBack;
    draggedElementShortcut: any;
    rootContainer: HTMLElement;
    startDrag(event: PointerEvent, draggedElement: any, parentElement?: any, draggedElementNode?: HTMLElement, preventSaveTargetNode?: boolean): void;
    private getNodeIndexInParent;
    private insertNodeToParentAtIndex;
}
