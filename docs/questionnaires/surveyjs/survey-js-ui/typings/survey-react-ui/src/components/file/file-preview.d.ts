import React from "react";
import { SurveyElementBase } from "../../reactquestion_element";
import { QuestionFileModel } from "survey-core";
export declare class SurveyFilePreview extends SurveyElementBase<{
    question: QuestionFileModel;
}, {}> {
    protected get question(): QuestionFileModel;
    protected renderFileSign(className: string, val: any): React.JSX.Element | null;
    protected renderElement(): React.JSX.Element | null;
    protected canRender(): boolean;
}
