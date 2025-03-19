import { Base } from "./base";
declare class SurveyTaskModel {
    type: string;
    private timestamp;
    constructor(type: string);
}
export declare class SurveyTaskManagerModel extends Base {
    private taskList;
    constructor();
    private onAllTasksCompleted;
    hasActiveTasks: boolean;
    runTask(type: string, func: (done: any) => void): SurveyTaskModel;
    waitAndExecute(action: any): void;
    private taskFinished;
}
export {};
