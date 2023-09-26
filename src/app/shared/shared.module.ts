import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { KittensService } from '../services/kittens.service';
import { KittyCardComponent } from './kitty-card/kitty-card.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    NavbarComponent,
    KittyCardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    NavbarComponent,
    KittyCardComponent
  ],
  providers: [KittensService]
})
export class SharedModule { }
