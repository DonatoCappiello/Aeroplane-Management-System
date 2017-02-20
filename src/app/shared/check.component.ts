import { Component, OnInit, Input, OnChanges, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-check',
  moduleId: module.id,
  templateUrl: 'check.component.html',
  styleUrls: ['check.component.css']
})
export class CheckComponent implements OnInit {
  @Input() serviceability: boolean;

  @Output() aeroplaneAvailability: EventEmitter<string> =
     new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.getServiceabilityIcon();  
  }

  public getServiceabilityIcon(): string {
    let icon = 'glyphicon glyphicon-remove';

    if (this.serviceability) {
       icon = 'glyphicon glyphicon-ok'; 
    }

    return icon;
  }

  onClick(): void {
    if (this.serviceability) {
      this.aeroplaneAvailability.emit('Aeroplane is not available'); 
    } else {
      this.aeroplaneAvailability.emit('Aeroplane is available'); 
    }
       
  }

}
