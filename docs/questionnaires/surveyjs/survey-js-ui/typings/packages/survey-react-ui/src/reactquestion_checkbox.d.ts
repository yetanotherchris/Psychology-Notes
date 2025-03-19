import * as React from "react";
import { ReactSurveyElement, SurveyQuestionElementBase } from "./reactquestion_element";
import { Base, ItemValue, QuestionCheckboxModel } from "survey-core";
export declare class SurveyQuestionCheckbox extends SurveyQuestionElementBase {
    constructor(props: any);
    protected get question(): QuestionCheckboxModel;
    protected renderElement(): React.JSX.Element;
    protected getHeader(): React.JSX.Element[];
    protected getFooter(): React.JSX.Element[];
    protected getColumnedBody(cssClasses: any): React.JSX.Element;
    protected getColumns(cssClasses: any): React.JSX.Element[];
    protected getBody(cssClasses: any): React.JSX.Element;
    protected getItems(cssClasses: any, choices: Array<ItemValue>): Array<any>;
    protected get textStyle(): any;
    protected renderOther(): React.JSX.Element;
    protected renderItem(item: any, isFirst: boolean, cssClasses: any, index?: string): React.JSX.Element;
}
export declare class SurveyQuestionCheckboxItem extends ReactSurveyElement {
    private rootRef;
    constructor(props: any);
    protected getStateElement(): Base;
    protected get question(): QuestionCheckboxModel;
    protected get item(): ItemValue;
    protected get textStyle(): any;
    protected get isFirst(): any;
    protected get index(): number;
    private get hideCaption();
    componentDidUpdate(prevProps: any, prevState: any): void;
    shouldComponentUpdate(nextProps: any, nextState: any): boolean;
    handleOnChange: (event: any) => void;
    protected canRender(): boolean;
    protected renderElement(): React.JSX.Element;
    protected get inputStyle(): any;
    protected renderCheckbox(isChecked: boolean, otherItem: React.JSX.Element | null): React.JSX.Element;
    componentDidMount(): void;
    componentWillUnmount(): void;
}
