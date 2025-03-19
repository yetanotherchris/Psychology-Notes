import React from "react";
import { SurveyError } from "survey-core";
export interface IQuestionErrorComponentProps {
    error: SurveyError;
    cssClasses: any;
    element: any;
}
export declare class QuestionErrorComponent extends React.Component<IQuestionErrorComponentProps, any> {
    render(): JSX.Element | null;
}
