import { SurveyModel } from "./survey";
export declare class SurveyProgressButtonsModel {
    private survey;
    constructor(survey: SurveyModel);
    isListElementClickable(index: number): boolean;
    getListElementCss(index: number): string;
    getScrollButtonCss(hasScroller: boolean, isLeftScroll: boolean): string;
    clickListElement(index: number): void;
}
