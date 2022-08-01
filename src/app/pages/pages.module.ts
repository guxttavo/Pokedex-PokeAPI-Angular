import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PokeHeaderComponent } from '../shared/poke-header/poke-header.component';
import { SharedModule } from '../shared/shared.module';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './routing.module';

@NgModule({
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule
  ],
  declarations: [
    HomeComponent,
    DetailsComponent,
  ]
})
export class PagesModule { }
