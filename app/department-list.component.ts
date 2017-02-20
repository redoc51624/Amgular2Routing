import { Component } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'department-list',
  template: `<h1>Department data list </h1>
            <ul class="items">
            <li (click)='onSelect(department)' *ngFor = "let department of departments">
            <span class="badge">{{department.id}}</span> {{department.name}}
            </li>
            </ul>
            `
})
export class DepartmentListComponent { 
constructor(private router:Router){}
    departments = [
                    { "id":1 , "name":"Angular"},
                    { "id":2 , "name":"HTML5"}, 
                    { "id":3 , "name":"Css3"} ,
                    { "id":4 , "name":"PostCSS"} ,
                    { "id":5 , "name":"Jquery"} ,
                    { "id":6 , "name":"DEVOPS"} ,
                    { "id":7 , "name":"Webpack"}
                     ]
    onselect(department){
        this.router.navigate(['./departments', department.id])
    }
}
