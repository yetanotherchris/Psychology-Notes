export interface IExecutable {
    id?: string;
    execute: () => void;
    isCompleted: boolean;
    dispose?: () => void;
}
export declare class Task implements IExecutable {
    private func;
    private isMultiple;
    private _isCompleted;
    constructor(func: () => void, isMultiple?: boolean);
    execute: () => void;
    discard(): void;
    readonly isCompleted: boolean;
}
export declare class TaskManger {
    private interval;
    private static instance;
    private static tasks;
    private constructor();
    static Instance(): TaskManger;
    private tick;
    static schedule(task: IExecutable): void;
}
export declare function debounce<T extends (...args: any) => void>(func: T): {
    run: T;
    cancel: () => void;
};
