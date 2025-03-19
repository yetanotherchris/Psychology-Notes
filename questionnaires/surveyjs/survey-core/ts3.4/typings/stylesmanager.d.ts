import { Logger } from "./utils/utils";
export declare const modernThemeColors: {
    [key: string]: string;
};
export declare const defaultThemeColors: {
    [key: string]: string;
};
export declare const orangeThemeColors: {
    [key: string]: string;
};
export declare const darkblueThemeColors: {
    [key: string]: string;
};
export declare const darkroseThemeColors: {
    [key: string]: string;
};
export declare const stoneThemeColors: {
    [key: string]: string;
};
export declare const winterThemeColors: {
    [key: string]: string;
};
export declare const winterstoneThemeColors: {
    [key: string]: string;
};
export declare class StylesManager {
    private static SurveyJSStylesSheetId;
    static Logger: Logger;
    static Styles: {
        [key: string]: string;
    };
    static Media: {
        [key: string]: {
            media: string;
            style: string;
        };
    };
    static ThemeColors: {
        [key: string]: {
            [key: string]: string;
        };
    };
    static ThemeCss: {
        [key: string]: {
            [key: string]: string;
        };
    };
    static ThemeSelector: {
        [key: string]: string;
    };
    static autoApplyTheme(): void;
    static getAvailableThemes(): Array<any>;
    static getIncludedThemeCss(): Array<any>;
    static findSheet(styleSheetId: string): any;
    static createSheet(styleSheetId: string): any;
    static applyTheme(themeName?: string, themeSelector?: string): void;
    static Enabled: boolean;
    constructor();
    static insertStylesRulesIntoDocument(): any;
}
