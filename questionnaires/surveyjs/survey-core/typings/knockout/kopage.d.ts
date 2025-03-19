import { PageModel } from "survey-core";
import { PanelModelBase, PanelModel, QuestionRowModel } from "survey-core";
import { SurveyElement } from "survey-core";
import { ImplementorBase } from "./kobase";
export declare class QuestionRow extends QuestionRowModel {
    panel: PanelModelBase;
    koElementAfterRender: any;
    constructor(panel: PanelModelBase);
    getElementType(el: any): "survey-panel" | "survey-question";
    koAfterRender(htmlElements: any, element: SurveyElement): void;
    private elementAfterRender;
    rowAfterRender(elements: HTMLElement[], model: QuestionRow): void;
    dispose(): void;
}
export declare class PanelImplementorBase extends ImplementorBase {
    panel: PanelModelBase;
    constructor(panel: PanelModelBase);
}
export declare class Panel extends PanelModel {
    private _implementor;
    koElementType: any;
    constructor(name?: string);
    protected onBaseCreating(): void;
    createRow(): QuestionRowModel;
    protected onCreating(): void;
    protected onNumChanged(value: number): void;
    dispose(): void;
}
export declare class Page extends PageModel {
    private _implementor;
    constructor(name?: string);
    protected onBaseCreating(): void;
    createRow(): QuestionRowModel;
    protected onCreating(): void;
    protected onNumChanged(value: number): void;
    dispose(): void;
}
