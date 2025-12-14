import { HashTable } from "./helpers";
import { Base } from "./base";
import { ISurvey } from "./base-interfaces";
/**
 * A base class for all triggers.
 * A trigger calls a method when the expression change the result: from false to true or from true to false.
 * Please note, it runs only one changing the expression result.
 */
export declare class Trigger extends Base {
    static idCounter: number;
    static operatorsValue: HashTable<Function>;
    static readonly operators: HashTable<Function>;
    private conditionRunner;
    private idValue;
    constructor();
    readonly id: number;
    getType(): string;
    toString(): string;
    isGhost: boolean;
    protected readonly isInternal: boolean;
    operator: string;
    value: any;
    name: string;
    expression: string;
    protected canBeExecuted(isOnNextPage: boolean): boolean;
    protected canBeExecutedOnComplete(): boolean;
    protected isExecutingOnNextPage: boolean;
    checkExpression(isOnNextPage: boolean, isOnComplete: boolean, keys: any, values: HashTable<any>, properties?: HashTable<any>): void;
    protected canSuccessOnEmptyExpression(): boolean;
    check(value: any): void;
    readonly requireValidQuestion: boolean;
    private perform;
    private triggerResult;
    protected onSuccess(values: HashTable<any>, properties: HashTable<any>): void;
    protected onFailure(): void;
    protected onSuccessExecuted(): void;
    endLoadingFromJson(): void;
    private oldPropertiesChanged;
    private onExpressionChanged;
    buildExpression(): string;
    private isCheckRequired;
    protected getUsedVariables(): string[];
    private createConditionRunner;
    private readonly isRequireValue: any;
}
export interface ISurveyTriggerOwner {
    getObjects(pages: string[], questions: string[]): any[];
    setCompleted(trigger: Trigger): void;
    canBeCompleted(trigger: Trigger, isCompleted: boolean): void;
    triggerExecuted(trigger: Trigger): void;
    setTriggerValue(name: string, value: any, isVariable: boolean): any;
    copyTriggerValue(name: string, fromName: string, copyDisplayValue: boolean): void;
    focusQuestion(name: string): boolean;
}
/**
 * It extends the Trigger base class and add properties required for SurveyJS classes.
 */
export declare class SurveyTrigger extends Trigger {
    protected ownerValue: ISurveyTriggerOwner;
    constructor();
    readonly owner: ISurveyTriggerOwner;
    setOwner(owner: ISurveyTriggerOwner): void;
    getSurvey(live?: boolean): ISurvey;
    protected isRealExecution(): boolean;
    protected onSuccessExecuted(): void;
}
/**
 * If expression returns true, it makes questions/pages visible.
 * Ohterwise it makes them invisible.
 */
export declare class SurveyTriggerVisible extends SurveyTrigger {
    pages: string[];
    questions: string[];
    constructor();
    getType(): string;
    protected onSuccess(values: HashTable<any>, properties: HashTable<any>): void;
    protected onFailure(): void;
    private onTrigger;
    protected onItemSuccess(item: any): void;
    protected onItemFailure(item: any): void;
}
/**
 * If expression returns true, it completes the survey.
 */
export declare class SurveyTriggerComplete extends SurveyTrigger {
    constructor();
    getType(): string;
    readonly requireValidQuestion: boolean;
    protected isRealExecution(): boolean;
    protected onSuccess(values: HashTable<any>, properties: HashTable<any>): void;
    protected onFailure(): void;
}
/**
 * If expression returns true, the value from property **setValue** will be set to **setToName**
 */
export declare class SurveyTriggerSetValue extends SurveyTrigger {
    constructor();
    getType(): string;
    protected canBeExecuted(isOnNextPage: boolean): boolean;
    protected onPropertyValueChanged(name: string, oldValue: any, newValue: any): void;
    setToName: string;
    setValue: any;
    isVariable: boolean;
    protected onSuccess(values: HashTable<any>, properties: HashTable<any>): void;
}
/**
 * If expression returns true, the survey go to question **gotoName** and focus it.
 */
export declare class SurveyTriggerSkip extends SurveyTrigger {
    constructor();
    getType(): string;
    readonly requireValidQuestion: boolean;
    gotoName: string;
    protected canBeExecuted(isOnNextPage: boolean): boolean;
    protected onSuccess(values: HashTable<any>, properties: HashTable<any>): void;
}
/**
 * If expression returns true, the **runExpression** will be run. If **setToName** property is not empty then the result of **runExpression** will be set to it.
 */
export declare class SurveyTriggerRunExpression extends SurveyTrigger {
    constructor();
    getType(): string;
    setToName: string;
    runExpression: string;
    protected canBeExecuted(isOnNextPage: boolean): boolean;
    protected onSuccess(values: HashTable<any>, properties: HashTable<any>): boolean;
    private onCompleteRunExpression;
}
/**
 * If expression returns true, the value from question **fromName** will be set into **setToName**.
 */
export declare class SurveyTriggerCopyValue extends SurveyTrigger {
    constructor();
    protected canBeExecuted(isOnNextPage: boolean): boolean;
    setToName: string;
    fromName: string;
    copyDisplayValue: boolean;
    getType(): string;
    protected onSuccess(values: HashTable<any>, properties: HashTable<any>): void;
    protected canSuccessOnEmptyExpression(): boolean;
    protected getUsedVariables(): string[];
}
