import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchContactRoutingModule } from './search-contact-routing.module';
import { SearchContactComponent } from './search-contact/search-contact.component';


@NgModule({
  declarations: [
    SearchContactComponent
  ],
  imports: [
    CommonModule,
    SearchContactRoutingModule
  ]
})
export class SearchContactModule { }
