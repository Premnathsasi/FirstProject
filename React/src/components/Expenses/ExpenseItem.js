import React, {useState} from 'react';
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [amount, setTitle] = useState(props.amount);

  const clkHandler= () => {
    setTitle(100);
    console.log(amount);
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        title={props.title}
        amount={amount}
      />
      <button onClick={clkHandler}>Change Expense</button>
    </Card>
  );
}

export default ExpenseItem;
