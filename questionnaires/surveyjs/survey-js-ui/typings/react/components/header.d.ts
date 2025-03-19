import React from "react";
import { Base, SurveyModel, Cover, CoverCell } from "survey-core";
import { SurveyElementBase } from "../reactquestion_element";
export interface ILayoutElementProps<T = Base> {
    survey: SurveyModel;
    model: T;
}
export declare class HeaderMobile extends React.Component<any, any> {
    get model(): Cover;
    private renderLogoImage;
    render(): JSX.Element | null;
}
export declare class HeaderCell extends React.Component<any, any> {
    get model(): CoverCell;
    private renderLogoImage;
    render(): JSX.Element | null;
}
export declare class Header extends SurveyElementBase<ILayoutElementProps<Cover>, any> {
    get model(): Cover;
    protected getStateElement(): Base;
    renderElement(): JSX.Element | null;
}
