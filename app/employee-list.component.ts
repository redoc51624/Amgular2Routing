import { Component } from '@angular/core';
@Component({
  selector: 'employee-list',
  template: `<h1>Employee List Component</h1>
                <ul class="items">
            <li *ngFor = "let employee of employees">
            <span class="badge">{{employee.id}}</span> {{employee.name}}
            </li>
            </ul>
  `
})
export class EmployeeListComponent { 
    employees = [
                    { "id":1 , "name":"kriti"},
                    { "id":2 , "name":"Shristi"}, 
                    { "id":3 , "name":"Miss"} ,
                    { "id":4 , "name":"Sukriti"} ,
                    { "id":5 , "name":"Sonia"} ,
                    { "id":6 , "name":"DEVOPS"} ,
                    { "id":7 , "name":"Webpack"}

    ]
}
