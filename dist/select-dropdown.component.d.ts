import { AfterViewInit, EventEmitter, OnChanges, OnInit, TemplateRef } from '@angular/core';
import { Option } from './option';
import { OptionList } from './option-list';
export declare class SelectDropdownComponent implements AfterViewInit, OnChanges, OnInit {
    filterEnabled: boolean;
    forceFilterEnabled: boolean;
    highlightColor: string;
    highlightTextColor: string;
    left: number;
    multiple: boolean;
    notFoundMsg: string;
    optionList: OptionList;
    top: number;
    width: number;
    selectOptionTemplate: TemplateRef<any>;
    groupTemplate: TemplateRef<any>;
    notFoundTemplate: TemplateRef<any>;
    alwaysOnTemplate: TemplateRef<any>;
    close: EventEmitter<boolean>;
    optionClicked: EventEmitter<Option>;
    singleFilterClick: EventEmitter<null>;
    singleFilterInput: EventEmitter<string>;
    singleFilterKeydown: EventEmitter<any>;
    filterInput: any;
    optionsList: any;
    disabledColor: string;
    disabledTextColor: string;
    /** Event handlers. **/
    ngOnInit(): void;
    ngOnChanges(changes: any): void;
    ngAfterViewInit(): void;
    onSingleFilterClick(event: any): void;
    onSingleFilterInput(event: any): void;
    onSingleFilterKeydown(event: any): void;
    onOptionsWheel(event: any): void;
    onOptionMouseover(option: Option): void;
    onOptionClick(option: Option): void;
    /** Initialization. **/
    private optionsReset();
    /** View. **/
    getOptionStyle(option: Option): any;
    clearFilterInput(): void;
    moveHighlightedIntoView(): void;
    shouldShowGroup(optionIndex: number): boolean;
    private handleOptionsWheel(e);
}
