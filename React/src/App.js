import React from 'react';

import ExpenseItem from "./components/Expenses/ExpenseItem";
import Card from "./components/UI/Card";

const App = () => {

  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location: 'Chennai'
    },
    { id: 'e2', 
    title: 'New TV', 
    amount: 799.49, 
    date: new Date(2021, 2, 12),
    location:'Bangalore'
  },
    
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location: 'Vellore'
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
      location: 'Ranipet'
    },
  ];

 


    return (
    
      <div>
        <h2>Let's get started!</h2>
        <Card className='expenses'>{
           expenses.map(post => 
             <ExpenseItem 
                 title={post.title}
                 amount={post.amount}
                 date={post.date}
                 location={post.location}
                 ></ExpenseItem>
           )
        }</Card>
        
        
      </div>
    );
  
  
};


export default App;
