import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpenseList = (props) => {

    if (props.items.length ===0) {
        return <h2 className="expenses-list__fallback ">No expenses to display</h2>;
    }
  if (props.items.length === 1) {
     return  props.items.map((expense) => (
        [<ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />,
        <h3 className="expenses-list__fallback ">Only single Expense here. Please add more...</h3>]
      ));
      
  }   
  

  return <ul className="expenses-list">
    {
        props.items.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}

  </ul>

};

export default ExpenseList;