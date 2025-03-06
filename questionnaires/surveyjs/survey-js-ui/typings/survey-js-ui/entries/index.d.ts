export { useState, useId, useReducer, useEffect, useLayoutEffect, useInsertionEffect, useTransition, useDeferredValue, useSyncExternalStore, startTransition, useRef, useImperativeHandle, useMemo, useCallback, useContext, useDebugValue, version, Children, render, hydrate, unmountComponentAtNode, createPortal, createElement, createContext, createFactory, cloneElement, createRef, Fragment, isValidElement, isFragment, isMemo, findDOMNode, Component, PureComponent, memo, forwardRef, flushSync, unstable_batchedUpdates, StrictMode, Suspense, SuspenseList, lazy, } from "preact/compat";
import { SurveyModel } from "survey-core";
export declare function renderSurvey(model: SurveyModel, element: HTMLElement, props?: any): void;
export declare function renderPopupSurvey(model: SurveyModel, element: HTMLElement, props?: any): void;
export declare const preact: any;
export * from "../../survey-react-ui/entries/react-ui-model";
export { SurveyModel, SurveyWindowModel, SurveyModel as Model, settings, ISurveyEnvironment, surveyLocalization, surveyStrings } from "survey-core";
