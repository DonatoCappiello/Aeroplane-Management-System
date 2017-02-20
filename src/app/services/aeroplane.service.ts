import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { IAeroplane } from '../aeroplanes-fleet/aeroplane';

@Injectable()
export class AeroplaneService {

  private _aeroplaneUrl = 'api/aeroplanes/aeroplanes.json';

  constructor(private _http: Http) { }

  /*public getAeroplanes(): IAeroplane[] {
    return [{
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
            }];
  }*/

  public getAeroplanes(): Observable<IAeroplane[]> {
    return this._http.get(this._aeroplaneUrl)
            .map((response: Response) => <IAeroplane[]>response.json())
            .do(data => console.log('All aeroplanes: ' + JSON.stringify(data)))
            .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server Error');
  }



}
