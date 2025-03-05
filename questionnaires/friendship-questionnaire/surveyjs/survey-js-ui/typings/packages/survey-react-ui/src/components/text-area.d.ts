import React from "react";
import { TextAreaModel } from "survey-core";
import { SurveyElementBase } from "../reactquestion_element";
interface ITextAreaProps {
    viewModel: TextAreaModel;
}
export declare class TextAreaComponent extends SurveyElementBase<ITextAreaProps, any> {
    private textareaRef;
    private initialValue;
    constructor(props: ITextAreaProps);
    get viewModel(): TextAreaModel;
    protected canRender(): boolean;
    componentDidMount(): void;
    componentWillUnmount(): void;
    protected renderElement(): React.JSX.Element;
}
export {};
