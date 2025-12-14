import { Base } from "./base";
import { SurveyModel } from "./survey";
import { LocalizableString } from "./localizablestring";
/**
 * A class that renders a survey in a pop-up window.
 *
 * [View Demo](https://surveyjs.io/form-library/examples/popup-survey/ (linkStyle))
 */
export declare class PopupSurveyModel extends Base {
    surveyValue: SurveyModel;
    windowElement: HTMLDivElement;
    templateValue: string;
    expandedChangedCallback: () => void;
    showingChangedCallback: () => void;
    constructor(jsonObj: any, initialModel?: SurveyModel);
    protected onCreating(): void;
    getType(): string;
    /*
    * A [`SurveyModel`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model) instance rendered in the pop-up window.
    */
    readonly survey: SurveyModel;
    /**
     * Specifies how many seconds the pop-up window should remain open after users complete the survey.
     *
     * Default value: 0 (the window is closed immediately)
     *
     * Set this property to a negative value (for instance, -1) to keep the pop-up window open without a time limit.
     */
    closeOnCompleteTimeout: number;
    /*
    * Indicates whether the pop-up survey appears on the page, regardless of its [expand state](#isExpanded).
    *
    * You can set this property to `true` or `false` to control visibility of the pop-up survey. Alternatively, you can use the [`show()`](#show) and [`hide()`](#hide) methods.
    */
    isShowing: boolean;
    isFullScreen: boolean;
    /**
     * Shows the pop-up survey. The survey may appear [expanded or collapsed](#isExpanded).
     *
     * As an alternative to this method, you can set the [`isShowing`](#isShowing) property to `true`.
     * @see hide
     */
    show(): void;
    /**
     * Hides the pop-up survey.
     *
     * As an alternative to this method, you can set the [`isShowing`](#isShowing) property to `false`.
     * @see show
     * @see expand
     * @see collapse
     */
    hide(): void;
    toggleFullScreen(): void;
    /*
    * Indicates whether the pop-up window is expanded or collapsed.
    *
    * You can set this property to `true` or `false` to control the expand state of the pop-up survey. Alternatively, you can use the [`expand()`](#expand) and [`collapse()`](#collapse) methods.
    */
    isExpanded: boolean;
    readonly isCollapsed: boolean;
    protected onExpandedChanged(): void;
    /*
    * A title for the pop-up window. If this property is undefined, the title is taken from [`SurveyModel`](#survey)'s [`title`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#title) property.
    */
    title: string;
    readonly locTitle: LocalizableString;
    readonly locDescription: LocalizableString;
    /**
     * Expands the pop-up window.
     *
     * As an alternative to this method, you can set the [`isExpanded`](#isExpanded) property to `true`.
     * @see collapse
     */
    expand(): void;
    /**
     * Collapses the pop-up window, leaving only the survey title visible.
     *
     * As an alternative to this method, you can set the [`isExpanded`](#isExpanded) property to `false`.
     * @see expand
     */
    collapse(): void;
    changeExpandCollapse(): void;
    /*
    * Specifies whether to display a button that closes the pop-up window.
    *
    * Default value: `false`
    *
    * If you allow users to close the pop-up window, make sure to implement a UI element that opens it. This element should call the [`show()`](#show) method or enable the [`isShowing`](#isShowing) property.
    * @see expand
    * @see collapse
    * @see hide
    */
    allowClose: boolean;
    /*
    * Specifies whether to display a button that allows respondents to show the pop-up survey in full screen mode.
    *
    * Default value: `false`
    */
    allowFullScreen: boolean;
    readonly css: any;
    readonly cssButton: string;
    readonly cssRoot: string;
    readonly cssRootCollapsedMod: string;
    readonly cssRootContent: string;
    readonly cssBody: string;
    readonly cssHeaderRoot: string;
    readonly cssHeaderTitleCollapsed: string;
    readonly cssHeaderButtonsContainer: string;
    readonly cssHeaderCollapseButton: string;
    readonly cssHeaderCloseButton: string;
    readonly cssHeaderFullScreenButton: string;
    readonly renderedWidth: string;
    width: string;
    private updateCss;
    private setCssRoot;
    private updateCssButton;
    private setCssButton;
    protected createSurvey(jsonObj: any): SurveyModel;
    protected onSurveyComplete(): void;
    onScroll(): void;
}
/**
 * Obsolete. Please use PopupSurvey
 */
export declare class SurveyWindowModel extends PopupSurveyModel {
}
