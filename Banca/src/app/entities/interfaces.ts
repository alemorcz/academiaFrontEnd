import { TransactionsType } from "./enums";

export interface ICustomer {
    name: string;
    lastName: string;
    customerId: string;
    email: string;
    accounts: IAccount[];
}

export interface IAccount{
    accountId: string;
    customerId: string;
    accountName: string;
    balance: number;
    transactions: ITransaction[];
}

export interface ITransaction{
    transactionId: string;
    accountId: string;
    amount: number;
    transactionDate: Date;
    transactionType: TransactionsType;
}