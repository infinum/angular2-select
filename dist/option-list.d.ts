import { Option } from './option';
export declare class OptionList {
    private _options;
    private _highlightedOption;
    private _hasShown;
    constructor(options: Array<any>);
    /** Options. **/
    readonly options: Array<Option>;
    getOptionsByValue(value: any): Array<Option>;
    /** Value. **/
    value: Array<any>;
    /** Selection. **/
    readonly selection: Array<Option>;
    select(option: Option, multiple: boolean): void;
    deselect(option: Option): void;
    clearSelection(): void;
    /** Filter. **/
    readonly filtered: Array<Option>;
    private _defaultTest(term, option);
    private _test;
    test: (term: string, option: any) => boolean;
    filter(term: string): boolean;
    private resetFilter();
    /** Highlight. **/
    readonly highlightedOption: Option;
    highlight(): void;
    highlightOption(option: Option): void;
    highlightNextOption(): void;
    highlightPreviousOption(): void;
    private clearHighlightedOption();
    private getHighlightedIndexFromList(options);
    getHighlightedIndex(): number;
    /** Util. **/
    readonly hasShown: boolean;
    hasSelected(): boolean;
    hasShownSelected(): boolean;
    private getFirstShown();
    private getFirstShownSelected();
    static equalValues(v0: Array<string>, v1: Array<string>): boolean;
}
