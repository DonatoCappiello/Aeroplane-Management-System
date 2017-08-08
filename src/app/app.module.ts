import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AeroplanesFleetComponent } from './aeroplanes-fleet/aeroplanes-fleet.component';
import {AeroplaneFilterPipe} from './aeroplanes-fleet/aeroplane-filter.pipe';
import { CheckComponent } from './shared/check.component';
import { HomeComponent } from './home/home.component';
import { PrimeNgComponent } from './prime-ng/prime-ng.component';
import {AccordionModule as AccordionModuleNG} from 'primeng/primeng';
import {SharedModule as SharedModuleNG} from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    AeroplanesFleetComponent,
    AeroplaneFilterPipe,
    CheckComponent,
    HomeComponent,
    PrimeNgComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AccordionModuleNG,
    SharedModuleNG,
    RouterModule.forRoot([
      { path: 'aeroplanes', component: AeroplanesFleetComponent },
      { path: 'home', component: HomeComponent },
      { path: 'prime', component: PrimeNgComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: '**', redirectTo: 'home', pathMatch: 'full'}
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }