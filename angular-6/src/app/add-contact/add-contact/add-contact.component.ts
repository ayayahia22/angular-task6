import { Component, OnInit } from '@angular/core';
import {  NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent  {


  contactList: { name: string; number: string }[] = [];
  filteredContactList: { name: string; number: string }[] = [];
  searchString:any;
searchDiv:HTMLElement|null;
constructor() {
  this.searchDiv = document.getElementById('searchResults');
}
  add(f: NgForm) {
    if (f.valid) {
      const name = f.value.name;
      const number = f.value.number;
      this.contactList.push({ name, number });
      f.reset();
    }
     this.searchContact();
  }
onChange(){
  this.searchContact();

  }
 searchContact(){
  if(this.searchString == ''){
    this.filteredContactList = [];
  }else{
    this.filteredContactList = this.contactList.filter(contact => contact.name.toLowerCase().includes(this.searchString.toLowerCase())||
    contact.number.toLowerCase().includes(this.searchString.toLowerCase()));

  }
  }
  delete(contact: { name: string; number: string }) {
    const index = this.contactList.indexOf(contact);
    if (index !== -1) {
      this.contactList.splice(index, 1);
      this.searchContact(); // Update the filtered list after deletion
    }
  }
}









