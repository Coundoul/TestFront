import { NgModule, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
  imports: [SharedModule, RouterModule.forChild([HOME_ROUTE]), MatDatepickerModule],
  declarations: [HomeComponent],
  exports: [MatDatepickerModule],
})
export class HomeModule {}
