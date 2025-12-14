import { Base } from "./base";
import { ActionContainer } from "./actions/container";
import { IAction } from "./actions/action";
interface INotifierCssClasses {
    root: string;
    rootWithButtons: string;
    info: string;
    error: string;
    success: string;
    button: string;
    shown: string;
}
export declare class Notifier extends Base {
    private cssClasses;
    active: boolean;
    isDisplayed: boolean;
    message: string;
    css: string;
    timeout: number;
    timer: any;
    private actionsVisibility;
    actionBar: ActionContainer;
    showActions: boolean;
    constructor(cssClasses: INotifierCssClasses);
    getCssClass(type: string): string;
    updateActionsVisibility(type: string): void;
    notify(message: string, type?: string, waitUserAction?: boolean): void;
    addAction(action: IAction, notificationType: string): void;
}
export {};
