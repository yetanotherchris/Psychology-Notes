import { ITheme } from "./themes";
import { QuestionFileModelBase } from "./question_file";
/**
 * A class that describes the Signature question type.
 *
 * [View Demo](https://surveyjs.io/form-library/examples/signature-pad-widget-javascript/ (linkStyle))
 */
export declare class QuestionSignaturePadModel extends QuestionFileModelBase {
    isDrawingValue: boolean;
    isReadyForUpload: boolean;
    private getPenColorFromTheme;
    private updateColors;
    protected getCssRoot(cssClasses: any): string;
    protected getFormat(): "" | "image/svg+xml" | "image/jpeg";
    protected updateValue(): void;
    constructor(name: string);
    getType(): string;
    afterRenderQuestionElement(el: HTMLElement): void;
    beforeDestroyQuestionElement(el: HTMLElement): void;
    themeChanged(theme: ITheme): void;
    private canvas;
    private element;
    private scale;
    private valueIsUpdatingInternally;
    valueWasChangedFromLastUpload: boolean;
    private resizeCanvas;
    private scaleCanvas;
    private fromUrl;
    private fromDataUrl;
    private _loadedData;
    get loadedData(): string;
    protected loadPreview(newValue: any): void;
    protected onChangeQuestionValue(newValue: any): void;
    onSurveyLoad(): void;
    private updateValueHandler;
    initSignaturePad(el: HTMLElement): void;
    destroySignaturePad(el: HTMLElement): void;
    /**
     * Specifies the format in which to store the signature image.
     *
     * Possible values:
     *
     * - `"png"` (default)
     * - `"jpeg"`
     * - `"svg"`
     */
    get dataFormat(): string;
    set dataFormat(val: string);
    /**
     * Specifies the width of the signature area. Accepts positive integer numbers.
     */
    get signatureWidth(): number;
    set signatureWidth(val: number);
    /**
     * Specifies the height of the signature area. Accepts positive integer numbers.
     */
    get signatureHeight(): number;
    set signatureHeight(val: number);
    /**
     * Specifies whether the signature area should be scaled to fit into the question width.
     *
     * Default value: `false`
     *
     * This property auto-scales the signature area to fill all available width within the question box while maintaining the default 3:2 aspect ratio. If you set [custom width](#signatureWidth) and [height](#signatureHeight) values, the setting will keep the aspect ratio of these dimensions.
     *
     * > The signature area is scaled only for display. The image saved in survey results will have dimensions specified by the [`signatureHeight`](#signatureHeight) and [`signatureWidth`](#signatureWidth) properties.
     */
    signatureAutoScaleEnabled: boolean;
    /**
     * Speicifies the minimum width of pen strokes, measured in pixels.
     *
     * Default value: 0.5
     */
    penMinWidth: number;
    /**
     * Speicifies the maximum width of pen strokes, measured in pixels.
     *
     * Default value: 2.5
     */
    penMaxWidth: number;
    private get containerHeight();
    private get containerWidth();
    get renderedCanvasWidth(): string;
    get height(): number;
    set height(val: number);
    /**
     * Specifies whether to display a button that clears the signature area.
     *
     * Default value: `true`
     */
    get allowClear(): boolean;
    set allowClear(val: boolean);
    get canShowClearButton(): boolean;
    /**
     * Specifies a color for the pen.
     *
     * This property accepts color values in the following formats:
     *
     * - Hexadecimal colors (`"#FF0000"`)
     * - RGB colors (`"rgb(255,0,0)"`)
     * - Color names (`"red"`)
     * @see backgroundColor
     */
    get penColor(): string;
    set penColor(val: string);
    /**
     * Specifies a color for the signature area background. Ignored if [`backgroundImage`](#backgroundImage) is set.
     *
     * This property accepts color values in the following formats:
     *
     * - Hexadecimal colors (`"#FF0000"`)
     * - RGB colors (`"rgb(255,0,0)"`)
     * - Color names (`"red"`)
     * @see penColor
     */
    get backgroundColor(): string;
    set backgroundColor(val: string);
    /**
     * An image to display in the background of the signature area. Accepts a base64 or URL string value.
     * @see backgroundColor
     */
    get backgroundImage(): string;
    set backgroundImage(val: string);
    get clearButtonCaption(): string;
    /**
     * A Boolean value that specifies whether to show the placeholder text in the signature area.
     *
     * Default value: `true`
     *
     * Use the [`placeholder`](#placeholder) and [`placeholderReadOnly`](#placeholderReadOnly) properties to specify placeholder texts for the signature area in edit mode and in read-only or preview mode.
     */
    showPlaceholder: boolean;
    get locRenderedPlaceholder(): any;
    nothingIsDrawn(): boolean;
    needShowPlaceholder(): boolean;
    /**
     * A placeholder text for the signature area. Applies when the [`showPlaceholder`](#showPlaceholder) property is `true`.
     */
    placeholder: string;
    /**
     * A placeholder text for the signature area in read-only or preview mode. Applies when the [`showPlaceholder`](#showPlaceholder) property is `true`.
     */
    placeholderReadOnly: string;
    protected onBlurCore(event: any): void;
    protected uploadResultItemToValue(r: any): any;
    protected setValueFromResult(arg: any): void;
    clearValue(keepComment?: boolean): void;
    endLoadingFromJson(): void;
}
