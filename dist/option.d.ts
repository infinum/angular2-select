export declare class Option {
    value: any;
    label: string;
    disabled: boolean;
    highlighted: boolean;
    selected: boolean;
    shown: boolean;
    constructor(value: any, label: string);
    show(): void;
    hide(): void;
    disable(): void;
    enable(): void;
    undecoratedCopy(): {
        label: string;
        value: any;
    };
}
