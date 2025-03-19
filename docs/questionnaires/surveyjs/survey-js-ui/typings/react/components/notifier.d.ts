/// <reference types="react" />
import { Base, Notifier } from "survey-core";
import { SurveyElementBase } from "../reactquestion_element";
export interface INotifierComponentProps {
    notifier: Notifier;
}
export declare class NotifierComponent extends SurveyElementBase<INotifierComponentProps, any> {
    get notifier(): Notifier;
    protected getStateElement(): Base;
    renderElement(): JSX.Element | null;
}
