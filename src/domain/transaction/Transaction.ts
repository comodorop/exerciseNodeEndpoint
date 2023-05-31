class Transaction {
  private id: string;
  private amount: number;
  private transactionType: string;

  constructor(id: string, amount: number, transactionType: string) {
    this.id = id;
    this.amount = amount;
    this.transactionType = transactionType;
  }

  getId(): string {
    return this.id;
  }

  getAmount(): number {
    return this.amount;
  }

  getTransactionType(): string {
    return this.transactionType;
  }
}

export default Transaction;
