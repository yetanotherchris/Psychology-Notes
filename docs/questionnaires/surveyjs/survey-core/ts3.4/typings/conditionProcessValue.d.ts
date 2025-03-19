import { HashTable } from "./helpers";
export declare class ProcessValue {
    values: HashTable<any>;
    properties: HashTable<any>;
    constructor();
    getFirstName(text: string, obj?: any): string;
    hasValue(text: string, values?: HashTable<any>): boolean;
    getValue(text: string, values?: HashTable<any>): any;
    setValue(obj: any, text: string, value: any): void;
    getValueInfo(valueInfo: any): void;
    isAnyKeyChanged(keys: any, usedNames: string[]): boolean;
    private getValueFromPath;
    private getValueCore;
    private getQuestionDirectly;
    private getValueFromSurvey;
    private getValueFromValues;
    private getNonNestedObject;
    private getNonNestedObjectCore;
    private getObjInArray;
    private getFirstPropertyName;
    private getObjectValue;
    private getIntValue;
}
