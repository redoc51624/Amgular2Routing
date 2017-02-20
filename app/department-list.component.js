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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var DepartmentListComponent = (function () {
    function DepartmentListComponent(router) {
        this.router = router;
        this.departments = [
            { "id": 1, "name": "Angular" },
            { "id": 2, "name": "HTML5" },
            { "id": 3, "name": "Css3" },
            { "id": 4, "name": "PostCSS" },
            { "id": 5, "name": "Jquery" },
            { "id": 6, "name": "DEVOPS" },
            { "id": 7, "name": "Webpack" }
        ];
    }
    DepartmentListComponent.prototype.onselect = function (department) {
        this.router.navigate(['./departments', department.id]);
    };
    return DepartmentListComponent;
}());
DepartmentListComponent = __decorate([
    core_1.Component({
        selector: 'department-list',
        template: "<h1>Department data list </h1>\n            <ul class=\"items\">\n            <li (click)='onSelect(department)' *ngFor = \"let department of departments\">\n            <span class=\"badge\">{{department.id}}</span> {{department.name}}\n            </li>\n            </ul>\n            "
    }),
    __metadata("design:paramtypes", [router_1.Router])
], DepartmentListComponent);
exports.DepartmentListComponent = DepartmentListComponent;
//# sourceMappingURL=department-list.component.js.map