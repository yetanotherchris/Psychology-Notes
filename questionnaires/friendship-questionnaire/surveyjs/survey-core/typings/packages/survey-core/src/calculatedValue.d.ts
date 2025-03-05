import { HashTable } from "./helpers";
import { Base } from "./base";
import { ISurvey, ISurveyData } from "./base-interfaces";
/**
 * The calculated value is a way to define the variable in Survey Creator.
 * It has two main properties: name and expression. Based on expression the value read-only property is automatically calculated.
 * The name property should be unique though all calculated values.
 * It uses survey.getVariable/seruvey.setVariable functions to get/set its value. The class do not store its value internally.
 * You may set includeIntoResult property to true to store this calculated value into survey result.
 */
export declare class CalculatedValue extends Base {
    private data;
    private expressionIsRunning;
    private expressionRunner;
    constructor(name?: string, expression?: string);
    setOwner(data: ISurveyData): void;
    getType(): string;
    getSurvey(live?: boolean): ISurvey;
    get owner(): ISurveyData;
    /**
     * The calculated value name. It should be non empty and unique.
     */
    get name(): string;
    set name(val: string);
    /**
     * Set this property to true to include the non-empty calculated value into survey result, survey.data property.
     */
    get includeIntoResult(): boolean;
    set includeIntoResult(val: boolean);
    /**
     * The Expression that used to calculate the value. You may use standard operators like +, -, * and /, squares (). Here is the example of accessing the question value {questionname}.
     * Example: "({quantity} * {price}) * (100 - {discount}) / 100"
     */
    get expression(): string;
    set expression(val: string);
    locCalculation(): void;
    unlocCalculation(): void;
    private isCalculated;
    resetCalculation(): void;
    doCalculation(calculatedValues: Array<CalculatedValue>, values: HashTable<any>, properties: HashTable<any>): void;
    runExpression(values: HashTable<any>, properties: HashTable<any>): void;
    get value(): any;
    protected setValue(val: any): void;
    private get canRunExpression();
    private rerunExpression;
    private runExpressionCore;
    private runDependentExpressions;
    private ensureExpression;
}
