import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";

import AccountRepository from "../infrastructure/account/AccountRepository";
import CreateAccountUseCase from "../application/account/CreateAccountUseCase";

import TransactionRepository from "../infrastructure/transaction/TransactionRepository";
import CreateTransactionUseCase from "../application/transaction/CreateTransactionUseCase";

const app = express();
app.use(express.json());
dotenv.config();

app.use(cors());

const PORT = 4000;

const accountRepository = new AccountRepository();
const createAccountUseCase = new CreateAccountUseCase(accountRepository);

app.post("/v1/accounts", (req: Request, res: Response) => {
  const { name, lastName, bank, accountNumber, balance } = req.body;
  createAccountUseCase.execute(name, lastName, bank, accountNumber, balance);
  res.status(201).send({ message: "Account created successfully" });
});

const transactionRepository = new TransactionRepository();
const createTransactionUseCase = new CreateTransactionUseCase(
  transactionRepository
);

app.post("/v1/transactions", (req: Request, res: Response) => {
  let data = transactionRepository;
  const { id, amount, transactionType } = req.body;
  createTransactionUseCase.execute(id, amount, transactionType);
  if (transactionType === "WITHDRAWAL") {
    res.status(201).send({ message: "Withdrawal successfully", data });
  }
  if (transactionType === "DEPOSIT") {
    res.status(201).send({ message: "Deposit successfully", data });
  }
});

const port = process.env.PORT || PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
