export interface HashTable<T = any> {
    [key: string]: T;
}
export declare function createDate(reason: string, val?: number | string | Date): Date;
export declare class Helpers {
    /**
     * A static methods that returns true if a value undefined, null, empty string or empty array.
     * @param value
     */
    static isValueEmpty(value: any): boolean;
    static isArrayContainsEqual(x: any, y: any): boolean;
    static isArraysEqual(x: any, y: any, ignoreOrder?: boolean, caseSensitive?: boolean, trimStrings?: boolean): boolean;
    static compareStrings(x: string, y: string): number;
    static isTwoValueEquals(x: any, y: any, ignoreOrder?: boolean, caseSensitive?: boolean, trimStrings?: boolean): boolean;
    static randomizeArray<T>(array: Array<T>): Array<T>;
    static getUnbindValue(value: any): any;
    static createCopy(obj: any): any;
    static isConvertibleToNumber(value: any): boolean;
    static isValueObject(val: any, excludeArray?: boolean): boolean;
    static isNumber(value: any): boolean;
    static getNumber(value: any): number;
    private static getNumberCore;
    private static isStringHasOperator;
    private static prepareStringToNumber;
    static getMaxLength(maxLength: number, surveyLength: number): any;
    static getRemainingCharacterCounterText(newValue: string | undefined, maxLength: number | null): string;
    static getNumberByIndex(index: number, startIndexStr: string, parentIndex?: number): string;
    static isCharNotLetterAndDigit(ch: string): boolean;
    static isCharDigit(ch: string): boolean;
    static isDigitsOnly(str: string): boolean;
    private static getNumberFromStr;
    private static countDecimals;
    static correctAfterPlusMinis(a: number, b: number, res: number): number;
    static sumAnyValues(a: any, b: any): any;
    static correctAfterMultiple(a: number, b: number, res: number): number;
    static convertArrayValueToObject(src: Array<any>, propName: string, dest?: Array<any>): Array<any>;
    private static findObjByPropValue;
    static convertArrayObjectToValue(src: Array<any>, propName: string): Array<any>;
    static convertDateToString(date: Date): string;
    static convertDateTimeToString(date: Date): string;
    static convertValToQuestionVal(val: any, inputType?: string): any;
    static compareVerions(ver1: string, ver2: string): number;
    static isUrlYoutubeVideo(url: string): boolean;
}
