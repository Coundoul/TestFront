import { NgModule, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';
import { SearchComponent } from './search/search.component';
import { ReserverComponent } from './reserver/reserver.component';

@NgModule({
  imports: [SharedModule, RouterModule.forChild(HOME_ROUTE)],
  declarations: [HomeComponent, SearchComponent, ReserverComponent],
})
export class HomeModule {}
