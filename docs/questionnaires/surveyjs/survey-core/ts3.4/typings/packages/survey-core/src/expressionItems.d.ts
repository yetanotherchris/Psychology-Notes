import { Base } from "./base";
import { ISurvey } from "./base-interfaces";
import { ILocalizableOwner, LocalizableString } from "./localizablestring";
/**
 * Base class for HtmlConditionItem and UrlConditionItem classes.
 */
export declare class ExpressionItem extends Base implements ILocalizableOwner {
    locOwner: ILocalizableOwner;
    constructor(expression?: string);
    getType(): string;
    runCondition(values: any, properties: any): boolean;
    /*
    * The expression property. If this expression returns true, then survey will use html property to show on complete page.
    */
    expression: string;
    readonly locHtml: LocalizableString;
    getLocale(): string;
    getMarkdownHtml(text: string, name: string): string;
    getRenderer(name: string): string;
    getRendererContext(locStr: LocalizableString): any;
    getProcessedText(text: string): string;
    getSurvey(isLive?: boolean): ISurvey;
}
/**
 * A class that contains expression and html propeties. It uses in survey.completedHtmlOnCondition array.
 * If the expression returns true then html of this item uses instead of survey.completedHtml property
 * @see SurveyModel.completedHtmlOnCondition
 * @see SurveyModel.completedHtml
 */
export declare class HtmlConditionItem extends ExpressionItem {
    constructor(expression?: string, html?: string);
    getType(): string;
    /*
    * The html that shows on completed ('Thank you') page. The expression should return true
    * @see expression
    */
    html: string;
    readonly locHtml: LocalizableString;
}
/**
 * A class that contains expression and url propeties. It uses in survey.navigateToUrlOnCondition array.
 * If the expression returns true then url of this item uses instead of survey.navigateToUrl property
 * @see SurveyModel.navigateToUrl
 */
export declare class UrlConditionItem extends ExpressionItem {
    constructor(expression?: string, url?: string);
    getType(): string;
    /*
    * The url that survey navigates to on completing the survey. The expression should return true
    * @see expression
    */
    url: string;
    readonly locUrl: LocalizableString;
}
