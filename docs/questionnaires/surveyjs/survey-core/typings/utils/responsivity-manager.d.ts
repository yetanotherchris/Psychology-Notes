import { Action } from "../actions/action";
import { AdaptiveActionContainer } from "../actions/adaptive-container";
interface IDimensions {
    scroll: number;
    offset: number;
}
export declare class ResponsivityManager {
    protected container: HTMLDivElement;
    private model;
    private itemsSelector;
    private dotsItemSize;
    private delayedUpdateFunction?;
    private resizeObserver;
    private isInitialized;
    protected minDimensionConst: number;
    private separatorSize;
    private separatorAddConst;
    private paddingSizeConst;
    private dotsSizeConst;
    protected recalcMinDimensionConst: boolean;
    getComputedStyle: (elt: Element) => CSSStyleDeclaration;
    constructor(container: HTMLDivElement, model: AdaptiveActionContainer, itemsSelector: string, dotsItemSize?: number, delayedUpdateFunction?: (callback: () => void) => void);
    protected getDimensions(element: HTMLElement): IDimensions;
    protected getAvailableSpace(): number;
    protected calcItemSize(item: HTMLDivElement): number;
    private calcMinDimension;
    private getRenderedVisibleActionsCount;
    private calcItemsSizes;
    protected calcActionDimensions(currentAction: Action, item: HTMLDivElement): void;
    private get isContainerVisible();
    private process;
    dispose(): void;
}
export declare class VerticalResponsivityManager extends ResponsivityManager {
    constructor(container: HTMLDivElement, model: AdaptiveActionContainer, itemsSelector: string, dotsItemSize?: number, minDimension?: number, delayedUpdateFunction?: (callback: () => void) => void);
    protected getDimensions(): IDimensions;
    protected getAvailableSpace(): number;
    protected calcItemSize(item: HTMLDivElement): number;
    protected calcActionDimensions(currentAction: Action, item: HTMLDivElement): void;
}
export {};
