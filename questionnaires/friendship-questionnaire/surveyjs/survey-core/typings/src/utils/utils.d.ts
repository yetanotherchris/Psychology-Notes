import { PopupBaseViewModel } from "../popup-view-model";
declare function compareVersions(a: any, b: any): number;
declare function confirmAction(message: string): boolean;
declare function confirmActionAsync(options: IConfirmDialogOptions): void;
declare function detectIEBrowser(): boolean;
declare function detectIEOrEdge(): boolean;
declare function loadFileFromBase64(b64Data: string, fileName: string): void;
declare function isMobile(): boolean;
declare const isShadowDOM: (rootElement: Document | ShadowRoot | HTMLElement) => rootElement is ShadowRoot;
declare const getElement: (element: HTMLElement | string) => HTMLElement;
declare function isElementVisible(element: HTMLElement, threshold?: number): boolean;
declare function findScrollableParent(element: HTMLElement): HTMLElement;
declare function activateLazyRenderingChecks(id: string): void;
declare function navigateToUrl(url: string): void;
declare function wrapUrlForBackgroundImage(url: string): string;
declare function isBase64URL(url: string): boolean;
declare const renamedIcons: any;
declare function getIconNameFromProxy(iconName: string): string;
export declare function getNewIconName(iconName: string): string;
export declare function getCustomNewIconNameIfExists(iconName: string): string;
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
declare function updateListCssValues(res: any, css: any): void;
export declare class Logger {
    private _result;
    log(action: string): void;
    get result(): string;
}
export interface IConfirmDialogOptions {
    message?: string;
    funcOnYes?: () => void;
    funcOnNo?: () => void;
    applyTitle?: string;
    locale?: string;
    rootElement?: HTMLElement;
    cssClass?: string;
}
export declare function showConfirmDialog(message: string, callback: (res: boolean) => void, options: IConfirmDialogOptions): boolean;
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
interface IVerticalDimensions {
    paddingTop: string;
    paddingBottom: string;
    marginTop: string;
    marginBottom: string;
    heightTo: string;
    borderTopWidth: string;
    borderBottomWidth: string;
    heightFrom: string;
}
export declare function getVerticalDimensions(el: HTMLElement): IVerticalDimensions;
export declare function setPropertiesOnElementForAnimation(el: HTMLElement, styles: any, prefix?: string): void;
export declare function prepareElementForVerticalAnimation(el: HTMLElement): void;
export declare function cleanHtmlElementAfterAnimation(el: HTMLElement): void;
export declare function floorTo2Decimals(number: number): number;
export { mergeValues, updateListCssValues, getElementWidth, isContainerVisible, classesToSelector, compareVersions, confirmAction, confirmActionAsync, detectIEOrEdge, detectIEBrowser, loadFileFromBase64, isMobile, isShadowDOM, getElement, isElementVisible, findScrollableParent, activateLazyRenderingChecks, navigateToUrl, wrapUrlForBackgroundImage, createSvg, getIconNameFromProxy, increaseHeightByContent, getOriginalEvent, preventDefaults, findParentByClassNames, getFirstVisibleChild, chooseFiles, isBase64URL, renamedIcons };
