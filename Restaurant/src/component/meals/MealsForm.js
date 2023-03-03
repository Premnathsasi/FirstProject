import classes from './MealsForm.module.css';

const MealsForm = (props) => {
    return(
        <form className={classes.form}>
            <label>Amount:</label>
            <input type='number' min='1' max='10' defaultValue='1' />
            <button>+Add</button>
        </form>
            
    )
};

export default MealsForm;