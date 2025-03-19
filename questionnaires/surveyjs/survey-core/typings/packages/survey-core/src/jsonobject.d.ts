import { Base } from "./base";
import { ILoadFromJSONOptions, ISaveToJSONOptions } from "./base-interfaces";
export interface IPropertyDecoratorOptions<T = any> {
    defaultValue?: T;
    defaultSource?: string;
    getDefaultValue?: (objectInstance?: any) => T;
    localizable?: {
        name?: string;
        onGetTextCallback?: (str: string) => string;
        defaultStr?: string;
    } | boolean;
    onSet?: (val: T, objectInstance: any, prevVal?: T) => void;
}
export declare function property(options?: IPropertyDecoratorOptions): (target: any, key: string) => void;
export interface IArrayPropertyDecoratorOptions {
    onPush?: any;
    onRemove?: any;
    onSet?: (val: any, target: any) => void;
}
export declare function propertyArray(options?: IArrayPropertyDecoratorOptions): (target: any, key: string) => void;
export interface IObject {
    [key: string]: any;
}
export interface IJsonPropertyInfo {
    name: string;
    type?: string;
    className?: string;
    classNamePart?: string;
    baseClassName?: string;
    isRequired?: boolean;
    isUnique?: boolean;
    uniqueProperty?: string;
    choices?: any;
    visible?: boolean;
    alternativeName?: string;
    oldName?: string;
    version?: string;
    dataList?: Array<string>;
    isLocalizable?: boolean;
    isSerializable?: boolean;
    isLightSerializable?: boolean;
    readOnly?: boolean;
    availableInMatrixColumn?: boolean;
    serializationProperty?: string;
    dependsOn?: Array<string> | string;
    isBindable?: boolean;
    isArray?: boolean;
    layout?: string;
    default?: any;
    defaultFunc?: (obj: Base) => any;
    baseValue?: any;
    onSerializeValue?: (obj: any) => any;
    onGetValue?: (obj: any) => any;
    onSettingValue?: (obj: any, value: any) => any;
    onSetValue?: (obj: any, value: any, jsonConv: JsonObject) => any;
    visibleIf?: (obj: any) => boolean;
    enableIf?: (obj: any) => boolean;
    onExecuteExpression?: (obj: any, res: any) => any;
    onPropertyEditorUpdate?: (obj: any, propEditor: any) => any;
    displayName?: string;
    category?: string;
    categoryIndex?: number;
    visibleIndex?: number;
    nextToProperty?: string;
    overridingProperty?: string;
    showMode?: string;
    maxLength?: number;
    maxValue?: any;
    minValue?: any;
}
/**
 * Contains information about a property of a survey element (page, panel, questions, and etc).
 * @see addProperty
 * @see removeProperty
 * @see [Add Properties](https://surveyjs.io/Documentation/Survey-Creator#addproperties)
 * @see [Remove Properties](https://surveyjs.io/Documentation/Survey-Creator#removeproperties)
 */
export declare class JsonObjectProperty implements IObject, IJsonPropertyInfo {
    name: string;
    static getItemValuesDefaultValue: (val: any, type: string) => any;
    [key: string]: any;
    private static Index;
    private static mergableValues;
    private idValue;
    private classInfoValue;
    private typeValue;
    private choicesValue;
    baseValue: any;
    private isRequiredValue;
    private isUniqueValue;
    private uniquePropertyValue;
    private readOnlyValue;
    private visibleValue;
    private isLocalizableValue;
    private choicesfunc;
    private dependedProperties;
    isSerializable: boolean;
    isLightSerializable: boolean;
    isCustom: boolean;
    isDynamicChoices: boolean;
    isBindable: boolean;
    className: string;
    alternativeName: string;
    oldName: string;
    classNamePart: string;
    baseClassName: string;
    defaultValueValue: any;
    defaultValueFunc: (obj: Base) => any;
    serializationProperty: string;
    displayName: string;
    category: string;
    categoryIndex: number;
    visibleIndex: number;
    nextToProperty: string;
    overridingProperty: string;
    showMode: string;
    availableInMatrixColumn: boolean;
    maxLength: number;
    maxValue: any;
    minValue: any;
    private dataListValue;
    layout: string;
    version: string;
    onSerializeValue: (obj: any) => any;
    onGetValue: (obj: any) => any;
    onSettingValue: (obj: any, value: any) => any;
    onSetValue: (obj: any, value: any, jsonConv: JsonObject) => any;
    visibleIf: (obj: any) => boolean;
    enableIf: (obj: any) => boolean;
    onExecuteExpression: (obj: any, res: any) => any;
    onPropertyEditorUpdate: (obj: any, propEditor: any) => any;
    constructor(classInfo: JsonMetadataClass, name: string, isRequired?: boolean);
    uniqueProperty?: string;
    dependsOn?: string | Array<string>;
    default?: any;
    defaultFunc?: (obj: Base) => any;
    get id(): number;
    get classInfo(): JsonMetadataClass;
    get type(): string;
    set type(value: string);
    isArray: boolean;
    get isRequired(): boolean;
    set isRequired(val: boolean);
    get isUnique(): boolean;
    set isUnique(val: boolean);
    get uniquePropertyName(): string;
    set uniquePropertyName(val: string);
    get hasToUseGetValue(): string | ((obj: any) => any);
    getDefaultValue(obj: Base): any;
    get defaultValue(): any;
    set defaultValue(newValue: any);
    isDefaultValue(value: any): boolean;
    isDefaultValueByObj(obj: Base, value: any): boolean;
    getSerializableValue(obj: any, storeDefaults?: boolean): any;
    getValue(obj: any): any;
    getPropertyValue(obj: any): any;
    get hasToUseSetValue(): string | ((obj: any, value: any, jsonConv: JsonObject) => any);
    settingValue(obj: any, value: any): any;
    setValue(obj: any, value: any, jsonConv: JsonObject): void;
    validateValue(value: any): boolean;
    getObjType(objType: string): string;
    /**
     * Depricated, please use getChoices
     */
    get choices(): Array<any>;
    get hasChoices(): boolean;
    getChoices(obj: any, choicesCallback?: any): Array<any>;
    setChoices(value: Array<any>, valueFunc?: (obj: any) => Array<any>): void;
    getBaseValue(): string;
    setBaseValue(val: any): void;
    get readOnly(): boolean;
    set readOnly(val: boolean);
    isEnable(obj: any): boolean;
    isVisible(layout: string, obj?: any): boolean;
    private getOriginalObj;
    get visible(): boolean;
    set visible(val: boolean);
    isAvailableInVersion(ver: string): boolean;
    getSerializedName(ver: string): string;
    getSerializedProperty(obj: any, ver: string): JsonObjectProperty;
    private isAvailableInVersionCore;
    get isLocalizable(): boolean;
    set isLocalizable(val: boolean);
    get dataList(): Array<string>;
    set dataList(val: Array<string>);
    mergeWith(prop: JsonObjectProperty): void;
    addDependedProperty(name: string): void;
    getDependedProperties(): Array<string>;
    schemaType(): string;
    schemaRef(): string;
    private mergeValue;
}
export declare class CustomPropertiesCollection {
    private static properties;
    private static parentClasses;
    static addProperty(className: string, property: any): void;
    static removeProperty(className: string, propertyName: string): void;
    static removeAllProperties(className: string): void;
    static addClass(className: string, parentClassName: string): void;
    static getProperties(className: string): Array<any>;
    static createProperties(obj: any): void;
    private static createPropertiesCore;
    private static createPropertiesInObj;
    private static createPropertyInObj;
    private static checkIsPropertyExists;
}
export declare class JsonMetadataClass {
    name: string;
    creator: (json?: any) => any;
    parentName: string;
    static requiredSymbol: string;
    static typeSymbol: string;
    properties: Array<JsonObjectProperty>;
    private isCustomValue;
    private allProperties;
    private requiredProperties;
    private hashProperties;
    constructor(name: string, properties: Array<any>, creator?: (json?: any) => any, parentName?: string);
    find(name: string): JsonObjectProperty;
    findProperty(name: string): JsonObjectProperty;
    getAllProperties(): Array<JsonObjectProperty>;
    getRequiredProperties(): Array<JsonObjectProperty>;
    resetAllProperties(): void;
    get isCustom(): boolean;
    private fillAllProperties;
    private addPropCore;
    private isOverridedProp;
    private hasRegularChildClass;
    private makeParentRegularClass;
    createProperty(propInfo: any, isCustom?: boolean): JsonObjectProperty;
    private addDependsOnProperties;
    private addDependsOnProperty;
    private getIsPropertyNameRequired;
    private getPropertyName;
}
/**
 * The metadata object. It contains object properties' runtime information and allows you to modify it.
 */
export declare class JsonMetadata {
    private classes;
    private alternativeNames;
    private childrenClasses;
    private dynamicPropsCache;
    onSerializingProperty: ((obj: Base, prop: JsonObjectProperty, value: any, json: any) => boolean) | undefined;
    getObjPropertyValue(obj: any, name: string): any;
    setObjPropertyValue(obj: any, name: string, val: any): void;
    private getObjPropertyValueCore;
    private isObjWrapper;
    private isNeedUseObjWrapper;
    addClass(name: string, properties: Array<IJsonPropertyInfo | string>, creator?: (json?: any) => any, parentName?: string): JsonMetadataClass;
    removeClass(name: string): void;
    overrideClassCreatore(name: string, creator: () => any): void;
    overrideClassCreator(name: string, creator: () => any): void;
    getProperties(className: string): Array<JsonObjectProperty>;
    getPropertiesByObj(obj: any): Array<JsonObjectProperty>;
    addDynamicPropertiesIntoObj(dest: any, src: any, props: Array<JsonObjectProperty>): void;
    private addDynamicPropertyIntoObj;
    getDynamicPropertiesByObj(obj: any, dynamicType?: string): Array<JsonObjectProperty>;
    getDynamicPropertiesByTypes(objType: string, dynamicType: string, invalidNames?: Array<string>): Array<JsonObjectProperty>;
    private canAddDybamicProp;
    hasOriginalProperty(obj: Base, propName: string): boolean;
    getOriginalProperty(obj: Base, propName: string): JsonObjectProperty;
    getProperty(className: string, propertyName: string): JsonObjectProperty;
    findProperty(className: string, propertyName: string): JsonObjectProperty;
    findProperties(className: string, propertyNames: Array<string>): Array<JsonObjectProperty>;
    getAllPropertiesByName(propertyName: string): Array<JsonObjectProperty>;
    getAllClasses(): Array<string>;
    createClass(name: string, json?: any): any;
    private createCustomType;
    getChildrenClasses(name: string, canBeCreated?: boolean): Array<JsonMetadataClass>;
    getRequiredProperties(name: string): Array<string>;
    addProperties(className: string, propertiesInfos: Array<IJsonPropertyInfo | string>): void;
    addProperty(className: string, propertyInfo: IJsonPropertyInfo | string): JsonObjectProperty;
    private addCustomPropertyCore;
    removeProperty(className: string, propertyName: string): boolean;
    private clearDynamicPropsCache;
    private removePropertyFromClass;
    private fillChildrenClasses;
    findClass(name: string): JsonMetadataClass;
    isDescendantOf(className: string, ancestorClassName: string): boolean;
    addAlterNativeClassName(name: string, alternativeName: string): void;
    generateSchema(className?: string): any;
    private generateLocStrClass;
    private generateSchemaProperties;
    private generateSchemaProperty;
    private getChemeRefName;
    private generateChemaClass;
    private getChoicesValues;
}
export declare class JsonError {
    type: string;
    message: string;
    description: string;
    at: number;
    end: number;
    jsonObj: any;
    element: Base;
    constructor(type: string, message: string);
    getFullDescription(): string;
}
export declare class JsonUnknownPropertyError extends JsonError {
    propertyName: string;
    className: string;
    constructor(propertyName: string, className: string);
}
export declare class JsonMissingTypeErrorBase extends JsonError {
    baseClassName: string;
    type: string;
    message: string;
    constructor(baseClassName: string, type: string, message: string);
}
export declare class JsonMissingTypeError extends JsonMissingTypeErrorBase {
    propertyName: string;
    baseClassName: string;
    constructor(propertyName: string, baseClassName: string);
}
export declare class JsonIncorrectTypeError extends JsonMissingTypeErrorBase {
    propertyName: string;
    baseClassName: string;
    constructor(propertyName: string, baseClassName: string);
}
export declare class JsonRequiredPropertyError extends JsonError {
    propertyName: string;
    className: string;
    constructor(propertyName: string, className: string);
}
export declare class JsonRequiredArrayPropertyError extends JsonError {
    propertyName: string;
    className: string;
    constructor(propertyName: string, className: string);
}
export declare class JsonIncorrectPropertyValueError extends JsonError {
    property: JsonObjectProperty;
    value: any;
    constructor(property: JsonObjectProperty, value: any);
}
export declare class JsonObject {
    private static typePropertyName;
    private static positionPropertyName;
    private static metaDataValue;
    static get metaData(): JsonMetadata;
    errors: JsonError[];
    lightSerializing: boolean;
    options: ILoadFromJSONOptions;
    toJsonObject(obj: any, options?: ISaveToJSONOptions | boolean): any;
    toObject(jsonObj: any, obj: any, options?: ILoadFromJSONOptions): void;
    toObjectCore(jsonObj: any, obj: any, options?: ILoadFromJSONOptions): void;
    private setPropertyValueToObj;
    toJsonObjectCore(obj: any, property: JsonObjectProperty, options?: ISaveToJSONOptions | boolean): any;
    private getDynamicProperties;
    private addDynamicProperties;
    private propertiesToJson;
    valueToJson(obj: any, result: any, prop: JsonObjectProperty, options?: ISaveToJSONOptions): void;
    private valueToJsonCore;
    valueToObj(value: any, obj: any, property: JsonObjectProperty, jsonObj?: any, options?: ILoadFromJSONOptions): void;
    private removePosOnValueToJson;
    private removePos;
    private removePosFromObj;
    private isValueArray;
    private createNewObj;
    private getClassNameForNewObj;
    private checkNewObjectOnErrors;
    private getRequiredError;
    private addNewError;
    private valueToArray;
    private addValuesIntoArray;
    private findProperty;
}
/**
 * An alias for the metadata object. It contains object properties' runtime information and allows you to modify it.
 * @see JsonMetadata
 */
export declare var Serializer: JsonMetadata;
