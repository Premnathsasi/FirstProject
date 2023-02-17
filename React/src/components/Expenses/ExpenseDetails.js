import React from 'react';

const ExpenseDetails = (props) => {
  return (
    <div className="expense-item__description">
      <div className="location"> {props.location}</div>
      <h2>{props.title}</h2>
      <div className="expense-item__price">${props.amount}</div>
    </div>
  );
}

export default ExpenseDetails;
