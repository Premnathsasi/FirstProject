import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const dummy_Expense = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2",
   title: "New TV",
    amount: 799.49,
     date: new Date(2021, 2, 12) },

  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e5",
    title: "Wooden Sofa",
    amount: 452.3,
    date: new Date(2022, 3, 14),
  },
  { id: "e6",
   title: "New Fridge",
    amount: 799.49,
     date: new Date(2022, 6, 12) }
];

const App = () => {
  const [expenses, setExpense] = useState(dummy_Expense);

  const addExpenseHandler = (expense) => {
    setExpense((prevExp) => {
      return [expense, ...prevExp];
    });
  };
  

  return (
    <div>
      <NewExpense addExpense={addExpenseHandler} />
      <Expenses items={expenses}/>
    </div>
  );
};

export default App;
