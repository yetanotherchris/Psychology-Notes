import React from "react";
import { ReactSurveyElement } from "../../../reactquestion_element";
export declare class SurveyQuestionMatrixDynamicRemoveButton extends ReactSurveyElement {
    constructor(props: any);
    private get question();
    private get row();
    handleOnRowRemoveClick(event: any): void;
    protected renderElement(): React.JSX.Element;
}
