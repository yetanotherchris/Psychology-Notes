import * as React from "react";
import { ReactSurveyElement, SurveyQuestionUncontrolledElement } from "./reactquestion_element";
import { QuestionCommentModel, TextAreaModel } from "survey-core";
export declare class SurveyQuestionComment extends SurveyQuestionUncontrolledElement<QuestionCommentModel> {
    private renderCharacterCounter;
    constructor(props: any);
    protected renderElement(): React.JSX.Element;
}
export declare class SurveyQuestionCommentItem extends ReactSurveyElement {
    private textAreaModel;
    constructor(props: any);
    protected canRender(): boolean;
    protected getTextAreaModel(): TextAreaModel;
    protected renderElement(): React.JSX.Element;
}
export declare class SurveyQuestionOtherValueItem extends SurveyQuestionCommentItem {
    protected getTextAreaModel(): TextAreaModel;
}
