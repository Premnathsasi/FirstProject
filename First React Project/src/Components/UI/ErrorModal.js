import Card from "./Card";
import Button from "./Button";
import './ErrorModal.css';


const ErrorModal = (props) => {
    return <div>
        <div  className="backdrop" onClick={props.onError}/>
        <Card className='modal'>
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
    </div>
};

export default ErrorModal;