import * as React from "react";
import { SurveyQuestionElementBase, ReactSurveyElement } from "./reactquestion_element";
import { QuestionRadiogroupModel, ItemValue, Base } from "survey-core";
export declare class SurveyQuestionRadiogroup extends SurveyQuestionElementBase {
    constructor(props: any);
    protected get question(): QuestionRadiogroupModel;
    protected renderElement(): React.JSX.Element;
    protected getFooter(): React.JSX.Element[];
    protected getColumnedBody(cssClasses: any): React.JSX.Element;
    protected getColumns(cssClasses: any): React.JSX.Element[];
    protected getBody(cssClasses: any): React.JSX.Element;
    protected getItems(cssClasses: any, choices: Array<ItemValue>): Array<any>;
    protected get textStyle(): any;
    protected renderOther(cssClasses: any): React.JSX.Element;
    private renderItem;
    private getStateValue;
}
export declare class SurveyQuestionRadioItem extends ReactSurveyElement {
    private rootRef;
    constructor(props: any);
    protected getStateElement(): Base;
    protected get question(): QuestionRadiogroupModel;
    protected get item(): ItemValue;
    protected get textStyle(): any;
    protected get index(): number;
    protected get isChecked(): boolean;
    private get hideCaption();
    shouldComponentUpdate(nextProps: any, nextState: any): boolean;
    handleOnChange(event: any): void;
    handleOnMouseDown(event: any): void;
    protected canRender(): boolean;
    componentDidUpdate(prevProps: any, prevState: any): void;
    protected renderElement(): React.JSX.Element;
    componentDidMount(): void;
    componentWillUnmount(): void;
}
