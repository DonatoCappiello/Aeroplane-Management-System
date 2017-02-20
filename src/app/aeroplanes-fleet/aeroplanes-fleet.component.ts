import { Component, OnInit } from '@angular/core';
import { IAeroplane} from './aeroplane';
import { AeroplaneService } from '../services/aeroplane.service'

@Component({
  selector: 'ams-fleet',
  moduleId: module.id,
  templateUrl: 'aeroplanes-fleet.component.html',
  styleUrls: ['aeroplanes-fleet.component.css']
})
export class AeroplanesFleetComponent implements OnInit {

  private pageTitle: string = "Aeroplanes Fleet";

  private imageWidth: number = 150;

  private imageMargins: number = 2;

  private showImage: boolean = false;

  public aeroplaneListFilter: string = "";

  errorMessage: string;

  /*private aeroplanes: IAeroplane[] = 
  [{
    "registration_no": "GCENV",
    "type": "Q450",
    "aircraft_hours": 450.10,
    "hourly_rate": 35.00,
    "serviceability": true,
    "imageUrl": "./assets/images/aeroplanes/aeroplane1.jpg"
  }, {
    "registration_no": "GHAEF",
    "type": "EV97",
    "aircraft_hours": 1049.10,
    "hourly_rate": 35.00,
    "serviceability": false,
    "imageUrl": "./assets/images/aeroplanes/aeroplane2.jpg"
  }, {
    "registration_no": "GHMCA",
    "type": "EV97",
    "aircraft_hours": 22.50,
    "hourly_rate": 35.00,
    "serviceability": false,
    "imageUrl": "./assets/images/aeroplanes/aeroplane3.jpg"
  }, {
    "registration_no": "GHMCD",
    "type": "C42",
    "aircraft_hours": 680.50,
    "hourly_rate": 35.00,
    "serviceability": true,
    "imageUrl": "./assets/images/aeroplanes/aeroplane4.jpg"
  }, {
    "registration_no": "GHMCE",
    "type": "C42",
    "aircraft_hours": 524.20,
    "hourly_rate": 35.00,
    "serviceability": false,
    "imageUrl": "./assets/images/aeroplanes/aeroplane5.jpg"
  }];*/

  private aeroplanes: IAeroplane[];

  constructor(private _aeroplaneService: AeroplaneService) { }

  ngOnInit() {
    console.log('aeroplane-fleet.component init');

    //this.aeroplanes = this._aeroplaneService.getAeroplanes();

    this._aeroplaneService.getAeroplanes()
      .subscribe(aeroplanes => this.aeroplanes = aeroplanes, 
                  error => this.errorMessage = <any>error);
  }

  public getPageTitle(): string {
    return this.pageTitle;
  }

  public getAeroplanes(): any[] {
    return this.aeroplanes;
  }

  public getImageWidth(): number {
    return this.imageWidth;
  }

  public getImageMargins(): number {
    return this.imageMargins;
  }

  public toggleImage(): void {
    this.showImage = !this.showImage;
  }

  public imageVisibility(): boolean {
    return this.showImage;
  }

  public onServiceabilityClicked($message): void {
    alert($message);
  }
}
