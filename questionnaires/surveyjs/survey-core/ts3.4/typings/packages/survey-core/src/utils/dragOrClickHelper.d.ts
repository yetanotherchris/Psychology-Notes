export declare class DragOrClickHelper {
    private dragHandler;
    private pointerDownEvent;
    private currentTarget;
    private startX;
    private startY;
    private currentX;
    private currentY;
    private itemModel;
    constructor(dragHandler: any);
    onPointerDown(pointerDownEvent: any, itemModel?: any): void;
    private onPointerUp;
    private tryToStartDrag;
    private readonly isMicroMovement: any;
    private clearListeners;
}
