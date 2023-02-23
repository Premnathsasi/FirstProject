import React from "react";
import ReactDom from "react-dom";
import Card from "./Card";
import Button from "./Button";
import "./ErrorModal.css";

const BackDrop = (props) => {
  return <div className="backdrop" onClick={props.onError} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className="modal">
      <header className="header">
        <h2>{props.title}</h2>
      </header>
      <div className="content">
        <p>{props.msg}</p>
      </div>
      <footer className="actions">
        <Button onClick={props.onError}>Cancel</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <BackDrop onError={props.onError} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <ModalOverlay
          title={props.title}
          msg={props.msg}
          onError={props.onError}
        />,
        document.getElementById('overlay-root')
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
