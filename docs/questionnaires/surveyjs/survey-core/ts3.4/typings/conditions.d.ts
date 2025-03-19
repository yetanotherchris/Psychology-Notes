import { HashTable } from "./helpers";
/**
 * Base interface for expression execution
 */
export interface IExpresionExecutor {
    /**
     * This call back runs on executing expression if there is at least one async function
     */
    onComplete: (res: any) => void;
    /**
     * The expression as string, property with get
     */
    expression: string;
    /**
     * Returns true if the expression is valid and can be executed
     */
    canRun(): boolean;
    /**
     * Run the expression. Returns the result of execution.
     * The result can be undefined if there is an asyn function. In this case result will be returned onComplete callback.
     * @param values has with values names and their results. Normally it is question names and their values
     * @param properties the list of properties that are available in functions. Commonly it is survey and question, if expression execuited in a question context
     */
    run(values: HashTable<any>, properties: HashTable<any>): any;
    /**
     * Returns the list of variables that used in the expression. They defined as: {variableName} in default parser.
     */
    getVariables(): Array<string>;
    /**
     * Returns true if there is a function in the expression
     */
    hasFunction(): boolean;
    /**
     * Returns true if there is an async function in the expression
     */
    isAsync: boolean;
}
export declare class ExpressionExecutor implements IExpresionExecutor {
    static createExpressionExecutor: (expression: string) => IExpresionExecutor;
    onComplete: (res: any) => void;
    private expressionValue;
    private operand;
    private processValue;
    private parser;
    private isAsyncValue;
    private hasFunctionValue;
    private asyncFuncList;
    constructor(expression: string);
    readonly expression: string;
    private setExpression;
    getVariables(): Array<string>;
    hasFunction(): boolean;
    readonly isAsync: boolean;
    canRun(): boolean;
    run(values: HashTable<any>, properties?: HashTable<any>): any;
    private doAsyncFunctionReady;
    private runValues;
}
export declare class ExpressionRunnerBase {
    private expressionExecutor;
    private variables;
    private containsFunc;
    private static IdCounter;
    private _id;
    onBeforeAsyncRun: (id: number) => void;
    onAfterAsyncRun: (id: number) => void;
    constructor(expression: string);
    readonly id: number;
    expression: string;
    getVariables(): Array<string>;
    hasFunction(): boolean;
    readonly isAsync: boolean;
    canRun(): boolean;
    protected runCore(values: HashTable<any>, properties?: HashTable<any>): any;
    protected doOnComplete(res: any): void;
}
export declare class ConditionRunner extends ExpressionRunnerBase {
    onRunComplete: (result: boolean) => void;
    run(values: HashTable<any>, properties?: HashTable<any>): boolean;
    protected doOnComplete(res: any): void;
}
export declare class ExpressionRunner extends ExpressionRunnerBase {
    onRunComplete: (result: any) => void;
    run(values: HashTable<any>, properties?: HashTable<any>): any;
    protected doOnComplete(res: any): void;
}
