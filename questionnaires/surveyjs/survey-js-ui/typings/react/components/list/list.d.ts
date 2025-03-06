/// <reference types="react" />
import { ListModel } from "survey-core";
import { SurveyElementBase } from "../../reactquestion_element";
interface IListProps {
    model: ListModel;
}
export declare class List extends SurveyElementBase<IListProps, any> {
    private listContainerRef;
    constructor(props: any);
    get model(): ListModel;
    handleKeydown: (event: any) => void;
    handleMouseMove: (event: any) => void;
    getStateElement(): ListModel<import("survey-core").Action>;
    componentDidMount(): void;
    componentDidUpdate(prevProps: any, prevState: any): void;
    componentWillUnmount(): void;
    renderElement(): JSX.Element;
    renderList(): JSX.Element | null;
    renderItems(): JSX.Element[] | null;
    searchElementContent(): JSX.Element | null;
    emptyContent(): JSX.Element;
}
export {};
