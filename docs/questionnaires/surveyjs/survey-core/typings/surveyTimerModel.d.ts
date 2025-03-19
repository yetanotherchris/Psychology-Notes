import { ISurvey } from "./base-interfaces";
import { Base, EventBase } from "./base";
import { PageModel } from "./page";
import { SurveyModel } from "./survey";
export interface ISurveyTimerText {
    timerInfoText: string;
    timerInfo: {
        spent: number;
        limit?: number;
    };
    timerClock: {
        majorText: string;
        minorText?: string;
    };
    getCss(): any;
    isTimerPanelShowingOnBottom: boolean;
    isTimerPanelShowingOnTop: boolean;
    onCurrentPageChanged: EventBase<SurveyModel>;
}
export declare class SurveyTimerModel extends Base {
    onTimer: (page: PageModel) => void;
    private surveyValue;
    constructor(survey: ISurvey);
    text: string;
    progress: number;
    clockMajorText: string;
    clockMinorText: string;
    spent: number;
    get survey(): ISurveyTimerText;
    onCreating(): void;
    private timerFunc;
    start(): void;
    stop(): void;
    get isRunning(): boolean;
    private setIsRunning;
    private update;
    private doTimer;
    private updateProgress;
    private updateText;
    get showProgress(): boolean;
    get showTimerAsClock(): boolean;
    get rootCss(): string;
    getProgressCss(): string;
    get textContainerCss(): string;
    get minorTextCss(): string;
    get majorTextCss(): string;
}
