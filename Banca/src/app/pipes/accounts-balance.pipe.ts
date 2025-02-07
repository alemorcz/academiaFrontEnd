import { Pipe, PipeTransform } from '@angular/core';
import { IAccount } from '../entities/interfaces';

@Pipe({
  name: 'accountsBalance'
})
export class AccountsBalancePipe implements PipeTransform {

  transform(accounts: IAccount[]): number {
    return accounts.reduce((sum, account) => sum + account.balance, 0);
  }

}
