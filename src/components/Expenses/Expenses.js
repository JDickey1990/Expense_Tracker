import React from 'react'
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import "./Expenses.css";

const Expenses = ({expenses}) => {

    const expenseItem = (expenses) => {
        return expenses.map((expense, index) => <ExpenseItem title={expense.title} date={expense.date} amount={expense.amount} key={index}/>)
    }

    return (
        <Card className="expenses">
            {expenseItem(expenses)}
        </Card>
    )
}

export default Expenses
