export declare class TooltipManager {
    tooltipElement: HTMLElement;
    private targetElement;
    constructor(tooltipElement: HTMLElement);
    dispose(): void;
    private onMouseMoveCallback;
}
