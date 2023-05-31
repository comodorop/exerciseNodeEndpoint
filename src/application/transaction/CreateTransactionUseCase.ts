import Transaction from "../../domain/transaction/Transaction";
import TransactionRepository from "../../infrastructure/transaction/TransactionRepository";

class CreateTransactionUseCase {
  private transactionRepository: TransactionRepository;

  constructor(accountRepository: TransactionRepository) {
    this.transactionRepository = accountRepository;
  }

  execute(id: string, amount: number, typeTransaction: string): void {
    const transaction = new Transaction(id, amount, typeTransaction);
    this.transactionRepository.create(transaction);
  }
}

export default CreateTransactionUseCase;
