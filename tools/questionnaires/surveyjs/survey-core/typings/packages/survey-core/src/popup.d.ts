import { Base, EventBase } from "./base";
import { IAction } from "./actions/action";
import { VerticalPosition, HorizontalPosition, PositionMode } from "./utils/popup";
export interface IPopupOptionsBase {
    onHide?: () => void;
    onShow?: () => void;
    onCancel?: () => void;
    onDispose?: () => void;
    getTargetCallback?: (container: HTMLElement) => HTMLElement;
    getAreaCallback?: (container: HTMLElement) => HTMLElement;
    cssClass?: string;
    title?: string;
    verticalPosition?: VerticalPosition;
    horizontalPosition?: HorizontalPosition;
    showPointer?: boolean;
    isModal?: boolean;
    canShrink?: boolean;
    displayMode?: "popup" | "overlay";
}
export interface IDialogOptions extends IPopupOptionsBase {
    componentName: string;
    data: any;
    onApply: () => boolean;
    isFocusedContent?: boolean;
}
export declare class PopupModel<T = any> extends Base implements IPopupOptionsBase {
    setWidthByTarget: boolean;
    focusFirstInputSelector: string;
    locale: string;
    onCancel: () => void;
    onApply: () => boolean;
    onHide: () => void;
    onShow: () => void;
    onDispose: () => void;
    getTargetCallback?: (container: HTMLElement) => HTMLElement;
    getAreaCallback?: (container: HTMLElement) => HTMLElement;
    contentComponentName: string;
    contentComponentData: T;
    verticalPosition: VerticalPosition;
    horizontalPosition: HorizontalPosition;
    showPointer: boolean;
    isModal: boolean;
    canShrink: boolean;
    isFocusedContent: boolean;
    isFocusedContainer: boolean;
    cssClass: string;
    title: string;
    overlayDisplayMode: "auto" | "tablet-dropdown-overlay" | "dropdown-overlay" | "plain";
    displayMode: "popup" | "overlay";
    positionMode: PositionMode;
    onVisibilityChanged: EventBase<PopupModel>;
    onFooterActionsCreated: EventBase<Base>;
    onRecalculatePosition: EventBase<Base>;
    private refreshInnerModel;
    constructor(contentComponentName: string, contentComponentData: T, option1?: IPopupOptionsBase | any, option2?: any);
    get isVisible(): boolean;
    set isVisible(value: boolean);
    toggleVisibility(): void;
    show(): void;
    hide(): void;
    recalculatePosition(isResetHeight: boolean): void;
    updateFooterActions(footerActions: Array<IAction>): Array<IAction>;
    updateDisplayMode(menuType: "dropdown" | "popup" | "overlay"): void;
    onHiding(): void;
    dispose(): void;
}
export declare function createDialogOptions(componentName: string, data: any, onApply: () => boolean, onCancel?: () => void, onHide?: () => void, onShow?: () => void, cssClass?: string, title?: string, displayMode?: "popup" | "overlay"): IDialogOptions;
