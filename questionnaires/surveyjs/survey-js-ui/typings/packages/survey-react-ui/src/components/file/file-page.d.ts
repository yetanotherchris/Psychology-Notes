import React from "react";
import { SurveyElementBase } from "../../reactquestion_element";
import { QuestionFileModel, QuestionFilePage } from "survey-core";
export declare class SurveyFilePage extends SurveyElementBase<{
    question: QuestionFileModel;
    page: QuestionFilePage;
}, {}> {
    protected get question(): QuestionFileModel;
    protected get page(): any;
    protected renderElement(): React.JSX.Element | null;
}
