import { HashTable } from "../helpers";
import { ProcessValue } from "../conditionProcessValue";
export declare abstract class Operand {
    toString(func?: (op: Operand) => string): string;
    abstract getType(): string;
    abstract evaluate(processValue?: ProcessValue): any;
    abstract setVariables(variables: Array<string>): any;
    hasFunction(): boolean;
    hasAsyncFunction(): boolean;
    addToAsyncList(list: Array<FunctionOperand>): void;
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
    private get requireStrictCompare();
    private getIsOperandRequireStrict;
    getType(): string;
    get isArithmetic(): boolean;
    get isConjunction(): boolean;
    get conjunction(): string;
    get operator(): string;
    get leftOperand(): any;
    get rightOperand(): any;
    protected isContentEqual(op: Operand): boolean;
    private evaluateParam;
    evaluate(processValue?: ProcessValue): any;
    toString(func?: (op: Operand) => string): string;
    setVariables(variables: Array<string>): void;
    hasFunction(): boolean;
    hasAsyncFunction(): boolean;
    addToAsyncList(list: Array<FunctionOperand>): void;
}
export declare class UnaryOperand extends Operand {
    private expressionValue;
    private operatorName;
    private consumer;
    constructor(expressionValue: Operand, operatorName: string);
    get operator(): string;
    get expression(): Operand;
    getType(): string;
    toString(func?: (op: Operand) => string): string;
    protected isContentEqual(op: Operand): boolean;
    hasFunction(): boolean;
    hasAsyncFunction(): boolean;
    addToAsyncList(list: Array<FunctionOperand>): void;
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
    addToAsyncList(list: Array<FunctionOperand>): void;
    protected isContentEqual(op: Operand): boolean;
}
export declare class Const extends Operand {
    private value;
    constructor(value: any);
    getType(): string;
    toString(func?: (op: Operand) => string): string;
    get correctValue(): any;
    get requireStrictCompare(): boolean;
    evaluate(): any;
    setVariables(variables: Array<string>): void;
    protected getCorrectValue(value: any): any;
    protected isContentEqual(op: Operand): boolean;
    private isQuote;
}
export declare class Variable extends Const {
    private variableName;
    static get DisableConversionChar(): string;
    static set DisableConversionChar(val: string);
    private valueInfo;
    private useValueAsItIs;
    constructor(variableName: string);
    get requireStrictCompare(): boolean;
    getType(): string;
    toString(func?: (op: Operand) => string): string;
    get variable(): string;
    evaluate(processValue?: ProcessValue): any;
    setVariables(variables: Array<string>): void;
    protected getCorrectValue(value: any): any;
    protected isContentEqual(op: Operand): boolean;
}
export declare class FunctionOperand extends Operand {
    private originalValue;
    private parameters;
    private isReadyValue;
    private asynResult;
    onAsyncReady: () => void;
    constructor(originalValue: string, parameters: ArrayOperand);
    getType(): string;
    evaluateAsync(processValue: ProcessValue): void;
    evaluate(processValue?: ProcessValue): any;
    private evaluateCore;
    toString(func?: (op: Operand) => string): string;
    setVariables(variables: Array<string>): void;
    get isReady(): boolean;
    hasFunction(): boolean;
    hasAsyncFunction(): boolean;
    addToAsyncList(list: Array<FunctionOperand>): void;
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
