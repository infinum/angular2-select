"use strict";
exports.TEMPLATE = "<div\n    [ngStyle]=\"{'top.px': top, 'left.px': left, 'width.px': width}\">\n\n    <div class=\"filter\"\n        *ngIf=\"(!multiple && filterEnabled) || (forceFilterEnabled && filterEnabled)\">\n        <input\n            #filterInput\n            (click)=\"onSingleFilterClick($event)\"\n            (input)=\"onSingleFilterInput($event)\"\n            (keydown)=\"onSingleFilterKeydown($event)\">\n    </div>\n\n    <div class=\"options\"\n        #optionsList>\n        <ul\n            (wheel)=\"onOptionsWheel($event)\">\n            <li *ngFor=\"let option of optionList.filtered; let i = index\">\n                <template *ngIf=\"shouldShowGroup(i)\" [ngOutletContext]=\"{option: option}\" [ngTemplateOutlet]=\"groupTemplate\"></template>\n\n                <div (click)=\"onOptionClick(option)\"\n                    [ngClass]=\"{'highlighted': option.highlighted, 'selected': option.selected, 'disabled': option.disabled, 'templated': !!optionTemplate}\"\n                    [ngStyle]=\"getOptionStyle(option)\"\n                    (mouseover)=\"onOptionMouseover(option)\">\n                    <template [ngOutletContext]=\"{option: option}\" [ngTemplateOutlet]=\"selectOptionTemplate\"></template>\n                    <span *ngIf=\"!selectOptionTemplate\">{{option.label}}</span>\n                </div>\n            </li>\n            <li\n                *ngIf=\"alwaysOnTemplate\"\n                class=\"message\">\n                <template [ngTemplateOutlet]=\"alwaysOnTemplate\"></template>\n            </li>\n            <li\n                *ngIf=\"!optionList.hasShown\"\n                class=\"message\">\n                <template [ngTemplateOutlet]=\"notFoundTemplate\"></template>\n                <span *ngIf=\"!notFoundTemplate\">{{notFoundMsg}}</span>\n            </li>\n        </ul>\n    </div>\n</div>\n";
