import { Component } from '@angular/core';
declare var fabric: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = fabric.version + 'Haksu (yksisarvisen suunnittelupalvelu :) )';

  constructor() {
    console.log(fabric.version);

  }
}

