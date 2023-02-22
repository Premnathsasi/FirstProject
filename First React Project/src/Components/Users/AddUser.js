import React, { useState } from "react";
import Card from "../UI/Card";
import "./AddUser.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (prop) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addNewUser = (event) => {
    event.preventDefault();
    const newUser = {
        name: enteredName,
        age:enteredAge,
        id: Math.round(Math.random()*9).toString()
    }
  
    

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
        setError({
            title: 'Invalid Input',
            msg: 'Please Enter valid Name and Age.'
        });
        return;
    };

    if (+enteredAge < 1 ) {
        setError({
            title: 'Invalid Input',
            msg: 'Please enter age > 0.'
        })
        return;
    }
    prop.addNewUser(newUser);
    setEnteredName("");
    setEnteredAge("");
  };

  const nameHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const ageHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  

const errorHandler = () =>{
    setError(null);
}

  return (
    <div>
    {error && <ErrorModal title={error.title} msg={error.msg} onError={errorHandler} />}
    <Card className="cardBox">
      <form onSubmit={addNewUser}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          onChange={nameHandler}
          value={enteredName}
        />
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          onChange={ageHandler}
          value={enteredAge}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </div>
  );
};
export default AddUser;
