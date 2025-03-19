import React from "react";
import { SurveyElementBase } from "../../reactquestion_element";
import { QuestionFileModel } from "survey-core";
export declare class SurveyFileItem extends SurveyElementBase<{
    question: QuestionFileModel;
    item: any;
}, {}> {
    protected get question(): QuestionFileModel;
    protected get item(): any;
    protected renderFileSign(className: string, val: any): React.JSX.Element | null;
    protected renderElement(): React.JSX.Element | null;
    protected canRender(): boolean;
}
