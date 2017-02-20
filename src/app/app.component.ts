import { Component } from '@angular/core';
import { AeroplaneService } from './services/aeroplane.service';

@Component({
  selector: 'ams-root',
  moduleId: module.id,
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [ AeroplaneService ]
})
export class AppComponent {
  title: string = 'Aeroplane Management System';
}
