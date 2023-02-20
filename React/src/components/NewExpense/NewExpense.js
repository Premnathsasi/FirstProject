import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [editing, setEditing] = useState(true);

  const expenseDataHandler = (data) => {
    const NewDataExpense = {
      ...data,
      id: Math.floor(Math.random() * 9).toString(),
    };
    props.addExpense(NewDataExpense);
    setEditing(true);
  };

  const editingHandler = () => {
    setEditing(false);
  };
  const CancelEditing = () => {
    setEditing(true)
  }

  return (
    <div className="new-expense">
      {editing && <button onClick={editingHandler}>Add New Expenses</button>}
      {!editing && <ExpenseForm expenseData={expenseDataHandler} onCancel={CancelEditing} />}
    </div>
  );
};

export default NewExpense;
