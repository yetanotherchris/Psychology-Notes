import * as React from "react";
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
    render(): React.JSX.Element;
    protected getListElements(): React.JSX.Element[];
    protected renderListElement(page: PageModel, index: number): React.JSX.Element;
    protected clickScrollButton(listContainerElement: Element | null, isLeftScroll: boolean): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
}
