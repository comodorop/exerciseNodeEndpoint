import { v4 as uuidv4 } from "uuid";

class Account {
  public readonly id: string;
  private name: string;
  private lastName: string;
  private bank: string;
  private accountNumber: number;
  private balance: number;

  constructor(
    name: string,
    lastName: string,
    bank: string,
    accountNumber: number,
    balance: number
  ) {
    this.id = uuidv4();
    this.name = name;
    this.lastName = lastName;
    this.bank = bank;
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getLastName(): string {
    return this.lastName;
  }

  getBank(): string {
    return this.bank;
  }

  getAccountNumber(): number {
    return this.accountNumber;
  }

  getBalance(): number {
    return this.balance;
  }
}

export default Account;
