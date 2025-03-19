import { Base, EventBase } from "./base";
import { PageModel } from "./page";
import { SurveyModel } from "./survey";
export declare class ProgressButtons extends Base {
    survey: SurveyModel;
    constructor(survey: SurveyModel);
    isListElementClickable(index: number | any): boolean;
    getRootCss(container?: string): string;
    getListElementCss(index: number | any): string;
    getScrollButtonCss(hasScroller: boolean, isLeftScroll: boolean): string;
    clickListElement(element: number | PageModel): void;
    isListContainerHasScroller(element: HTMLElement): boolean;
    isCanShowItemTitles(element: HTMLElement): boolean;
    clearConnectorsWidth(element: HTMLElement): void;
    adjustConnectors(element: HTMLElement): void;
    readonly isFitToSurveyWidth: boolean;
    readonly progressWidth: string;
    readonly showItemNumbers: boolean;
    readonly showItemTitles: boolean;
    getItemNumber(page: PageModel): string;
    readonly headerText: string;
    readonly footerText: string;
    onResize: EventBase<ProgressButtons, any>;
    processResponsiveness(width: number): void;
}
export interface IProgressButtonsViewModel {
    container: string;
    onResize(canShowItemTitles: boolean): void;
    onUpdateScroller(hasScroller: boolean): void;
    onUpdateSettings(): void;
}
export declare class ProgressButtonsResponsivityManager {
    private model;
    private element;
    private viewModel;
    private criticalProperties;
    private timer;
    private prevWidth;
    private canShowItemTitles;
    constructor(model: ProgressButtons, element: HTMLElement, viewModel: IProgressButtonsViewModel);
    private forceUpdate;
    private processResponsiveness;
    dispose(): void;
}
