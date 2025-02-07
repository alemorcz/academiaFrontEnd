import { Component } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { ICustomer } from '../entities/interfaces';

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.scss']
})
export class AccountsListComponent {

  customer: ICustomer = this.storage.retrieve('customer');

  constructor(private storage: LocalStorageService) { }
}