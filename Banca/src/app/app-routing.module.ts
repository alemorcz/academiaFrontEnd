import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsListComponent } from './accounts-list/accounts-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/accounts-list', pathMatch: 'full' },
  { path: 'accounts-list', component: AccountsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
