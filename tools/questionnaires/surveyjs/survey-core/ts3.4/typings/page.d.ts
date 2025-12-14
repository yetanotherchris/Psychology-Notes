import { IPage, IPanel, IElement, ISurveyElement } from "./base-interfaces";
import { PanelModelBase } from "./panel";
import { LocalizableString } from "./localizablestring";
/**
 * The `PageModel` object describes a survey page and contains properties and methods that allow you to control the page and access its elements (panels and questions).
 *
 * [View Demo](https://surveyjs.io/form-library/examples/nps-question/ (linkStyle))
 */
export declare class PageModel extends PanelModelBase implements IPage {
    private hasShownValue;
    private dragDropPageHelper;
    constructor(name?: string);
    getType(): string;
    toString(): string;
    readonly isPage: boolean;
    protected canShowPageNumber(): boolean;
    protected canShowTitle(): boolean;
    /*
    * A caption displayed on a navigation button in the TOC or progress bar. Applies when [`showTOC`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#showTOC) is `true` or when the [progress bar is visible](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#showProgressBar), [`progressBarType`](https://surveyjs.io/form-library/documentation/surveymodel#progressBarType) is set to `"pages"`, and [`progressBarShowPageTitles`](https://surveyjs.io/form-library/documentation/surveymodel#progressBarShowPageTitles) is `true`.
    *
    * If navigation titles are unspecified, the navigation buttons display page [titles](https://surveyjs.io/form-library/documentation/api-reference/page-model#title) or [names](https://surveyjs.io/form-library/documentation/pagemodel#name).
    */
    navigationTitle: string;
    /*
    * Explanatory text displayed under a navigation button in the progress bar. Applies when the [progress bar is visible](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#showProgressBar), `SurveyModel`'s [`progressBarType`](https://surveyjs.io/form-library/documentation/surveymodel#progressBarType) is set to `"pages"`, and [`progressBarShowPageTitles`](https://surveyjs.io/form-library/documentation/surveymodel#progressBarShowPageTitles) is `true`.
    */
    navigationDescription: string;
    readonly locNavigationDescription: LocalizableString;
    navigationLocStrChanged(): void;
    passed: boolean;
    protected removeFromParent(): void;
    onFirstRendering(): void;
    /*
    * The visible index of the page. It has values from 0 to visible page count - 1.
    * @see SurveyModel.visiblePages
    * @see SurveyModel.pages
    */
    visibleIndex: number;
    protected canRenderFirstRows(): boolean;
    /*
    * Returns `true` if this page is a start page.
    *
    * Refer to the following help topic for more information on how to configure a start page: [Start Page](https://surveyjs.io/form-library/documentation/design-survey-create-a-multi-page-survey#start-page).
    */
    readonly isStartPage: boolean;
    readonly isStarted: boolean;
    protected calcCssClasses(css: any): any;
    readonly cssTitle: string;
    readonly cssRoot: string;
    protected getCssError(cssClasses: any): string;
    num: number;
    /*
    * Set this property to "hide" to make "Prev", "Next" and "Complete" buttons are invisible for this page. Set this property to "show" to make these buttons visible, even if survey showNavigationButtons property is false.
    * @see SurveyMode.showNavigationButtons
    */
    navigationButtonsVisibility: string;
    /*
    * Returns `true` if this is the current page.
    * @see SurveyModel.currentPage
    */
    readonly isActive: boolean;
    /*
    * Returns `true` if the respondent has already seen this page during the current session.
    */
    readonly wasShown: boolean;
    readonly hasShown: boolean;
    setWasShown(val: boolean): void;
    /**
     * Scrolls this page to the top.
     */
    scrollToTop(): void;
    /**
     * A time period that a respondent has spent on this page so far; measured in seconds. Applies only to [quiz surveys](https://surveyjs.io/form-library/documentation/design-survey-create-a-quiz).
     * @see maxTimeToFinish
     */
    timeSpent: number;
    /**
     * Returns a list of all panels on this page.
     * @param visibleOnly A Boolean value that specifies whether to include only visible panels.
     * @param includingDesignTime For internal use.
     */
    getAllPanels(visibleOnly?: boolean, includingDesignTime?: boolean): Array<IPanel>;
    getPanels(visibleOnly?: boolean, includingDesignTime?: boolean): Array<IPanel>;
    /*
    * A time period that a respondent has to complete this page; measured in seconds. Applies only to [quiz surveys](https://surveyjs.io/form-library/documentation/design-survey-create-a-quiz).
    *
    * A negative value or 0 sets an unlimited time period.
    *
    * Alternatively, you can use the `SurveyModel`'s [`maxTimeToFinishPage`](https://surveyjs.io/form-library/documentation/surveymodel#maxTimeToFinishPage) property to specify identical time periods for all survey pages.
    * @see timeSpent
    */
    maxTimeToFinish: number;
    getMaxTimeToFinish(): number;
    protected onNumChanged(value: number): void;
    protected onVisibleChanged(): void;
    getDragDropInfo(): any;
    dragDropStart(src: IElement, target: IElement, nestedPanelDepth?: number): void;
    dragDropMoveTo(destination: ISurveyElement, isBottom?: boolean, isEdge?: boolean): boolean;
    dragDropFinish(isCancel?: boolean): IElement;
    ensureRowsVisibility(): void;
}
