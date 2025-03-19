/// <reference types="react" />
import { QuestionMatrixDropdownRenderedRow, QuestionMatrixDropdownModelBase } from "survey-core";
import { SurveyElementBase } from "../../reactquestion_element";
interface IMatrixRowProps {
    model: QuestionMatrixDropdownRenderedRow;
    parentMatrix: QuestionMatrixDropdownModelBase;
}
export declare class MatrixRow extends SurveyElementBase<IMatrixRowProps, any> {
    private root;
    constructor(props: IMatrixRowProps);
    get model(): QuestionMatrixDropdownRenderedRow;
    get parentMatrix(): QuestionMatrixDropdownModelBase;
    protected getStateElement(): QuestionMatrixDropdownRenderedRow;
    protected onPointerDownHandler: (event: any) => void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    shouldComponentUpdate(nextProps: any, nextState: any): boolean;
    render(): JSX.Element | null;
}
export {};
