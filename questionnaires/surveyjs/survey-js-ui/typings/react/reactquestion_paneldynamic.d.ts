/// <reference types="react" />
import { SurveyQuestionElementBase } from "./reactquestion_element";
import { SurveyModel, QuestionPanelDynamicModel } from "survey-core";
import { SurveyPanel } from "./panel";
export declare class SurveyQuestionPanelDynamic extends SurveyQuestionElementBase {
    constructor(props: any);
    protected get question(): QuestionPanelDynamicModel;
    componentDidMount(): void;
    componentWillUnmount(): void;
    private updateQuestionRendering;
    protected renderElement(): JSX.Element;
    protected renderNavigator(): JSX.Element | null;
    private renderProgressText;
    protected rendrerPrevButton(): JSX.Element;
    protected rendrerNextButton(): JSX.Element;
    protected renderRange(): JSX.Element;
    protected renderAddRowButton(): JSX.Element | null;
    protected renderNavigatorV2(): JSX.Element | null;
    protected renderPlaceholder(): JSX.Element | null;
}
export declare class SurveyQuestionPanelDynamicItem extends SurveyPanel {
    private get question();
    private get index();
    protected getSurvey(): SurveyModel | null;
    protected getCss(): any;
    render(): JSX.Element;
    protected renderButton(): JSX.Element | null;
}
