export declare class Option {
    value: any;
    label: string;
    disabled: boolean;
    highlighted: boolean;
    selected: boolean;
    shown: boolean;
    group: any;
    constructor(value: any, label: string, group?: any);
    show(): void;
    hide(): void;
    disable(): void;
    enable(): void;
    undecoratedCopy(): {
        label: string;
        value: any;
    };
}
