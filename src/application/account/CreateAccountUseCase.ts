import Account from "../../domain/account/Account";
import AccountRepository from "../../infrastructure/account/AccountRepository";

class CreateAccountUseCase {
  private accountRepository: AccountRepository;

  constructor(accountRepository: AccountRepository) {
    this.accountRepository = accountRepository;
  }

  execute(
    name: string,
    lastName: string,
    bank: string,
    accountNumber: number,
    balance: number
  ): void {
    const account = new Account(name, lastName, bank, accountNumber, balance);
    this.accountRepository.create(account);
  }
}

export default CreateAccountUseCase;
