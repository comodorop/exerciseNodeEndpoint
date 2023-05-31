import Transaction from "../../domain/transaction/Transaction";

class TransactionRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  create(transaction: Transaction): void {
    this.transactions.push(transaction);
  }

  update(transaction: Transaction): void {
    console.log("create", transaction);
  }
}

export default TransactionRepository;
