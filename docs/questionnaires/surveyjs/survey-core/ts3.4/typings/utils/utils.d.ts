import { PopupBaseViewModel } from "../popup-view-model";
declare function compareVersions(a: any, b: any): number;
declare function confirmAction(message: string): boolean;
declare function confirmActionAsync(message: string, funcOnYes: () => void, funcOnNo?: () => void, locale?: string, rootElement?: HTMLElement): void;
declare function detectIEBrowser(): boolean;
declare function detectIEOrEdge(): boolean;
declare function loadFileFromBase64(b64Data: string, fileName: string): void;
declare function isMobile(): boolean;
declare const isShadowDOM: (rootElement: Document | ShadowRoot | HTMLElement) => rootElement is ShadowRoot;
declare const getElement: (element: HTMLElement | string) => HTMLElement;
declare function isElementVisible(element: HTMLElement, threshold?: number): boolean;
declare function findScrollableParent(element: HTMLElement): HTMLElement;
declare function scrollElementByChildId(id: string): void;
declare function navigateToUrl(url: string): void;
declare function wrapUrlForBackgroundImage(url: string): string;
declare function getIconNameFromProxy(iconName: string): string;
declare function createSvg(size: number | string, width: number, height: number, iconName: string, svgElem: any, title: string): void;
export declare function getSafeUrl(url: string): string;
export declare function unwrap<T>(value: T | (() => T)): T;
export declare function getRenderedSize(val: string | number): number;
export declare function getRenderedStyleSize(val: string | number): string;
export interface IAttachKey2clickOptions {
    processEsc?: boolean;
    disableTabStop?: boolean;
    __keyDownReceived?: boolean;
}
export declare function doKey2ClickBlur(evt: KeyboardEvent): void;
export declare function doKey2ClickUp(evt: KeyboardEvent, options?: IAttachKey2clickOptions): void;
export declare function doKey2ClickDown(evt: KeyboardEvent, options?: IAttachKey2clickOptions): void;
declare function increaseHeightByContent(element: HTMLElement, getComputedStyle?: (elt: Element) => any): void;
declare function getOriginalEvent(event: any): any;
declare function preventDefaults(event: any): void;
declare function classesToSelector(str: string): string;
declare function getElementWidth(el: HTMLElement): number;
declare function isContainerVisible(el: HTMLElement): boolean;
declare function getFirstVisibleChild(el: HTMLElement): any;
declare function findParentByClassNames(element: HTMLElement, classNames: Array<string>): Element;
export declare function sanitizeEditableContent(element: any, cleanLineBreaks?: boolean): void;
declare function mergeValues(src: any, dest: any): void;
export declare class Logger {
    private _result;
    log(action: string): void;
    readonly result: string;
}
export declare function showConfirmDialog(message: string, callback: (res: boolean) => void, applyTitle?: string, locale?: string, rootElement?: HTMLElement): boolean;
export declare function configConfirmDialog(popupViewModel: PopupBaseViewModel): void;
declare function chooseFiles(input: HTMLInputElement, callback: (files: File[]) => void): void;
export declare function compareArrays<T>(oldValue: Array<T>, newValue: Array<T>, getKey: (item: T) => any): {
    addedItems: Array<T>;
    deletedItems: Array<T>;
    reorderedItems: Array<{
        item: T;
        movedForward: boolean;
    }>;
    mergedItems: Array<T>;
};
export declare function roundTo2Decimals(number: number): number;
export { mergeValues, getElementWidth, isContainerVisible, classesToSelector, compareVersions, confirmAction, confirmActionAsync, detectIEOrEdge, detectIEBrowser, loadFileFromBase64, isMobile, isShadowDOM, getElement, isElementVisible, findScrollableParent, scrollElementByChildId, navigateToUrl, wrapUrlForBackgroundImage, createSvg, getIconNameFromProxy, increaseHeightByContent, getOriginalEvent, preventDefaults, findParentByClassNames, getFirstVisibleChild, chooseFiles };
