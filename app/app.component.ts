import { Component } from '@angular/core';
import { ChildComponent } from './child';

@Component({
  selector: 'my-app',
  template: `
            <h1>My First Angular 2 App</h1>
            <child></child>
            `,
  directives: [ChildComponent]
})

export class AppComponent { }
