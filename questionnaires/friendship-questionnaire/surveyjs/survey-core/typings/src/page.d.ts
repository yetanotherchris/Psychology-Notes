import { IPage, IPanel, IElement, ISurvey } from "./base-interfaces";
import { PanelModel } from "./panel";
import { LocalizableString } from "./localizablestring";
/**
 * The `PageModel` object describes a survey page and contains properties and methods that allow you to control the page and access its elements (panels and questions).
 *
 * [View Demo](https://surveyjs.io/form-library/examples/nps-question/ (linkStyle))
 */
export declare class PageModel extends PanelModel implements IPage {
    private hasShownValue;
    isPageContainer: boolean;
    constructor(name?: string);
    getType(): string;
    toString(): string;
    get isPage(): boolean;
    get isPanel(): boolean;
    get showPanelAsPage(): boolean;
    get hasEditButton(): boolean;
    protected getElementsForRows(): Array<IElement>;
    protected disposeElements(): void;
    protected onRemoveElement(element: IElement): void;
    getTemplate(): string;
    get no(): string;
    get cssTitleNumber(): string;
    getCssTitleExpandableSvg(): string;
    get cssRequiredMark(): string;
    protected canShowPageNumber(): boolean;
    protected canShowTitle(survey: ISurvey): boolean;
    protected setTitleValue(val: string): void;
    /**
     * A caption displayed on a navigation button in the TOC or progress bar. Applies when [`showTOC`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#showTOC) is `true` or when the [progress bar is visible](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#showProgressBar), [`progressBarType`](https://surveyjs.io/form-library/documentation/surveymodel#progressBarType) is set to `"pages"`, and [`progressBarShowPageTitles`](https://surveyjs.io/form-library/documentation/surveymodel#progressBarShowPageTitles) is `true`.
     *
     * If navigation titles are unspecified, the navigation buttons display page [titles](https://surveyjs.io/form-library/documentation/api-reference/page-model#title) or [names](https://surveyjs.io/form-library/documentation/pagemodel#name).
     */
    get navigationTitle(): string;
    set navigationTitle(val: string);
    /**
     * Explanatory text displayed under a navigation button in the progress bar. Applies when the [progress bar is visible](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#showProgressBar), `SurveyModel`'s [`progressBarType`](https://surveyjs.io/form-library/documentation/surveymodel#progressBarType) is set to `"pages"`, and [`progressBarShowPageTitles`](https://surveyjs.io/form-library/documentation/surveymodel#progressBarShowPageTitles) is `true`.
     */
    get navigationDescription(): string;
    set navigationDescription(val: string);
    get locNavigationDescription(): LocalizableString;
    navigationLocStrChanged(): void;
    getMarkdownHtml(text: string, name: string): string;
    get passed(): boolean;
    set passed(val: boolean);
    protected removeFromParent(): void;
    /**
     * The visible index of the page. It has values from 0 to visible page count - 1.
     * @see SurveyModel.visiblePages
     * @see SurveyModel.pages
     */
    get visibleIndex(): number;
    set visibleIndex(val: number);
    protected canRenderFirstRows(): boolean;
    /**
     * Returns `true` if this page is a start page.
     *
     * Refer to the following help topic for more information on how to configure a start page: [Start Page](https://surveyjs.io/form-library/documentation/design-survey-create-a-multi-page-survey#start-page).
     */
    get isStartPage(): boolean;
    get isStarted(): boolean;
    protected calcCssClasses(css: any): any;
    protected getCssPanelTitle(): string;
    get cssRoot(): string;
    protected getCssError(cssClasses: any): string;
    num: number;
    /**
     * @deprecated Use the [`showNavigationButtons`](https://surveyjs.io/form-library/documentation/api-reference/page-model#showNavigationButtons) property instead.
     */
    get navigationButtonsVisibility(): string;
    set navigationButtonsVisibility(val: string);
    /**
     * Gets or sets the visibility of the Start, Next, Previous, and Complete navigation buttons on this page. Overrides the [`showNavigationButtons`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#showNavigationButtons) property specified on the survey-level.
     *
     * Default value: `undefined` (the visibility depends on the survey-level setting)
     */
    get showNavigationButtons(): boolean | string;
    set showNavigationButtons(val: boolean | string);
    setShowNavigationButtonsProperty(val: boolean | string): void;
    /**
     * Returns `true` if this is the current page.
     * @see SurveyModel.currentPage
     */
    get isActive(): boolean;
    /**
     * Returns `true` if the respondent has already seen this page during the current session.
     */
    get wasShown(): boolean;
    get hasShown(): boolean;
    setWasShown(val: boolean): void;
    /**
     * Scrolls this page to the top.
     */
    scrollToTop(): void;
    /**
     * A time period that a respondent has spent on this page so far; measured in seconds. Applies only to [quiz surveys](https://surveyjs.io/form-library/documentation/design-survey-create-a-quiz).
     * @see timeLimit
     */
    timeSpent: number;
    /**
     * Returns a list of all panels on this page.
     * @param visibleOnly A Boolean value that specifies whether to include only visible panels.
     * @param includingDesignTime For internal use.
     */
    getAllPanels(visibleOnly?: boolean, includingDesignTime?: boolean): Array<IPanel>;
    getPanels(visibleOnly?: boolean, includingDesignTime?: boolean): Array<IPanel>;
    /**
     * A time period that a respondent has to complete this page; measured in seconds. Applies only to [quiz surveys](https://surveyjs.io/form-library/documentation/design-survey-create-a-quiz).
     *
     * Default value: 0 (time is unlimited)
     *
     * Alternatively, you can use the `SurveyModel`'s [`timeLimitPerPage`](https://surveyjs.io/form-library/documentation/surveymodel#timeLimitPerPage) property to specify identical time periods for all survey pages.
     * @see timeSpent
     */
    get timeLimit(): number;
    set timeLimit(val: number);
    /**
     * @deprecated Use the [`timeLimit`](https://surveyjs.io/form-library/documentation/api-reference/page-model#timeLimit) property instead.
     */
    get maxTimeToFinish(): number;
    set maxTimeToFinish(val: number);
    getMaxTimeToFinish(): number;
    protected onNumChanged(value: number): void;
    protected onVisibleChanged(): void;
    ensureRowsVisibility(): void;
    private _isReadyForClean;
    get isReadyForClean(): boolean;
    set isReadyForClean(val: boolean);
    isReadyForCleanChangedCallback: () => void;
    enableOnElementRerenderedEvent(): void;
    disableOnElementRerenderedEvent(): void;
}
