/// <reference types="react" />
import { FlowPanelModel, Question } from "survey-core";
import { SurveyPanel } from "./panel";
export declare class SurveyFlowPanel extends SurveyPanel {
    constructor(props: any);
    get flowPanel(): FlowPanelModel;
    componentDidMount(): void;
    componentWillUnmount(): void;
    protected getQuestion(name: string): Question;
    protected renderQuestion(question: Question): string;
    protected renderRows(): Array<JSX.Element>;
    private renderedIndex;
    private getNodeIndex;
    protected renderHtml(): JSX.Element | null;
    protected renderNodes(domNodes: Array<Node>): Array<JSX.Element>;
    private getStyle;
    protected renderParentNode(node: Node): JSX.Element;
    protected renderNode(node: Node): JSX.Element | null;
    private getChildDomNodes;
    private hasTextChildNodesOnly;
    protected renderContent(style: any, rows: JSX.Element[]): JSX.Element;
}
