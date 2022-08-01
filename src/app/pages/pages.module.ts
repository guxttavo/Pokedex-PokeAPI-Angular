import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './routing.module';
import { DetailsComponent } from './details/details.component';

@NgModule({
  imports: [
    CommonModule,
    RoutingModule
  ],
  declarations: [
    HomeComponent,
    DetailsComponent
  ]
})
export class PagesModule { }
