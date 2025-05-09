import { IPosition, Rect } from "./utils/popup";
import { CssClassBuilder } from "./utils/cssClassBuilder";
import { PopupModel } from "./popup";
import { PopupBaseViewModel } from "./popup-view-model";
export declare function calculateIsTablet(windowWidth?: number, windowHeight?: number): boolean;
export declare class PopupDropdownViewModel extends PopupBaseViewModel {
    targetElement?: HTMLElement;
    areaElement?: HTMLElement;
    static readonly tabletSizeBreakpoint = 600;
    private scrollEventCallBack;
    private calculateIsTablet;
    private resizeEventCallback;
    private resizeWindowCallback;
    private clientY;
    private isTablet;
    private touchStartEventCallback;
    private touchMoveEventCallback;
    protected getAvailableAreaRect(): Rect;
    protected getTargetElementRect(): Rect;
    private _updatePosition;
    protected getActualHorizontalPosition(): "left" | "center" | "right";
    protected getStyleClass(): CssClassBuilder;
    protected getShowHeader(): boolean;
    protected getPopupHeaderTemplate(): string;
    popupDirection: string;
    pointerTarget: IPosition;
    private recalculatePositionHandler;
    constructor(model: PopupModel, targetElement?: HTMLElement, areaElement?: HTMLElement);
    setComponentElement(componentRoot: HTMLElement, targetElement?: HTMLElement | null, areaElement?: HTMLElement | null): void;
    resetComponentElement(): void;
    updateOnShowing(): void;
    private get shouldCreateResizeCallback();
    updatePosition(isResetHeight: boolean, isDelayUpdating?: boolean): void;
    updateOnHiding(): void;
    protected onModelChanging(newModel: PopupModel): void;
    dispose(): void;
}
