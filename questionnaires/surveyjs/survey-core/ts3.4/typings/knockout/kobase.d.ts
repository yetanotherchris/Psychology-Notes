import { Base } from "survey-core";
export declare class ImplementorBase {
    element: Base;
    private static doIterateProperties;
    readonly implementedMark = "__surveyImplementedKo";
    constructor(element: Base);
    dispose(): void;
}
