import { Base } from "../base";
import { ISurvey } from "../base-interfaces";
import { IInputMask, IMaskedInputResult, ITextInputParams } from "./mask_utils";
/**
 * A base class for classes that implement input masks:
 *
 * - [`InputMaskNumeric`](https://surveyjs.io/form-library/documentation/inputmasknumeric)
 * - [`InputMaskCurrency`](https://surveyjs.io/form-library/documentation/inputmaskcurrency)
 * - [`InputMaskDateTime`](https://surveyjs.io/form-library/documentation/inputmaskdatetime)
 * - [`InputMaskPattern`](https://surveyjs.io/form-library/documentation/inputmaskpattern)
 */
export declare class InputMaskBase extends Base implements IInputMask {
    /**
     * Specifies whether to store the question value with an applied mask in survey results.
     *
     * Default value: `false`
     */
    saveMaskedValue: boolean;
    owner: ISurvey;
    getSurvey(live?: boolean): ISurvey;
    getType(): string;
    setData(json: any): void;
    getData(): any;
    processInput(args: ITextInputParams): IMaskedInputResult;
    getUnmaskedValue(src: string): any;
    getMaskedValue(src: any): string;
    getTextAlignment(): "left" | "right" | "auto";
}
