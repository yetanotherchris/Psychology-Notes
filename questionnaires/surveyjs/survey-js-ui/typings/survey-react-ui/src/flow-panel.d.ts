import * as React from "react";
import { FlowPanelModel, Question } from "survey-core";
import { SurveyPanel } from "./panel";
export declare class SurveyFlowPanel extends SurveyPanel {
    constructor(props: any);
    get flowPanel(): FlowPanelModel;
    componentDidMount(): void;
    componentWillUnmount(): void;
    protected getQuestion(name: string): Question;
    protected renderQuestion(question: Question): string;
    protected renderRows(): Array<React.JSX.Element>;
    private renderedIndex;
    private getNodeIndex;
    protected renderHtml(): React.JSX.Element | null;
    protected renderNodes(domNodes: Array<Node>): Array<React.JSX.Element>;
    private getStyle;
    protected renderParentNode(node: Node): React.JSX.Element;
    protected renderNode(node: Node): React.JSX.Element | null;
    private getChildDomNodes;
    private hasTextChildNodesOnly;
    protected renderContent(style: any, rows: React.JSX.Element[]): React.JSX.Element;
}
