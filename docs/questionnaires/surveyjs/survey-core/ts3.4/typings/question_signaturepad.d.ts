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
    private fromDataUrl;
    private fromUrl;
    private refreshCanvas;
    private updateValueHandler;
    protected loadPreview(newValue: any): void;
    onSurveyLoad(): void;
    initSignaturePad(el: HTMLElement): void;
    destroySignaturePad(el: HTMLElement): void;
    /*
    * Specifies the format in which to store the signature image.
    *
    * Possible values:
    *
    * - `"png"` (default)
    * - `"jpeg"`
    * - `"svg"`
    */
    dataFormat: string;
    /*
    * Specifies the width of the signature area. Accepts positive integer numbers.
    */
    signatureWidth: number;
    /*
    * Specifies the height of the signature area. Accepts positive integer numbers.
    */
    signatureHeight: number;
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
    private readonly containerHeight: any;
    private readonly containerWidth: any;
    readonly renderedCanvasWidth: string;
    height: number;
    /*
    * Specifies whether to display a button that clears the signature area.
    *
    * Default value: `true`
    */
    allowClear: boolean;
    readonly canShowClearButton: boolean;
    /*
    * Specifies a color for the pen.
    *
    * This property accepts color values in the following formats:
    *
    * - Hexadecimal colors (`"#FF0000"`)
    * - RGB colors (`"rgb(255,0,0)"`)
    * - Color names (`"red"`)
    * @see backgroundColor
    */
    penColor: string;
    /*
    * Specifies a color for the signature area background. Ignored if [`backgroundImage`](#backgroundImage) is set.
    *
    * This property accepts color values in the following formats:
    *
    * - Hexadecimal colors (`"#FF0000"`)
    * - RGB colors (`"rgb(255,0,0)"`)
    * - Color names (`"red"`)
    * @see penColor
    */
    backgroundColor: string;
    /*
    * An image to display in the background of the signature area. Accepts a base64 or URL string value.
    * @see backgroundColor
    */
    backgroundImage: string;
    readonly clearButtonCaption: string;
    /**
     * A Boolean value that specifies whether to show the placeholder text in the signature area.
     *
     * Default value: `true`
     *
     * Use the [`placeholder`](#placeholder) and [`placeholderReadOnly`](#placeholderReadOnly) properties to specify placeholder texts for the signature area in edit mode and in read-only or preview mode.
     */
    showPlaceholder: boolean;
    readonly locRenderedPlaceholder: any;
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
    onBlur: (event: any) => void;
    protected uploadResultItemToValue(r: any): any;
    protected setValueFromResult(arg: any): void;
    clearValue(keepComment?: boolean): void;
    endLoadingFromJson(): void;
}
