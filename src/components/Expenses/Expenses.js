import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

import "./Expenses.css";

const Expenses = ({ expenses }) => {
  const [expenseYear, setExpenseYear] = useState("All");

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === expenseYear;
  });

  const expenseItem = (expenses) => {
    return expenses.map((expense) => (
      <ExpenseItem
        title={expense.title}
        date={expense.date}
        amount={expense.amount}
        key={expense.id}
      />
    ));
  };

  const expenseFilterYear = (expenseYearData) => {
    setExpenseYear(expenseYearData);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={expenseYear}
          onExpenseFilterYear={expenseFilterYear}
        />
        {expenseItem(filteredExpenses)}
      </Card>
    </div>
  );
};

export default Expenses;
