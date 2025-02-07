import { Component } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import Customer from '../assets/json/customer.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Banca';
  customer = Customer;
  constructor(private storage: LocalStorageService){}

  ngOnInit(): void{
    this.storage.store('customer', this.customer);

  }
}
