/// <reference types="react" />
import { Base, SurveyTimerModel } from "survey-core";
import { ReactSurveyElement } from "./reactquestion_element";
export declare class SurveyTimerPanel extends ReactSurveyElement {
    constructor(props: any);
    protected getStateElement(): Base;
    protected get timerModel(): SurveyTimerModel;
    private readonly circleLength;
    private get progress();
    render(): JSX.Element | null;
}
