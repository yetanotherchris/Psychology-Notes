import * as React from "react";
import { SurveyQuestionElementBase } from "./reactquestion_element";
import { QuestionSignaturePadModel } from "survey-core";
export declare class SurveyQuestionSignaturePad extends SurveyQuestionElementBase {
    constructor(props: any);
    protected get question(): QuestionSignaturePadModel;
    protected renderElement(): React.JSX.Element;
    renderBackgroundImage(): React.JSX.Element | null;
    protected renderLoadingIndicator(): React.JSX.Element;
    renderCleanButton(): React.JSX.Element | null;
}
