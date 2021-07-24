import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesChart from './ExpensesChart';


import "./Expenses.css";

const Expenses = ({ expenses }) => {
  const [expenseYear, setExpenseYear] = useState("2021");

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === expenseYear;
  });

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
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList filteredExpenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
