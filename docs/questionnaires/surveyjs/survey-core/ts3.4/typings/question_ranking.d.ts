import { ISurveyImpl } from "./base-interfaces";
import { DragDropRankingChoices } from "./dragdrop/ranking-choices";
import { ItemValue } from "./itemvalue";
import { QuestionCheckboxModel } from "./question_checkbox";
import { AnimationGroup } from "./utils/animation";
/**
 * A class that describes the Ranking question type.
 *
 * [View Demo](https://surveyjs.io/form-library/examples/questiontype-ranking/ (linkStyle))
 */
export declare class QuestionRankingModel extends QuestionCheckboxModel {
    private domNode;
    private dragOrClickHelper;
    constructor(name: string);
    getType(): string;
    getItemTabIndex(item: ItemValue): number;
    protected supportContainerQueries(): boolean;
    readonly rootClass: string;
    protected isItemSelectedCore(item: ItemValue): boolean;
    protected getItemClassCore(item: ItemValue, options: any): string;
    getContainerClasses(containerType?: string): string;
    protected isItemCurrentDropTarget(item: ItemValue): boolean;
    readonly ghostPositionCssClass: string;
    getItemIndexClasses(item: ItemValue): string;
    getNumberByIndex(index: number): string;
    private updateRankingChoicesSync;
    setSurveyImpl(value: ISurveyImpl, isLight?: boolean): void;
    isAnswerCorrect(): boolean;
    readonly requireStrictCompare: boolean;
    onSurveyValueChanged(newValue: any): void;
    onSurveyLoad(): void;
    protected onVisibleChoicesChanged: () => void;
    localeChanged: () => void;
    private addToValueByVisibleChoices;
    private removeFromValueByVisibleChoices;
    private getChoicesAnimationOptions;
    private _rankingChoicesAnimation;
    readonly rankingChoicesAnimation: AnimationGroup<ItemValue>;
    private _unRankingChoicesAnimation;
    readonly unRankingChoicesAnimation: AnimationGroup<ItemValue>;
    rankingChoices: Array<ItemValue>;
    unRankingChoices: Array<ItemValue>;
    private _renderedRankingChoices;
    private _renderedUnRankingChoices;
    renderedRankingChoices: Array<ItemValue>;
    renderedUnRankingChoices: Array<ItemValue>;
    private updateRenderedRankingChoices;
    private updateRenderedUnRankingChoices;
    private updateRankingChoices;
    updateUnRankingChoices(newRankingChoices: Array<ItemValue>): void;
    private updateRankingChoicesSelectToRankMode;
    dragDropRankingChoices: DragDropRankingChoices;
    currentDropTarget: ItemValue;
    endLoadingFromJson(): void;
    private setDragDropRankingChoices;
    protected createDragDropRankingChoices(): DragDropRankingChoices;
    private draggedChoiceValue;
    private draggedTargetNode;
    handlePointerDown: (event: PointerEvent, choice: ItemValue, node: HTMLElement) => void;
    startDrag: (event: PointerEvent) => void;
    handlePointerUp: (event: PointerEvent, choice: ItemValue, node: HTMLElement) => void;
    private isDragStartNodeValid;
    private readonly allowStartDrag: any;
    private canStartDragDueMaxSelectedChoices;
    private canStartDragDueItemEnabled;
    checkMaxSelectedChoicesUnreached(): boolean;
    afterRenderQuestionElement(el: HTMLElement): void;
    beforeDestroyQuestionElement(el: HTMLElement): void;
    handleKeydown: (event: KeyboardEvent, choice: ItemValue) => void;
    protected supportSelectAll(): boolean;
    supportOther(): boolean;
    supportNone(): boolean;
    supportRefuse(): boolean;
    supportDontKnow(): boolean;
    handleKeydownSelectToRank(event: KeyboardEvent, movedElement: ItemValue, hardKey?: string, isNeedFocus?: boolean): void;
    private setValueAfterKeydown;
    private focusItem;
    isValueSetByUser: boolean;
    setValue: () => void;
    getIconHoverCss(): string;
    getIconFocusCss(): string;
    /*
    * Specifies whether to use a long tap (press and hold) gesture to start dragging.
    *
    * Default value: `true`
    *
    * Disable this property if you want to start dragging when users perform a scroll gesture.
    */
    longTap: boolean;
    protected getDefaultItemComponent(): string;
    /*
    * Specifies whether users can select choices they want to rank.
    *
    * When you enable this property, the Ranking question displays two areas for ranked and unranked choices. To order choices, users should first drag them from the unranked to the ranked area. Use this mode if you want to let users order only the choices they select.
    *
    * Default value: `false`
    * @see selectToRankAreasLayout
    */
    selectToRankEnabled: boolean;
    carryForwardStartUnranked: boolean;
    /*
    * Specifies the layout of the ranked and unranked areas. Applies when [`selectToRankEnabled`](https://surveyjs.io/form-library/documentation/api-reference/ranking-question-model#selectToRankEnabled) is `true`.
    *
    * Possible values:
    *
    * - `"horizontal"` (default) - The ranked and unranked areas are positioned next to each other. Users drag and drop choices between them in the horizontal direction.
    * - `"vertical"`- The ranked area is positioned above the unranked area. Users drag and drop choices between them in the vertical direction.
    * @see selectToRankAreasLayout
    */
    selectToRankAreasLayout: string;
    readonly renderedSelectToRankAreasLayout: string;
    isMobileMode(): boolean;
    /**
     * A placeholder displayed in the area for ranked choices. Applies when [`selectToRankEnabled`](https://surveyjs.io/form-library/documentation/api-reference/ranking-question-model#selectToRankEnabled) is `true`.
     */
    selectToRankEmptyRankedAreaText: string;
    /**
     * A placeholder displayed in the area for unranked choices. Applies when [`selectToRankEnabled`](https://surveyjs.io/form-library/documentation/api-reference/ranking-question-model#selectToRankEnabled) is `true`.
     */
    selectToRankEmptyUnrankedAreaText: string;
    useFullItemSizeForShortcut: boolean;
    readonly dragDropSvgIcon: string;
    readonly arrowsSvgIcon: string;
    readonly dashSvgIcon: string;
    readonly isNewA11yStructure: boolean;
}
