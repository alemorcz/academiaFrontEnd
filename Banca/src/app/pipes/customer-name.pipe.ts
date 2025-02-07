import { Pipe, PipeTransform } from '@angular/core';
import { ICustomer } from '../entities/interfaces';

@Pipe({
  name: 'customerName'
})
export class CustomerNamePipe implements PipeTransform {

  transform(customer: ICustomer): string {
    return `${customer.name} ${customer.lastName}`;
  }

}
