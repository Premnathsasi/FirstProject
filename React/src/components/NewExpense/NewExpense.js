import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const expenseDataHandler= (data) => {
        const NewDataExpense= {
            ...data,
            id: Math.floor(Math.random() *9).toString()
        };
        props.addExpense(NewDataExpense);

    }

    return (
        <div className="new-expense">
            <ExpenseForm expenseData={expenseDataHandler} />
        </div>
    )
}

export default NewExpense;