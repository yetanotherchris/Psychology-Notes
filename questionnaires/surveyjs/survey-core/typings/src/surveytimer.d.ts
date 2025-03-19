import { EventBase } from "./base";
export declare var surveyTimerFunctions: {
    setTimeout: (func: () => any) => number;
    clearTimeout: (timerId: number) => void;
    safeTimeOut: (func: () => any, delay: number) => number | any;
    now(): number;
};
export interface SurveyTimerEvent {
    seconds: number;
}
export declare class SurveyTimer {
    private static instanceValue;
    static get instance(): SurveyTimer;
    private listenerCounter;
    private timerId;
    private prevTimeInMs;
    onTimerTick: EventBase<SurveyTimer, SurveyTimerEvent>;
    onTimer: EventBase<SurveyTimer, SurveyTimerEvent>;
    start(func?: (timer: SurveyTimer, options: SurveyTimerEvent) => void): void;
    stop(func?: (timer: SurveyTimer, options: SurveyTimerEvent) => any): void;
    doTimer(): void;
}
