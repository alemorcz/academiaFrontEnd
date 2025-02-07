import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerNamePipe } from './customer-name.pipe';
import { AccountsBalancePipe } from './accounts-balance.pipe';



@NgModule({
  declarations: [
    CustomerNamePipe,
    AccountsBalancePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CustomerNamePipe,
    AccountsBalancePipe
  ]
})
export class PipesModule { }