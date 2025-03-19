import * as React from "react";
import { QuestionFileModel } from "survey-core";
import { SurveyQuestionElementBase } from "./reactquestion_element";
export declare class SurveyQuestionFile extends SurveyQuestionElementBase {
    constructor(props: any);
    protected get question(): QuestionFileModel;
    protected renderElement(): React.JSX.Element;
    protected renderFileDecorator(): React.JSX.Element;
    protected renderChooseButton(): React.JSX.Element;
    protected renderClearButton(className: string): React.JSX.Element | null;
    protected renderPreview(): React.JSX.Element;
    protected renderLoadingIndicator(): React.JSX.Element;
    protected renderVideo(): React.JSX.Element;
}
