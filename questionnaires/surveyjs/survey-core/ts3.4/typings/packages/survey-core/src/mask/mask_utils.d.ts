export declare var numberDefinition: RegExp;
export interface IMaskedInputResult {
    value: string;
    caretPosition: number;
    cancelPreventDefault?: boolean;
}
export interface ITextInputParams {
    prevValue: string;
    selectionStart: number;
    selectionEnd: number;
    insertedChars: string | null;
    inputDirection?: "forward" | "backward";
}
export interface IInputMask {
    getMaskedValue(src: any): string;
    getUnmaskedValue(src: string): any;
    processInput(args: ITextInputParams): IMaskedInputResult;
    getTextAlignment(): "left" | "right" | "auto";
}
export declare function getAvailableMaskTypeChoices(): string[];
