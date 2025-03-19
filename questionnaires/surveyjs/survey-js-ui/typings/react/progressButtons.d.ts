/// <reference types="react" />
import { ProgressButtons, PageModel, IProgressButtonsViewModel } from "survey-core";
import { SurveyNavigationBase } from "./reactSurveyNavigationBase";
export declare class SurveyProgressButtons extends SurveyNavigationBase implements IProgressButtonsViewModel {
    private respManager;
    private listContainerRef;
    constructor(props: any);
    protected get model(): ProgressButtons;
    get container(): string;
    onResize(canShowItemTitles: boolean): void;
    onUpdateScroller(hasScroller: boolean): void;
    onUpdateSettings(): void;
    render(): JSX.Element;
    protected getListElements(): JSX.Element[];
    protected renderListElement(page: PageModel, index: number): JSX.Element;
    protected clickScrollButton(listContainerElement: Element | null, isLeftScroll: boolean): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
}
