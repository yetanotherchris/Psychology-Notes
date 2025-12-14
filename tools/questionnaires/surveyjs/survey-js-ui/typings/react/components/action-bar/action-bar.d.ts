/// <reference types="react" />
import { Base, Action, ActionContainer } from "survey-core";
import { SurveyElementBase } from "../../reactquestion_element";
export * from "./action-bar-item-dropdown";
export * from "./action-bar-separator";
interface IActionBarProps {
    model: ActionContainer<Action>;
    handleClick?: boolean;
}
export declare class SurveyActionBar extends SurveyElementBase<IActionBarProps, any> {
    private rootRef;
    constructor(props: IActionBarProps);
    private get handleClick();
    get model(): ActionContainer<Action>;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: IActionBarProps, prevState: any): void;
    protected getStateElement(): Base;
    renderElement(): any;
    renderItems(): JSX.Element[];
}
