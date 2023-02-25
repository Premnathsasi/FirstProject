import React, { useState, useReducer, useContext } from "react";

import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import Input from "../UI/input/Input";
import AuthContext from "../../store/auth-context";
import classes from "./Login.module.css";
import classess from "../UI/input/Input.module.css";


const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
};

const clgNameReducer = (state, action) => {
  if (action.type === "CLG_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 8 };
  }
  if (action.type === "CLG_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 8 };
  }
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_PW") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === "PW_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  // const [enteredClgName, setClgName] = useState("");
  // const [clgNameIsvalid, setClgNameIsvalid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchMail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const [clgNameState, dispatchClgName] = useReducer(clgNameReducer, {
    value: "",
    isValid: null,
  });

  const authCtx = useContext(AuthContext);

  // useEffect(() => {
  //   const identifier = setTimeout(() => {
  //     console.log('checing')
  //     setFormIsValid(
  //       enteredEmail.includes('@') && enteredPassword.trim().length > 6 && enteredClgName.trim().length > 8
  //     );
  //   },1000);

  //   return () => {
  //     console.log('clean')
  //     clearTimeout(identifier)
  //   }

  // }, [enteredEmail, enteredPassword, enteredClgName])

  const emailChangeHandler = (event) => {
    dispatchMail({ type: "USER_INPUT", val: event.target.value });

    setFormIsValid(
      event.target.value.includes("@") &&
        passwordState.isValid &&
        clgNameState.isValid
    );
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_PW", val: event.target.value });

    setFormIsValid(
      emailState.isValid &&
        event.target.value.trim().length > 6 &&
        clgNameState.isValid
    );
  };

  const clgNameHandler = (event) => {
    dispatchClgName({ type: "CLG_INPUT", val: event.target.value });

    setFormIsValid(
      emailState.isValid &&
        passwordState.isValid &&
        event.target.value.trim().length > 8
    );
  };

  const validateClgHandler = () => {
    dispatchClgName({ type: "CLG_BLUR" });
  };

  const validateEmailHandler = () => {
    dispatchMail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "PW_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    authCtx.onLogin(emailState.value, passwordState.value, clgNameState.value);
  };

  return (
    <Card className={classess.login}>
      <form onSubmit={submitHandler}>
        <Input
          id="email"
          label="E-Mail"
          type="email"
          isValid={emailState.isValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
         <Input
          id="password"
          label="Password"
          type="password"
          isValid={passwordState.isValid}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
         <Input
          id="clgName"
          label="College Name"
          type="text"
          isValid={clgNameState.isValid}
          value={clgNameState.value}
          onChange={clgNameHandler}
          onBlur={validateClgHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
