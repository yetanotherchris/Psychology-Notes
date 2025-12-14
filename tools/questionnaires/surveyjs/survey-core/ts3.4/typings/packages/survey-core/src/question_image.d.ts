import { QuestionNonValue } from "./questionnonvalue";
import { LocalizableString } from "./localizablestring";
/**
  * A class that describes the Image question type. Unlike other question types, Image cannot have a title or value.
 *
 * [View Demo](https://surveyjs.io/form-library/examples/questiontype-image/ (linkStyle))
 */
export declare class QuestionImageModel extends QuestionNonValue {
    contentNotLoaded: boolean;
    constructor(name: string);
    getType(): string;
    readonly isCompositeQuestion: boolean;
    onSurveyLoad(): void;
    /*
    * Specifies an image or video URL.
    * @see contentMode
    */
    imageLink: string;
    readonly locImageLink: LocalizableString;
    /*
    * Specifies a value for the `alt` attribute of the underlying `<img>` element.
    */
    altText: string;
    readonly locAltText: LocalizableString;
    /*
    * Specifies the height of a container for the image or video. Accepts positive numbers and CSS values.
    *
    * Default value: 150
    *
    * Use the `imageFit` property to specify how to fit the image or video into the container.
    * @see imageWidth
    * @see imageFit
    */
    imageHeight: string;
    readonly renderedStyleHeight: string;
    readonly renderedHeight: number;
    /*
    * Specifies the width of a container for the image or video. Accepts positive numbers and CSS values.
    *
    * Default value: 200
    *
    * Use the `imageFit` property to specify how to fit the image or video into the container.
    * @see imageHeight
    * @see imageFit
    */
    imageWidth: string;
    readonly renderedStyleWidth: string;
    readonly renderedWidth: number;
    /*
    * Specifies how to resize the image or video to fit it into its container.
    *
    * Refer to the [`object-fit`](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit) CSS property description for information on accepted values.
    * @see imageHeight
    * @see imageWidth
    */
    imageFit: string;
    /*
    * Specifies the type of content that the Image question displays.
    *
    * Possible values:
    *
    * - `"image"` - An image in one of the following formats: JPEG, GIF, PNG, APNG, SVG, BMP, ICO.
    * - `"video"` - A video in one of the following formats: MP4, MOV, WMV, FLV, AVI, MKV.
    * - `"youtube"` - A link to a YouTube video.
    * - `"auto"` (default) - Selects one of the above based on the [`imageLink`](https://surveyjs.io/form-library/documentation/questionimagemodel#imageLink) property.
    */
    contentMode: string;
    /*
    * Returns the type of content that the Image question displays: `"image"`, `"video"`, or `"youtube"`.
    * @see contentMode
    */
    readonly renderedMode: string;
    getImageCss(): string;
    onLoadHandler(): void;
    onErrorHandler(): void;
    private setRenderedMode;
    protected calculateRenderedMode(): void;
    private isYoutubeVideo;
    private isVideo;
}
