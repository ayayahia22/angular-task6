import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import FormsModule

import { AddContactRoutingModule } from './add-contact-routing.module';
import { AddContactComponent } from './add-contact/add-contact.component';


@NgModule({
  declarations: [
    AddContactComponent
  ],
  imports: [
    CommonModule,
    AddContactRoutingModule,FormsModule,ReactiveFormsModule
  ]
})
export class AddContactModule { }
