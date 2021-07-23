import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

import "./Expenses.css";

const Expenses = ({ expenses }) => {
  const [expenseYear, setExpenseYear] = useState('2021');

  const expenseItem = (expenses) => {
    return expenses.map((expense) => (
      <ExpenseItem
        title={expense.title}
        date={expense.date}
        amount={expense.amount}
        key={Math.random().toString()}
      />
    ));
  };

  const expenseFilterYear = (expenseYearData) => {
    setExpenseYear(expenseYearData);
    console.log(expenseYearData);
  };

  return (
    <div>
      <Card className="expenses">{expenseItem(expenses)}
        <ExpensesFilter selected={expenseYear} onExpenseFilterYear={expenseFilterYear} />
      </Card>
    </div>
  );
};

export default Expenses;
