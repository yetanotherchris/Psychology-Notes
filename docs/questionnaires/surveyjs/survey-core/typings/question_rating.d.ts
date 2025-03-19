import { ItemValue } from "./itemvalue";
import { Question } from "./question";
import { LocalizableString } from "./localizablestring";
import { Base } from "./base";
import { DropdownListModel } from "./dropdownListModel";
import { ISurveyImpl } from "./base-interfaces";
import { ITheme } from "./themes";
export declare class RenderedRatingItem extends Base {
    itemValue: ItemValue;
    private locString;
    private onStringChangedCallback;
    get value(): number;
    highlight: "none" | "highlighted" | "unhighlighted";
    get locText(): LocalizableString;
    text: string;
    style: any;
    constructor(itemValue: ItemValue, locString?: LocalizableString);
}
/**
 * A class that describes the Rating Scale question type.
 *
 * [View Demo](https://surveyjs.io/form-library/examples/rating-scale/ (linkStyle))
 */
export declare class QuestionRatingModel extends Question {
    constructor(name: string);
    private setIconsToRateValues;
    endLoadingFromJson(): void;
    private _syncPropertiesChanging;
    private registerSychProperties;
    private useRateValues;
    private updateRateMax;
    private updateRateMin;
    private updateRateCount;
    initPropertyDependencies(): void;
    inputHasValue: boolean;
    get showSelectedItemLocText(): boolean;
    get selectedItemLocText(): LocalizableString;
    autoGenerate: boolean;
    /**
     * A list of rate values.
     *
     * This property accepts an array of objects with the following structure:
     *
     * ```js
     * {
     *   "value": any, // A value to be saved in survey results
     *   "text": String, // A display text. This property supports Markdown. When `text` is undefined, `value` is used.
     *   "customProperty": any // Any property that you find useful.
     * }
     * ```
     *
     * If you add custom properties, refer to the following help topic to learn how to serialize them into JSON: [Add Custom Properties to Property Grid](https://surveyjs.io/survey-creator/documentation/property-grid#add-custom-properties-to-the-property-grid).
     *
     * To enable Markdown support for the `text` property, implement Markdown-to-HTML conversion in the [onTextMarkdown](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#onTextMarkdown) event handler. For an example, refer to the following demo: [Convert Markdown to HTML with Showdown](https://surveyjs.io/form-library/examples/edit-survey-questions-markdown/).
     *
     * If you need to specify only the `value` property, you can set the `rateValues` property to an array of numbers, for example, `[ 3, 6, 10 ]`. These values are both saved in survey results and used as display text.
     *
     * If you do not specify the `rateValues` property, rate values are generated automatically based upon the [`rateMin`](https://surveyjs.io/form-library/documentation/api-reference/rating-scale-question-model#rateMin), [`rateMax`](https://surveyjs.io/form-library/documentation/api-reference/rating-scale-question-model#rateMax), [`rateStep`](https://surveyjs.io/form-library/documentation/api-reference/rating-scale-question-model#rateStep), and [`rateCount`](https://surveyjs.io/form-library/documentation/api-reference/rating-scale-question-model#rateCount) property values.
     *
     * [View Demo](https://surveyjs.io/form-library/examples/rating-scale/ (linkStyle))
     */
    get rateValues(): Array<any>;
    set rateValues(val: Array<any>);
    /**
     * Specifies the first rate value in the generated sequence of rate values. Applies if the [`rateValues`](https://surveyjs.io/form-library/documentation/api-reference/rating-scale-question-model#rateValues) array is empty.
     *
     * Default value: 1
     *
     * [View Demo](https://surveyjs.io/form-library/examples/rating-scale/ (linkStyle))
     * @see rateMax
     * @see rateStep
     * @see rateCount
     */
    get rateMin(): number;
    set rateMin(val: number);
    /**
     * Specifies the last rate value in the generated sequence of rate values. Applies if the [`rateValues`](https://surveyjs.io/form-library/documentation/api-reference/rating-scale-question-model#rateValues) array is empty.
     *
     * Default value: 5
     *
     * [View Demo](https://surveyjs.io/form-library/examples/rating-scale/ (linkStyle))
     * @see rateMin
     * @see rateStep
     * @see rateCount
     */
    get rateMax(): number;
    set rateMax(val: number);
    /**
     * Specifies a step with which to generate rate values. Applies if the [`rateValues`](https://surveyjs.io/form-library/documentation/api-reference/rating-scale-question-model#rateValues) array is empty.
     *
     * Default value: 1
     *
     * [View Demo](https://surveyjs.io/form-library/examples/rating-scale/ (linkStyle))
     * @see rateMin
     * @see rateMax
     * @see rateCount
     */
    get rateStep(): number;
    set rateStep(val: number);
    /**
     * Specifies the number of rate values you want to generate. Applies if the [`rateValues`](https://surveyjs.io/form-library/documentation/api-reference/rating-scale-question-model#rateValues) array is empty.
     *
     * Set the [`rateMin`](https://surveyjs.io/form-library/documentation/api-reference/rating-scale-question-model#rateMin) or [`rateMax`](https://surveyjs.io/form-library/documentation/api-reference/rating-scale-question-model#rateMax) property to specify the first or the last rate value. Use the [`rateStep`](https://surveyjs.io/form-library/documentation/api-reference/rating-scale-question-model#rateStep) property to specify a step with which to generate rate values.
     *
     * [View Demo](https://surveyjs.io/form-library/examples/rating-scale/ (linkStyle))
     */
    rateCount: number;
    private static colorsCalculated;
    private static badColor;
    private static normalColor;
    private static goodColor;
    private static badColorLight;
    private static normalColorLight;
    private static goodColorLight;
    private updateColors;
    protected getDisplayValueCore(keysAsText: boolean, value: any): any;
    get visibleRateValues(): ItemValue[];
    itemValuePropertyChanged(item: ItemValue, name: string, oldValue: any, newValue: any): void;
    private createRenderedRateItems;
    renderedRateItems: Array<RenderedRatingItem>;
    private createRateValues;
    private correctValue;
    getType(): string;
    protected getFirstInputElementId(): string;
    getInputId(index: number): string;
    get questionName(): string;
    supportGoNextPageAutomatic(): boolean;
    supportOther(): boolean;
    protected getPlainDataCalculatedValue(propName: string): any;
    /**
     * Specifies a description for the minimum (first) rate value.
     * @see rateDescriptionLocation
     * @see displayRateDescriptionsAsExtremeItems
     * @see rateValues
     * @see rateMin
     */
    get minRateDescription(): string;
    set minRateDescription(val: string);
    get locMinRateDescription(): LocalizableString;
    /**
     * Specifies a description for the maximum (last) rate value.
     * @see rateDescriptionLocation
     * @see displayRateDescriptionsAsExtremeItems
     * @see rateValues
     * @see rateMax
     */
    get maxRateDescription(): string;
    set maxRateDescription(val: string);
    get locMaxRateDescription(): LocalizableString;
    hasMinRateDescription: boolean;
    hasMaxRateDescription: boolean;
    get hasMinLabel(): boolean;
    get hasMaxLabel(): boolean;
    /**
    * Specifies whether to display [`minRateDescription`](https://surveyjs.io/form-library/documentation/api-reference/rating-scale-question-model#minRateDescription) and [`maxRateDescription`](https://surveyjs.io/form-library/documentation/api-reference/rating-scale-question-model#maxRateDescription) values as captions for buttons that correspond to the extreme (first and last) rate values.
    *
    * Default value: `false`
    *
    * If this property is disabled, the `minRateDescription` and `maxRateDescription` values are displayed as plain non-clickable texts.
    *
    * If any of the `minRateDescription` and `maxRateDescription` properties is empty, the corresponding rate value's `value` or `text` is displayed as a button caption.
    * @see rateDescriptionLocation
    * @see rateMin
    * @see rateMax
    * @see rateValues
    */
    displayRateDescriptionsAsExtremeItems: boolean;
    /**
    * Specifies whether to display rate values as buttons or items in a drop-down list.
    *
    * Possible values:
    *
    * - `"buttons"` - Displays rate values as buttons in a row.
    * - `"dropdown"` - Displays rate values as items in a drop-down list.
    * - `"auto"` (default) - Selects between the `"buttons"` and `"dropdown"` modes based on the available width. When the width is insufficient to display buttons, the question displays a dropdown.
    *
    * [View Demo](https://surveyjs.io/form-library/examples/ui-adaptation-modes-for-rating-scale/ (linkStyle))
    * @see rateType
    */
    displayMode: "dropdown" | "buttons" | "auto";
    private updateRenderAsBasedOnDisplayMode;
    onSurveyLoad(): void;
    /**
    * Specifies the alignment of [`minRateDescription`](https://surveyjs.io/form-library/documentation/api-reference/rating-scale-question-model#minRateDescription) and [`maxRateDescription`](https://surveyjs.io/form-library/documentation/api-reference/rating-scale-question-model#maxRateDescription) texts.
    *
    * Possible values:
    *
    * - `"leftRight"` (default) - Aligns `minRateDescription` to the left of rate values and `maxRateDescription` to their right.
    * - `"top"` - Displays the descriptions above the minimum and maximum rate values.
    * - `"bottom"` - Displays both descriptions below the minimum and maximum rate values.
    * - `"topBottom"` - Displays `minRateDescription` above the minimum rate value and `maxRateDescription` below the maximum rate value.
    * @see displayRateDescriptionsAsExtremeItems
    */
    rateDescriptionLocation: "leftRight" | "top" | "bottom" | "topBottom";
    /**
     * Specifies the visual representation of rate values.
     *
     * Possible values:
     *
     * - `"labels"` (default) - Displays rate values as buttons with labels.
     * - `"stars"` - Displays rate values as stars.
     * - `"smileys"` - Displays rate values as smiley faces.
     *
     * [View Demo](https://surveyjs.io/form-library/examples/rating-scale/ (linkStyle))
     * @see scaleColorMode
     * @see rateColorMode
     * @see displayMode
     */
    rateType: "labels" | "stars" | "smileys";
    get rateDisplayMode(): "labels" | "stars" | "smileys";
    set rateDisplayMode(val: "labels" | "stars" | "smileys");
    /**
     * Specifies how to colorize the smiley face rating scale. Applies only if [`rateType`](https://surveyjs.io/form-library/documentation/api-reference/rating-scale-question-model#rateType) is `"smileys"`.
     *
     * Possible values:
     *
     * - `"monochrome"` (default) - Displays emojis in monochrome.
     * - `"colored"` - Displays emojis in color.
     *
     * [View Demo](https://surveyjs.io/form-library/examples/rating-scale/ (linkStyle))
     * @see rateColorMode
     */
    scaleColorMode: "monochrome" | "colored";
    /**
     * Specifies how to colorize the selected emoji. Applies only if [`rateType`](https://surveyjs.io/form-library/documentation/api-reference/rating-scale-question-model#rateType) is `"smileys"`.
     *
     * Possible values:
     *
     * - `"default"` - Displays the selected emoji in default survey color.
     * - `"scale"` (default) - Inherits the color from the scale.
     * @see scaleColorMode
     */
    rateColorMode: "default" | "scale";
    get isStar(): boolean;
    get isSmiley(): boolean;
    getDefaultItemComponent(): string;
    /**
     * The name of a component used to render items.
     */
    get itemComponent(): string;
    set itemComponent(value: string);
    protected valueToData(val: any): any;
    setValueFromClick(value: any): void;
    onItemMouseIn(item: RenderedRatingItem): void;
    onItemMouseOut(item: RenderedRatingItem): void;
    get itemSmallMode(): boolean;
    get ratingRootCss(): string;
    get itemStarIcon(): string;
    get itemStarIconAlt(): string;
    getItemSmiley(item: ItemValue): string;
    getItemSmileyIconName(item: ItemValue): string;
    getItemClassByText(item: ItemValue, text: string): string;
    private getRenderedItemColor;
    getItemStyle(item: ItemValue, highlight?: "none" | "highlighted" | "unhighlighted"): {
        "--sd-rating-item-color"?: undefined;
        "--sd-rating-item-color-light"?: undefined;
    } | {
        "--sd-rating-item-color": string;
        "--sd-rating-item-color-light": string;
    } | {
        "--sd-rating-item-color": string;
        "--sd-rating-item-color-light"?: undefined;
    };
    getItemClass(item: ItemValue, highlight?: "none" | "highlighted" | "unhighlighted"): string;
    getControlClass(): string;
    get placeholder(): string;
    set placeholder(val: string);
    get locPlaceholder(): LocalizableString;
    get allowClear(): boolean;
    get searchEnabled(): boolean;
    get renderedValue(): any;
    set renderedValue(val: any);
    isItemSelected(item: ItemValue): boolean;
    get visibleChoices(): ItemValue[];
    get readOnlyText(): any;
    needResponsiveWidth(): boolean;
    protected supportResponsiveness(): boolean;
    protected onBeforeSetCompactRenderer(): void;
    protected getCompactRenderAs(): string;
    protected getDesktopRenderAs(): string;
    private dropdownListModelValue;
    set dropdownListModel(val: DropdownListModel);
    get dropdownListModel(): DropdownListModel;
    protected updateCssClasses(res: any, css: any): void;
    protected calcCssClasses(css: any): any;
    themeChanged(theme: ITheme): void;
    setSurveyImpl(value: ISurveyImpl, isLight?: boolean): void;
    dispose(): void;
}
