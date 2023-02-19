import React, {useState} from "react";
import './ExpenseForm.css';

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount,setEnteredAmount] = useState('');
    const [enteredDate,setEnteredDate] = useState('');

    const titleHandler = (event) => {
        setEnteredTitle(event.target.value);
    }
const amountHandler =(event) => {
    setEnteredAmount(event.target.value)
};

const dateHandler= (event) => {
    setEnteredDate(event.target.value);
}

const submitted =(event) =>{
    event.preventDefault();
    const newExpenseData= {
        title:enteredTitle,
        amont:enteredAmount,
        date:new Date(enteredDate)
    };
    console.log(newExpenseData);


};
    return (
        <form onSubmit={submitted}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' onChange={titleHandler}></input>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' min="0.0" step="0.50" onChange={amountHandler}></input>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' min="2020-01-01" max="2024-12-31" onChange={dateHandler}></input>
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>

            </div>
        </form>
    )
}

export default ExpenseForm;