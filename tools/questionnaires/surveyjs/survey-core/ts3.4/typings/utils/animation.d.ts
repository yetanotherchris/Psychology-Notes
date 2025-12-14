import { EventBase, Base } from "../base";
export interface AnimationOptions {
    cssClass: string;
    onBeforeRunAnimation?: (element: HTMLElement) => void;
    onAfterRunAnimation?: (element: HTMLElement) => void;
}
export interface IAnimationConsumer<T extends Array<any> = [
]> {
    getLeaveOptions?(...args: T): AnimationOptions;
    getEnterOptions?(...args: T): AnimationOptions;
    getAnimatedElement(...args: T): HTMLElement;
    isAnimationEnabled(): boolean;
    getRerenderEvent(): EventBase<Base>;
}
interface IGroupAnimationInfo {
    isReorderingRunning: boolean;
    isDeletingRunning: boolean;
    isAddingRunning: boolean;
}
export interface IAnimationGroupConsumer<T> extends IAnimationConsumer<[
    T
]> {
    getLeaveOptions?(item: T, info?: IGroupAnimationInfo): AnimationOptions;
    getEnterOptions?(item: T, info?: IGroupAnimationInfo): AnimationOptions;
    getReorderOptions?(item: T, movedForward: boolean, info?: IGroupAnimationInfo): AnimationOptions;
    getKey?: (item: T) => any;
    allowSyncRemovalAddition?: boolean;
}
export declare class AnimationUtils {
    private getMsFromRule;
    private reflow;
    private getAnimationsCount;
    private getAnimationDuration;
    private cancelQueue;
    private addCancelCallback;
    private removeCancelCallback;
    protected onAnimationEnd(element: HTMLElement, callback: (isCancel?: boolean) => void, options: AnimationOptions): void;
    protected afterAnimationRun(element: HTMLElement, options: AnimationOptions | AnimationOptions): void;
    protected beforeAnimationRun(element: HTMLElement, options: AnimationOptions | AnimationOptions): void;
    private getCssClasses;
    protected runAnimation(element: HTMLElement, options: AnimationOptions, callback: (isCancel?: boolean) => void): void;
    protected clearHtmlElement(element: HTMLElement, options: AnimationOptions): void;
    protected onNextRender(callback: (isCancel?: boolean) => void, isCancel?: boolean): void;
    cancel(): void;
}
export declare class AnimationPropertyUtils extends AnimationUtils {
    onEnter(options: IAnimationConsumer): void;
    onLeave(options: IAnimationConsumer, callback: () => void): void;
}
export declare class AnimationGroupUtils<T> extends AnimationUtils {
    runGroupAnimation(options: IAnimationGroupConsumer<T>, addedItems: Array<T>, removedItems: Array<T>, reorderedItems: Array<{
        item: T;
        movedForward: boolean;
    }>, callback?: () => void): void;
}
export declare abstract class AnimationProperty<T, S extends IAnimationConsumer<any> = IAnimationConsumer> {
    protected animationOptions: S;
    protected update: (val: T, isTempUpdate?: boolean) => void;
    protected getCurrentValue: () => T;
    constructor(animationOptions: S, update: (val: T, isTempUpdate?: boolean) => void, getCurrentValue: () => T);
    protected animation: AnimationUtils;
    protected onNextRender(callback: () => void, onCancel?: () => void): void;
    protected abstract _sync(newValue: T): void;
    private _debouncedSync;
    sync(newValue: T): void;
    private cancelCallback;
    cancel(): void;
}
export declare class AnimationBoolean extends AnimationProperty<boolean> {
    protected animation: AnimationPropertyUtils;
    protected _sync(newValue: boolean): void;
}
export declare class AnimationGroup<T> extends AnimationProperty<Array<T>, IAnimationGroupConsumer<T>> {
    protected animation: AnimationGroupUtils<T>;
    protected _sync(newValue: Array<T>): void;
}
export declare class AnimationTab<T> extends AnimationProperty<Array<T>, IAnimationGroupConsumer<T>> {
    protected mergeValues?: (newValue: Array<T>, oldValue: Array<T>) => Array<T>;
    protected animation: AnimationGroupUtils<T>;
    constructor(animationOptions: IAnimationGroupConsumer<T>, update: (val: Array<T>, isTempUpdate?: boolean) => void, getCurrentValue: () => Array<T>, mergeValues?: (newValue: Array<T>, oldValue: Array<T>) => Array<T>);
    protected _sync(newValue: [
        T
    ]): void;
}
export {};
