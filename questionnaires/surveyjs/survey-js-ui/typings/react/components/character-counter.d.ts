/// <reference types="react" />
import { Base, CharacterCounter } from "survey-core";
import { SurveyElementBase } from "../reactquestion_element";
export interface ICharacterCounterComponentProps {
    counter: CharacterCounter;
    remainingCharacterCounter: string;
}
export declare class CharacterCounterComponent extends SurveyElementBase<ICharacterCounterComponentProps, any> {
    protected getStateElement(): Base;
    renderElement(): JSX.Element | null;
}
