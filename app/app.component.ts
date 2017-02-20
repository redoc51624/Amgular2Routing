import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `<h1>Angular Routing </h1>
              <nav>
              <a routerLink = "/departments" routerLinkActive="active">Deparment</a>
              <a routerLink = "/employee" routerLinkActive="active">Employee</a>
              </nav>
              <router-outlet></router-outlet>
              `
})
export class AppComponent { }
