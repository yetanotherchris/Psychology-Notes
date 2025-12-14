import { InputMaskBase } from "./mask_base";
import { ITextInputParams } from "./mask_utils";
export declare class InputElementAdapter {
    private inputMaskInstance;
    private inputElement;
    private prevUnmaskedValue;
    constructor(inputMaskInstance: InputMaskBase, inputElement: HTMLInputElement, value?: any);
    inputMaskInstancePropertyChangedHandler: (sender: any, options: any) => void;
    clickHandler: (event: any) => void;
    beforeInputHandler: (event: any) => void;
    changeHandler: (event: any) => void;
    createArgs(event: any): ITextInputParams;
    addInputEventListener(): void;
    removeInputEventListener(): void;
    dispose(): void;
}
