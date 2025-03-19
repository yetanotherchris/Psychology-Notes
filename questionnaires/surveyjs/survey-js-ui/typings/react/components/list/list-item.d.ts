/// <reference types="react" />
import { ListModel } from "survey-core";
import { SurveyElementBase } from "../../reactquestion_element";
interface IListItemProps {
    model: ListModel;
    item: any;
}
export declare class ListItem extends SurveyElementBase<IListItemProps, any> {
    get model(): ListModel;
    get item(): any;
    handleKeydown: (event: any) => void;
    getStateElement(): any;
    render(): JSX.Element | null;
    componentDidMount(): void;
}
export {};
