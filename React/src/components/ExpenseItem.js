import './ExpenseItem.css';

function ExpenseItem() {
    const expenseDate = new Date(2023,0,10);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 245.50
    const LocationOfExpense = 'Chennai'


    return (
        <div className='expense-item'>
            <div>{expenseDate.toDateString()}</div>
            <div> {LocationOfExpense}</div>
            <div className='expense-item__description'>
                <h2>{expenseTitle}</h2>
                <div className='expense-item__price'>${expenseAmount}</div>
            </div>

        </div>
    )
}

export default ExpenseItem;