import { HashTable } from "../helpers";
import { ProcessValue } from "../conditionProcessValue";
export interface AsyncFunctionItem {
    operand?: FunctionOperand;
    parent?: AsyncFunctionItem;
    children?: Array<AsyncFunctionItem>;
}
export declare abstract class Operand {
    private static counter;
    private _id;
    readonly id: number;
    toString(func?: (op: Operand) => string): string;
    abstract getType(): string;
    abstract evaluate(processValue?: ProcessValue): any;
    abstract setVariables(variables: Array<string>): any;
    hasFunction(): boolean;
    hasAsyncFunction(): boolean;
    addToAsyncList(list: Array<AsyncFunctionItem>): void;
    isEqual(op: Operand): boolean;
    protected abstract isContentEqual(op: Operand): boolean;
    protected areOperatorsEquals(op1: Operand, op2: Operand): boolean;
}
export declare class BinaryOperand extends Operand {
    private operatorName;
    private left;
    private right;
    private consumer;
    private isArithmeticValue;
    constructor(operatorName: string, left?: any, right?: any, isArithmeticOp?: boolean);
    private readonly requireStrictCompare: any;
    private getIsOperandRequireStrict;
    getType(): string;
    readonly isArithmetic: boolean;
    readonly isConjunction: boolean;
    readonly conjunction: string;
    readonly operator: string;
    readonly leftOperand: any;
    readonly rightOperand: any;
    protected isContentEqual(op: Operand): boolean;
    private evaluateParam;
    evaluate(processValue?: ProcessValue): any;
    toString(func?: (op: Operand) => string): string;
    setVariables(variables: Array<string>): void;
    hasFunction(): boolean;
    hasAsyncFunction(): boolean;
    addToAsyncList(list: Array<AsyncFunctionItem>): void;
}
export declare class UnaryOperand extends Operand {
    private expressionValue;
    private operatorName;
    private consumer;
    constructor(expressionValue: Operand, operatorName: string);
    readonly operator: string;
    readonly expression: Operand;
    getType(): string;
    toString(func?: (op: Operand) => string): string;
    protected isContentEqual(op: Operand): boolean;
    hasFunction(): boolean;
    hasAsyncFunction(): boolean;
    addToAsyncList(list: Array<AsyncFunctionItem>): void;
    evaluate(processValue?: ProcessValue): boolean;
    setVariables(variables: Array<string>): void;
}
export declare class ArrayOperand extends Operand {
    values: Array<Operand>;
    constructor(values: Array<Operand>);
    getType(): string;
    toString(func?: (op: Operand) => string): string;
    evaluate(processValue?: ProcessValue): Array<any>;
    setVariables(variables: Array<string>): void;
    hasFunction(): boolean;
    hasAsyncFunction(): boolean;
    addToAsyncList(list: Array<AsyncFunctionItem>): void;
    protected isContentEqual(op: Operand): boolean;
}
export declare class Const extends Operand {
    private value;
    constructor(value: any);
    getType(): string;
    toString(func?: (op: Operand) => string): string;
    readonly correctValue: any;
    readonly requireStrictCompare: boolean;
    evaluate(): any;
    setVariables(variables: Array<string>): void;
    protected getCorrectValue(value: any): any;
    protected isContentEqual(op: Operand): boolean;
    private isQuote;
}
export declare class Variable extends Const {
    private variableName;
    static DisableConversionChar: string;
    private valueInfo;
    private useValueAsItIs;
    constructor(variableName: string);
    readonly requireStrictCompare: boolean;
    getType(): string;
    toString(func?: (op: Operand) => string): string;
    readonly variable: string;
    evaluate(processValue?: ProcessValue): any;
    setVariables(variables: Array<string>): void;
    protected getCorrectValue(value: any): any;
    protected isContentEqual(op: Operand): boolean;
}
export declare class FunctionOperand extends Operand {
    private originalValue;
    private parameters;
    constructor(originalValue: string, parameters: ArrayOperand);
    getType(): string;
    evaluate(processValue?: ProcessValue): any;
    private evaluateCore;
    toString(func?: (op: Operand) => string): string;
    setVariables(variables: Array<string>): void;
    isReady(proccessValue: ProcessValue): boolean;
    private getAsynValue;
    hasFunction(): boolean;
    hasAsyncFunction(): boolean;
    private isAsyncFunction;
    addToAsyncList(list: Array<AsyncFunctionItem>): void;
    protected isContentEqual(op: Operand): boolean;
}
export declare class OperandMaker {
    static throwInvalidOperatorError(op: string): void;
    static safeToString(operand: Operand, func: (op: Operand) => string): string;
    static toOperandString(value: string): string;
    static isBooleanValue(value: string): boolean;
    static countDecimals(value: number): number;
    static plusMinus(a: number, b: number, res: number): number;
    static unaryFunctions: HashTable<Function>;
    static binaryFunctions: HashTable<Function>;
    static isTwoValueEquals(x: any, y: any, ignoreOrder?: boolean): boolean;
    static operatorToString(operatorName: string): string;
    static convertValForDateCompare(val: any, second: any): any;
    static signs: HashTable<string>;
}
