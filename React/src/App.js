import ExpenseItem from "./components/ExpenseItem";

function App() {

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

  const exp =[];
  expenses.forEach(post => exp.push(
    <ExpenseItem 
        title={post.title}
        amount={post.amount}
        date={post.date}
        location={post.location}
        ></ExpenseItem>
  ))


    return (
    
      <div>
        <h2>Let's get started!</h2>
        {exp}
        
      </div>
    );
  
  
};


export default App;
