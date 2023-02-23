import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import "./AddUser.css";
import Button from "../UI/Button";
import Wrapper from "../Helpers/Wrapper";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (prop) => {
  const nameInput = useRef();
  const ageInput = useRef();
  const clgInput = useRef();
  const [error, setError] = useState();

  const addNewUser = (event) => {
    event.preventDefault();
    const newUser = {
      name: nameInput.current.value,
      age: ageInput.current.value,
      clg: clgInput.current.value,
      id: Math.round(Math.random() * 9).toString(),
    };

    if (newUser.name.trim().length === 0 || newUser.age.trim().length === 0) {
      setError({
        title: "Invalid Input",
        msg: "Please Enter valid Name and Age.",
      });
      return;
    }

    if (+newUser.age < 1) {
      setError({
        title: "Invalid Input",
        msg: "Please enter age > 0.",
      });
      return;
    }
    prop.addNewUser(newUser);
    nameInput.current.value='';
    ageInput.current.value='';
    clgInput.current.value='';
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          msg={error.msg}
          onError={errorHandler}
        />
      )}
      <Card className="cardBox">
        <form onSubmit={addNewUser}>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" ref={nameInput} />
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" ref={ageInput} />
          <label htmlFor="clg">College Name:</label>
          <input type="text" id="clg" ref={clgInput} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};
export default AddUser;
