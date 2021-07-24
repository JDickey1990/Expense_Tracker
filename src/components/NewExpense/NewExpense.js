import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ onAddExpense }) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
    setIsEditing(!isEditing);
  };

  const startedEditingHandler = event => {
    setIsEditing(!isEditing);
  };

  let newExpenseContent= <button onClick={startedEditingHandler}>Add New Expense</button>

  if (isEditing) {
    newExpenseContent = <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}  onCancel={startedEditingHandler}/>;
  }

  return (
    <div className="new-expense">
      {newExpenseContent}
    </div>
  );
};

export default NewExpense;
