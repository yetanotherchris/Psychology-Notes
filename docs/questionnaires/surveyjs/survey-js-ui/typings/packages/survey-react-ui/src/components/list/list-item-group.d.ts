import React from "react";
import { ListModel } from "survey-core";
import { SurveyElementBase } from "../../reactquestion_element";
interface IListItemProps {
    model: ListModel;
    item: any;
}
export declare class ListItemGroup extends SurveyElementBase<IListItemProps, any> {
    get model(): ListModel;
    get item(): any;
    getStateElement(): any;
    render(): React.JSX.Element | null;
}
export {};
