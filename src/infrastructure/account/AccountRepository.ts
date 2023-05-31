import Account from "../../domain/account/Account";

class AccountRepository {
  private accounts: Account[];

  constructor() {
    this.accounts = [];
  }

  getAll() {
    return this.accounts;
  }

  create(account: Account): void {
    this.accounts.push(account);
  }
}

export default AccountRepository;
