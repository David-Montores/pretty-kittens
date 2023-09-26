import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { PageRoutingModule } from './page-routing.module';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent,
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    SharedModule,
    InfiniteScrollModule
  ]
})
export class PagesModule { }
