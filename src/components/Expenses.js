import React from 'react'
import ExpenseItem from './ExpenseItem';
import "./Expenses.css";

const Expenses = ({expenses}) => {

    const expenseItem = (expenses) => {
        console.log(expenses);
        return expenses.map(expense => <ExpenseItem title={expense.title} date={expense.date} amount={expense.amount} key={Math.random()}/>)
    }

    return (
        <div className="expenses">
            {expenseItem(expenses)}
        </div>
    )
}

export default Expenses
