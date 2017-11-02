export class Option {

    value: any;
    label: string;

    disabled: boolean;
    highlighted: boolean;
    selected: boolean;
    shown: boolean;
    group: any;

    constructor(value: any, label: string, group?: any) {
        this.value = value;
        this.label = label;
        this.group = group;

        this.disabled = false;
        this.highlighted = false;
        this.selected = false;
        this.shown = true;
    }

    show() {
        this.shown = true;
    }

    hide() {
        this.shown = false;
    }

    disable() {
        this.disabled = true;
    }

    enable() {
        this.disabled = false;
    }

    undecoratedCopy() {
        return {
            label: this.label,
            value: this.value
        };
    }
}
