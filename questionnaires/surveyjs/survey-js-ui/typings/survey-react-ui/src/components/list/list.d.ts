import React from "react";
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
    renderElement(): React.JSX.Element;
    renderList(): React.JSX.Element;
    renderItems(): React.JSX.Element[];
    searchElementContent(): React.JSX.Element;
    emptyContent(): React.JSX.Element;
}
export {};
