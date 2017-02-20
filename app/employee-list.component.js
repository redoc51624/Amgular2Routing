"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var EmployeeListComponent = (function () {
    function EmployeeListComponent() {
        this.employees = [
            { "id": 1, "name": "kriti" },
            { "id": 2, "name": "Shristi" },
            { "id": 3, "name": "Miss" },
            { "id": 4, "name": "Sukriti" },
            { "id": 5, "name": "Sonia" },
            { "id": 6, "name": "DEVOPS" },
            { "id": 7, "name": "Webpack" }
        ];
    }
    return EmployeeListComponent;
}());
EmployeeListComponent = __decorate([
    core_1.Component({
        selector: 'employee-list',
        template: "<h1>Employee List Component</h1>\n                <ul class=\"items\">\n            <li *ngFor = \"let employee of employees\">\n            <span class=\"badge\">{{employee.id}}</span> {{employee.name}}\n            </li>\n            </ul>\n  "
    })
], EmployeeListComponent);
exports.EmployeeListComponent = EmployeeListComponent;
//# sourceMappingURL=employee-list.component.js.map