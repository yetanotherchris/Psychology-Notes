import { Base } from "./base";
import { ITextProcessor, IQuestion, ISurvey } from "./base-interfaces";
import { ItemValue } from "./itemvalue";
import { SurveyError } from "./survey-error";
/**
 * Configures access to a RESTful service that returns choices for [Checkbox](https://surveyjs.io/Examples/Library?id=questiontype-checkbox), [Dropdown](https://surveyjs.io/Examples/Library?id=questiontype-dropdown), [Radiogroup](https://surveyjs.io/Examples/Library?id=questiontype-radiogroup), and other multiple-choice question types.
 *
 * Use the following properties to configure this object:
 *
 * ```js
 * {
 *   url: "http://...", // A RESTful service's URL.
 *   valueName: "value", // Specifies which field contains choice values.
 *   titleName: "title", // Specifies which field contains display texts for choice values.
 *   imageLinkName: "imageUrl", // Specifies which field contains image URLs. Used in Image Picker questions.
 *   // Path to the array of choices. Specify `path` only if the array of choices is nested within the object returned by the service.
 *   // The following path separators are allowed: semicolon `;`, comma `,`.
 *   path: "myNestedArray"
 * }
 * ```
 *
 * Typically, you should assign this object to a question's [`choicesByUrl`](https://surveyjs.io/Documentation/Library?id=QuestionSelectBase#choicesByUrl) property. You can also specify additional application-wide settings using the [`settings.web`](https://surveyjs.io/form-library/documentation/api-reference/settings#web) object.
 */
export declare class ChoicesRestful extends Base {
    private static cacheText;
    private static noCacheText;
    static EncodeParameters: boolean;
    static clearCache(): void;
    private static itemsResult;
    private static sendingSameRequests;
    private static addSameRequest;
    private static unregisterSameRequests;
    static onBeforeSendRequest: (sender: ChoicesRestful, options: {
        request: XMLHttpRequest;
    }) => void;
    private static getCachedItemsResult;
    private lastObjHash;
    private isRunningValue;
    protected processedUrl: string;
    protected processedPath: string;
    private isUsingCacheFromUrl;
    onProcessedUrlCallback: (url: string, path: string) => void;
    getResultCallback: (items: Array<ItemValue>) => void;
    beforeSendRequestCallback: () => void;
    updateResultCallback: (items: Array<ItemValue>, serverResult: any) => Array<ItemValue>;
    getItemValueCallback: (item: any) => any;
    error: SurveyError;
    owner: IQuestion;
    createItemValue: (value: any) => ItemValue;
    constructor();
    getSurvey(live?: boolean): ISurvey;
    run(textProcessor?: ITextProcessor): void;
    readonly isUsingCache: boolean;
    readonly isRunning: boolean;
    protected getIsRunning(): boolean;
    readonly isWaitingForParameters: boolean;
    protected useChangedItemsResults(): boolean;
    private doEmptyResultCallback;
    private processedText;
    protected parseResponse(response: any): any;
    protected sendRequest(): void;
    getType(): string;
    readonly isEmpty: boolean;
    getCustomPropertiesNames(): Array<string>;
    private getCustomPropertyName;
    private getCustomProperties;
    setData(json: any): void;
    getData(): any;
    /*
    * A RESTful service's URL.
    *
    * This property supports [dynamic URLs](https://surveyjs.io/Documentation/Library?id=design-survey-conditional-logic#dynamic-texts). For example, the URL below depends on the `region` question's value. When the value changes, the survey automatically loads a new dataset that corresponds to the selected region.
    *
    * ```js
    * url: "https://surveyjs.io/api/CountriesExample?region={region}"
    * ```
    *
    * [View Demo](https://surveyjs.io/Examples/Library/?id=questiontype-dropdownrestfull (linkStyle))
    * @see path
    * @see valueName
    * @see titleName
    */
    url: string;
    /*
    * Path to the array of choices. The following path separators are allowed: semicolon `;`, comma `,`.
    *
    * Specify this property only if the array of choices is nested within the object returned by the service. For example, the service returns the following object:
    *
    * ```js
    * {
    *   countries: [ ... ],
    *   capitals: [ ... ]
    * }
    * ```
    *
    * To populate choices with values from the `countries` array, set the `path` property to `"countries"`. To use the `capitals` array, set this property to `"capitals"`.
    * @see url
    * @see valueName
    * @see titleName
    */
    path: string;
    /*
    * Specifies which property in the obtained data object contains choice values.
    *
    * [View Demo](https://surveyjs.io/Examples/Library/?id=questiontype-dropdownrestfull (linkStyle))
    *
    * @see url
    * @see path
    * @see titleName
    */
    valueName: string;
    /*
    * Specifies which property in the obtained data object contains display texts for choices.
    *
    * @see url
    * @see path
    * @see valueName
    */
    titleName: string;
    /*
    * Specifies which property in the obtained data object contains image URLs. Used only in [Image Picker](https://surveyjs.io/Examples/Library?id=questiontype-imagepicker) questions.
    *
    * @see url
    * @see path
    * @see valueName
    */
    imageLinkName: string;
    /*
    * Specifies whether the service is allowed to return an empty response or an empty array in a response.
    *
    * Default value: `false`
    */
    allowEmptyResponse: boolean;
    attachOriginalItems: boolean;
    readonly itemValueType: string;
    clear(): void;
    protected beforeSendRequest(): void;
    protected beforeLoadRequest(): void;
    protected onLoad(result: any, loadingObjHash?: string): void;
    protected callResultCallback(items: Array<ItemValue>, loadingObjHash: string): void;
    private setCustomProperties;
    private getPropertyBinding;
    private onError;
    private getResultAfterPath;
    private getPathes;
    private getValue;
    private setTitle;
    private getImageLink;
    private getValueCore;
    private readonly objHash: any;
}
/**
 * Obsolete, please use ChoicesRestful
 */
export declare class ChoicesRestfull extends ChoicesRestful {
    static EncodeParameters: boolean;
    static clearCache(): void;
    static onBeforeSendRequest: (sender: ChoicesRestful, options: {
        request: XMLHttpRequest;
    }) => void;
}
