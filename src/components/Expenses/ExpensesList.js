import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = ({ filteredExpenses }) => {
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

  if (filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;
  }

  return <ul className="expenses-list">{expenseItem(filteredExpenses)}</ul>;
};

export default ExpensesList;
