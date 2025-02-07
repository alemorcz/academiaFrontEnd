import { Component, Input } from '@angular/core';
import { IAccount } from 'src/app/entities/interfaces';

@Component({
  selector: 'account-card',
  templateUrl: './account-card.component.html',
  styleUrls: ['./account-card.component.scss']
})
export class AccountCardComponent {
  @Input('account')
  account?: IAccount;

}
