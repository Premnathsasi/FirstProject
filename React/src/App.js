import React, {useState} from 'react';

import ExpenseItem from "./components/Expenses/ExpenseItem";
import NewExpense from './components/NewExpense/NewExpense';
import Card from "./components/UI/Card";

const dummy_Expense = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', 
  title: 'New TV', 
  amount: 799.49, 
  date: new Date(2021, 2, 12),
},
  
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
 const [expenses,setExpense] = useState(dummy_Expense);

  const addExpenseHandler = (expense) => {
    setExpense((prevExp) => {
      return [expense, ...prevExp]
    })
  }



    return (
    
      <div>
        <NewExpense addExpense={addExpenseHandler} />
        <Card className='expenses'>{
           expenses.map(post => 
             <ExpenseItem 
                 title={post.title}
                 amount={post.amount}
                 date={post.date}
                 ></ExpenseItem>
           )
        }</Card>
        
        
      </div>
    );
  
  
};


export default App;
