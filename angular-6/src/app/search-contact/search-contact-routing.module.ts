import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchContactComponent } from './search-contact/search-contact.component';

const routes: Routes = [
  {
    path: '',component:SearchContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchContactRoutingModule { }
