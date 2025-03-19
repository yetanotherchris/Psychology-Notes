import { HashTable } from "./helpers";
export declare class FunctionFactory {
    static Instance: FunctionFactory;
    private functionHash;
    private isAsyncHash;
    register(name: string, func: (params: any[], originalParams?: any[]) => any, isAsync?: boolean): void;
    unregister(name: string): void;
    hasFunction(name: string): boolean;
    isAsyncFunction(name: string): boolean;
    clear(): void;
    getAll(): Array<string>;
    run(name: string, params: any[], properties: HashTable<any>, originalParams: any[]): any;
}
export declare var registerFunction: (name: string, func: (params: any[], originalParams?: any[]) => any, isAsync?: boolean) => void;
