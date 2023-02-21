import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitted = (event) => {
    event.preventDefault();
    const newExpenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.expenseData(newExpenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={submitted}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleHandler}
            value={enteredTitle}
            required
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.0"
            step="0.50"
            onChange={amountHandler}
            value={enteredAmount}
            required
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2024-12-31"
            onChange={dateHandler}
            value={enteredDate}
            required
          ></input>
        </div>
        <div className="new-expense__actions">
          <button type="submit" className="addBtn">Add Expense</button>
          <button type="button" onClick={props.onCancel} className="cBtn">Cancel</button>

        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
