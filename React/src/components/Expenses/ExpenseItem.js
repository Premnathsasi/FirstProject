import React from 'react';
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {

  const clkHandler= () => {
     const el= document.querySelector('.expense-item').remove();
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        location={props.location}
        title={props.title}
        amount={props.amount}
      />
      <button onClick={clkHandler}>Delete Expense</button>
    </Card>
  );
}

export default ExpenseItem;
