import { ILocalizableOwner, LocalizableString } from "./localizablestring";
import { HashTable } from "./helpers";
import { JsonObjectProperty } from "./jsonobject";
import { ItemValue } from "./itemvalue";
import { IElement, IFindElement, IProgressInfo, ISurvey, ILoadFromJSONOptions, ISaveToJSONOptions } from "./base-interfaces";
import { ExpressionRunner } from "./conditions";
export declare class Bindings {
    private obj;
    private properties;
    private values;
    constructor(obj: Base);
    getType(): string;
    getNames(): Array<string>;
    getProperties(): Array<JsonObjectProperty>;
    setBinding(propertyName: string, valueName: string): void;
    clearBinding(propertyName: string): void;
    isEmpty(): boolean;
    getValueNameByPropertyName(propertyName: string): string;
    getPropertiesByValueName(valueName: string): Array<string>;
    getJson(): any;
    setJson(value: any): void;
    private fillProperties;
    private onChangedJSON;
}
export declare class Dependencies {
    currentDependency: () => void;
    target: Base;
    property: string;
    private static DependenciesCount;
    constructor(currentDependency: () => void, target: Base, property: string);
    dependencies: Array<{
        obj: Base;
        prop: string;
        id: string;
    }>;
    id: string;
    addDependency(target: Base, property: string): void;
    dispose(): void;
}
export declare class ComputedUpdater<T = any> {
    private _updater;
    static readonly ComputedUpdaterType = "__dependency_computed";
    private dependencies;
    constructor(_updater: () => T);
    readonly type = "__dependency_computed";
    get updater(): () => T;
    setDependencies(dependencies: Dependencies): void;
    protected getDependencies(): Dependencies;
    private clearDependencies;
    dispose(): any;
}
/**
 * A base class for all SurveyJS objects.
 */
export declare class Base {
    private static currentDependencis;
    static finishCollectDependencies(): Dependencies;
    static startCollectDependencies(updater: () => void, target: Base, property: string): void;
    private static collectDependency;
    dependencies: {
        [key: string]: ComputedUpdater;
    };
    static get commentSuffix(): string;
    static set commentSuffix(val: string);
    static get commentPrefix(): string;
    static set commentPrefix(val: string);
    static createItemValue: (item: any, type?: string) => any;
    static itemValueLocStrChanged: (arr: Array<any>) => void;
    /**
     * Returns `true` if a passed `value` is an empty string, array, or object or if it equals to `undefined` or `null`.
     *
     * @param value A value to be checked.
     * @param trimString *(Optional)* When this parameter is `true`, the method ignores whitespace characters at the beginning and end of a string value. Pass `false` to disable this functionality.
     */
    isValueEmpty(value: any, trimString?: boolean): boolean;
    equals(obj: Base): boolean;
    protected equalsCore(obj: Base): boolean;
    protected trimValue(value: any): any;
    protected isPropertyEmpty(value: any): boolean;
    static createPropertiesHash(): {};
    private propertyHash;
    private localizableStrings;
    private arraysInfo;
    private eventList;
    private expressionInfo;
    private bindingsValue;
    private isDisposedValue;
    private classMetaData;
    private onPropChangeFunctions;
    protected isLoadingFromJsonValue: boolean;
    loadingOwner: Base;
    protected jsonObj: any;
    /**
     * An event that is raised when a property of this SurveyJS object has changed.
     *
     * Parameters:
     *
     * - `sender`: `this`\
     * A SurveyJS object whose property has changed.
     * - `options.name`: `string`\
     * The name of the changed property.
     * - `options.newValue`: `any`\
     * A new value for the property.
     * - `options.oldValue`: `any`\
     * An old value of the property. If the property is an array, `oldValue` contains the same array as `newValue` does.
     *
     * If you need to add and remove property change event handlers dynamically, use the [`registerPropertyChangedHandlers`](#registerPropertyChangedHandlers) and [`unregisterPropertyChangedHandlers`](#unregisterPropertyChangedHandlers) methods instead.
     */
    onPropertyChanged: EventBase<Base>;
    /**
     * An event that is raised when an [`ItemValue`](https://surveyjs.io/form-library/documentation/itemvalue) property is changed.
     *
     * Parameters:
     *
     * - `sender`: `this`\
     * A SurveyJS object whose property contains an array of `ItemValue` objects.
     * - `options.obj`: [`ItemValue`](https://surveyjs.io/form-library/documentation/itemvalue)\
     * An `ItemValue` object.
     * - `options.propertyName`: `string`\
     * The name of the property to which an array of `ItemValue` objects is assigned (for example, `"choices"` or `"rows"`).
     * - `options.name`: `"text"` | `"value"`\
     * The name of the changed property.
     * - `options.newValue`: `any`\
     * A new value for the property.
     */
    onItemValuePropertyChanged: Event<(sender: Base, options: any) => any, Base, any>;
    getPropertyValueCoreHandler: (propertiesHash: any, name: string) => any;
    setPropertyValueCoreHandler: (propertiesHash: any, name: string, val: any) => void;
    createArrayCoreHandler: (propertiesHash: any, name: string) => Array<any>;
    surveyChangedCallback: () => void;
    private isCreating;
    constructor();
    dispose(): void;
    get isDisposed(): boolean;
    protected addEvent<T, Options = any>(): EventBase<T, Options>;
    protected onBaseCreating(): void;
    /**
     * Returns the object type as it is used in the JSON schema.
     */
    getType(): string;
    /**
     * Use this method to find out if the current object is of a given `typeName` or inherited from it.
     *
     * @param typeName One of the values listed in the [getType()](https://surveyjs.io/form-library/documentation/question#getType) description.
     * @returns `true` if the current object is of a given `typeName` or inherited from it.
     * @see getType
     */
    isDescendantOf(typeName: string): boolean;
    getSurvey(isLive?: boolean): ISurvey;
    /**
     * Returns `true` if the survey is being designed in Survey Creator.
     */
    get isDesignMode(): boolean;
    get isDesignModeV2(): boolean;
    /**
     * Returns `true` if the object is included in a survey.
     *
     * This property may return `false`, for example, when you [create a survey model dynamically](https://surveyjs.io/form-library/documentation/design-survey-create-a-simple-survey#create-or-change-a-survey-model-dynamically).
     */
    get inSurvey(): boolean;
    get bindings(): Bindings;
    checkBindings(valueName: string, value: any): void;
    protected updateBindings(propertyName: string, value: any): void;
    protected updateBindingValue(valueName: string, value: any): void;
    getTemplate(): string;
    /**
     * Returns `true` if the object configuration is being loaded from JSON.
     */
    get isLoadingFromJson(): boolean;
    protected getIsLoadingFromJson(): boolean;
    startLoadingFromJson(json?: any): void;
    endLoadingFromJson(): void;
    /**
     * Returns a JSON object that corresponds to the current SurveyJS object.
     * @see fromJSON
     */
    toJSON(options?: ISaveToJSONOptions): any;
    /**
     * Assigns a new configuration to the current SurveyJS object. This configuration is taken from a passed JSON object.
     *
     * The JSON object should contain only serializable properties of this SurveyJS object. Event handlers and properties that do not belong to the SurveyJS object are ignored.
     *
     * @param json A JSON object with properties that you want to apply to the current SurveyJS object.
     * @param options An object with configuration options.
     * @param {boolean} options.validatePropertyValues Pass `true` if you want to validate property values. Use the [`jsonErrors`](#jsonErrors) array to access validation errors.
     * @see toJSON
     */
    fromJSON(json: any, options?: ILoadFromJSONOptions): void;
    onSurveyLoad(): void;
    /**
     * Creates a new object that has the same type and properties as the current SurveyJS object.
     */
    clone(): Base;
    /**
     * Returns a `JsonObjectProperty` object with metadata about a serializable property that belongs to the current SurveyJS object.
     *
     * If the property is not found, this method returns `null`.
     * @param propName A property name.
     */
    getPropertyByName(propName: string): JsonObjectProperty;
    isPropertyVisible(propName: string): boolean;
    static createProgressInfo(): IProgressInfo;
    getProgressInfo(): IProgressInfo;
    localeChanged(): void;
    locStrsChanged(): void;
    /**
     * Returns the value of a property with a specified name.
     *
     * If the property is not found or does not have a value, this method returns either `undefined`, `defaultValue` specified in the property configuration, or a value passed as the `defaultValue` parameter.
     *
     * @param name A property name.
     * @param defaultValue *(Optional)* A value to return if the property is not found or does not have a value.
     */
    getPropertyValue(name: string, defaultValue?: any): any;
    getDefaultPropertyValue(name: string): any;
    hasDefaultPropertyValue(name: string): boolean;
    resetPropertyValue(name: string): void;
    protected getPropertyValueWithoutDefault(name: string): any;
    protected getPropertyValueCore(propertiesHash: any, name: string): any;
    geValueFromHash(): any;
    protected setPropertyValueCore(propertiesHash: any, name: string, val: any): void;
    get isEditingSurveyElement(): boolean;
    iteratePropertiesHash(func: (hash: any, key: string) => void): void;
    /**
     * Assigns a new value to a specified property.
     * @param name A property name.
     * @param val A new value for the property.
     */
    setPropertyValue(name: string, val: any): void;
    protected setArrayPropertyDirectly(name: string, val: any, sendNotification?: boolean): void;
    protected setPropertyValueDirectly(name: string, val: any): void;
    protected clearPropertyValue(name: string): void;
    onPropertyValueChangedCallback(name: string, oldValue: any, newValue: any, sender: Base, arrayChanges: ArrayChanges): void;
    itemValuePropertyChanged(item: ItemValue, name: string, oldValue: any, newValue: any): void;
    protected onPropertyValueChanged(name: string, oldValue: any, newValue: any): void;
    protected propertyValueChanged(name: string, oldValue: any, newValue: any, arrayChanges?: ArrayChanges, target?: Base): void;
    onBindingChanged(oldValue: any, newValue: any): void;
    protected get isInternal(): boolean;
    private doPropertyValueChangedCallback;
    addExpressionProperty(name: string, onExecute: (obj: Base, res: any) => void, canRun?: (obj: Base) => boolean): void;
    getDataFilteredValues(): any;
    getDataFilteredProperties(): any;
    protected runConditionCore(values: HashTable<any>, properties: HashTable<any>): void;
    protected canRunConditions(): boolean;
    private checkConditionPropertyChanged;
    private runConditionItemCore;
    private asynExpressionHash;
    private doBeforeAsynRun;
    private doAfterAsynRun;
    protected onAsyncRunningChanged(): void;
    get isAsyncExpressionRunning(): boolean;
    protected createExpressionRunner(expression: string): ExpressionRunner;
    /**
     * Registers a single value change handler for one or multiple properties.
     *
     * The `registerPropertyChangedHandlers` and [`unregisterPropertyChangedHandlers`](#unregisterPropertyChangedHandlers) methods allow you to manage property change event handlers dynamically. If you only need to attach an event handler without removing it afterwards, you can use the [`onPropertyChanged`](#onPropertyChanged) event instead.
     * @param propertyNames An array of one or multiple property names.
     * @param handler A function to call when one of the listed properties change. Accepts a new property value as an argument.
     * @param key *(Optional)* A key that identifies the current registration. If a function for one of the properties is already registered with the same key, the function will be overwritten. You can also use the key to subsequently unregister handlers.
     * @see unregisterPropertyChangedHandlers
     */
    registerPropertyChangedHandlers(propertyNames: Array<string>, handler: any, key?: string): void;
    /**
     * Unregisters value change event handlers for the specified properties.
     * @param propertyNames An array of one or multiple property names.
     * @param key *(Optional)* A key of the registration that you want to cancel.
     * @see registerPropertyChangedHandlers
     */
    unregisterPropertyChangedHandlers(propertyNames: Array<string>, key?: string): void;
    registerFunctionOnPropertyValueChanged(name: string, func: any, key?: string): void;
    registerFunctionOnPropertiesValueChanged(names: Array<string>, func: any, key?: string): void;
    unRegisterFunctionOnPropertyValueChanged(name: string, key?: string): void;
    unRegisterFunctionOnPropertiesValueChanged(names: Array<string>, key?: string): void;
    createCustomLocalizableObj(name: string): LocalizableString;
    getLocale(): string;
    getLocalizationString(strName: string): string;
    getLocalizationFormatString(strName: string, ...args: any[]): string;
    protected createLocalizableString(name: string, owner: ILocalizableOwner, useMarkDown?: boolean, defaultStr?: boolean | string): LocalizableString;
    getLocalizableString(name: string): LocalizableString;
    getLocalizableStringText(name: string, defaultStr?: string): string;
    setLocalizableStringText(name: string, value: string): void;
    addUsedLocales(locales: Array<string>): void;
    searchText(text: string, founded: Array<IFindElement>): void;
    private getSearchableLocalizedStrings;
    protected getSearchableLocKeys(keys: Array<string>): void;
    protected getSearchableItemValueKeys(keys: Array<string>): void;
    protected AddLocStringToUsedLocales(locStr: LocalizableString, locales: Array<string>): void;
    protected createItemValues(name: string): Array<any>;
    private notifyArrayChanged;
    protected createNewArrayCore(name: string): Array<any>;
    protected ensureArray(name: string, onPush?: any, onRemove?: any): any[];
    protected createNewArray(name: string, onPush?: any, onRemove?: any): Array<any>;
    protected getItemValueType(): string;
    protected setArray(name: string, src: any[], dest: any[], isItemValues: boolean, onPush: any): void;
    protected isTwoValueEquals(x: any, y: any, caseInSensitive?: boolean, trimString?: boolean): boolean;
    private static copyObject;
    protected copyCssClasses(dest: any, source: any): void;
    private getValueInLowCase;
    getElementsInDesign(includeHidden?: boolean): Array<IElement>;
    get animationAllowed(): boolean;
    protected getIsAnimationAllowed(): boolean;
    private animationAllowedLock;
    blockAnimations(): void;
    releaseAnimations(): void;
    supportOnElementRenderedEvent: boolean;
    onElementRenderedEventEnabled: boolean;
    enableOnElementRenderedEvent(): void;
    disableOnElementRenderedEvent(): void;
    protected _onElementRerendered: EventBase<Base>;
    get onElementRerendered(): EventBase<Base>;
    afterRerender(): void;
}
export declare class ArrayChanges<T = any> {
    index: number;
    deleteCount: number;
    itemsToAdd: T[];
    deletedItems: T[];
    constructor(index: number, deleteCount: number, itemsToAdd: T[], deletedItems: T[]);
}
export declare class Event<CallbackFunction extends Function, Sender, Options> {
    onCallbacksChanged: () => void;
    protected callbacks: Array<CallbackFunction>;
    get isEmpty(): boolean;
    get length(): number;
    fireByCreatingOptions(sender: any, createOptions: () => Options): void;
    fire(sender: Sender, options: Options): void;
    clear(): void;
    add(func: CallbackFunction): void;
    remove(func: CallbackFunction): void;
    hasFunc(func: CallbackFunction): boolean;
    private fireCallbackChanged;
}
export declare class EventBase<Sender, Options = any> extends Event<(sender: Sender, options: Options) => any, Sender, Options> {
}
