import React from "react";
import { SurveyElementBase } from "../../reactquestion_element";
interface IRatingItemProps {
    item: any;
}
export declare class RatingDropdownItem extends SurveyElementBase<IRatingItemProps, any> {
    get item(): any;
    getStateElement(): any;
    render(): React.JSX.Element | null;
    renderDescription(item: any): React.JSX.Element;
}
export {};
