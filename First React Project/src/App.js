import React, {useState, Fragment} from 'react';
import AddUser from './Components/Users/AddUser';
import ListUser from './Components/Users/ListUser';

function App() {
const [userList, setUserList] = useState([]);

const userHandler = (data) => {
  setUserList((prev) => {
    return [...prev, data]
  })

}

  return (
    <Fragment>
      <AddUser addNewUser={userHandler}/>
      <ListUser list={userList}/>
    </Fragment>
  );
}

export default App;
