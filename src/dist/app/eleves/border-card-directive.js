"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BorderCardDirective = (function () {
    function BorderCardDirective(el) {
        this.el = el;
        this.setBorder('#f5f5f5');
        this.setHeight(180);
    }
    BorderCardDirective.prototype.onMouseEnter = function () {
        this.setBorder('#009688');
    };
    BorderCardDirective.prototype.onMouseLeave = function () {
        this.setBorder('#f5f5f5');
    };
    BorderCardDirective.prototype.setBorder = function (color) {
        var border = 'solid 4px ' + color;
        this.el.nativeElement.style.border = border;
    };
    BorderCardDirective.prototype.setHeight = function (height) {
        this.el.nativeElement.style.height = height + 'px';
    };
    __decorate([
        core_1.HostListener('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BorderCardDirective.prototype, "onMouseEnter", null);
    __decorate([
        core_1.HostListener('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BorderCardDirective.prototype, "onMouseLeave", null);
    BorderCardDirective = __decorate([
        core_1.Directive({
            selector: '[eleveBorderCard]'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], BorderCardDirective);
    return BorderCardDirective;
}());
exports.BorderCardDirective = BorderCardDirective;
//# sourceMappingURL=border-card-directive.js.map