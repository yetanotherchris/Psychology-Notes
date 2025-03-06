import { AdaptiveActionContainer } from "../actions/adaptive-container";
interface IDimensions {
    scroll: number;
    offset: number;
}
export declare class ResponsivityManager {
    container: HTMLDivElement;
    private model;
    private resizeObserver;
    private isInitialized;
    getComputedStyle: (elt: Element) => CSSStyleDeclaration;
    private debouncedProcess;
    constructor(container: HTMLDivElement, model: AdaptiveActionContainer);
    protected getDimensions(element: HTMLElement): IDimensions;
    protected getAvailableSpace(): number;
    protected getGap(): number;
    protected calcItemSize(item: HTMLElement): number;
    private updateItemsDimensions;
    private get isContainerVisible();
    private shouldProcessResponsiveness;
    private process;
    private isDisposed;
    dispose(): void;
}
export declare class VerticalResponsivityManager extends ResponsivityManager {
    constructor(container: HTMLDivElement, model: AdaptiveActionContainer);
    protected getDimensions(): IDimensions;
    protected getAvailableSpace(): number;
    protected calcItemSize(item: HTMLDivElement): number;
}
export {};
