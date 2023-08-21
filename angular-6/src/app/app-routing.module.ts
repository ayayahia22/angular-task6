import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add-contact' },


  {
    path: 'add-contact',
    loadChildren: () => import('./add-contact/add-contact.module').then(m => m.AddContactModule)
  },
  {
    path: 'search-contact',
    loadChildren: () => import('./search-contact/search-contact.module').then(m => m.SearchContactModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
