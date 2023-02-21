import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';
import ExpenseList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import  './Expenses.css'
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2023');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filtered = props.items.filter(exp =>{
    return exp.date.getFullYear().toString() === filteredYear;
  });

  

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart  expenses={filtered}/>
        <ExpenseList items={filtered}/>
      </Card>
    </div>
  );
};

export default Expenses;