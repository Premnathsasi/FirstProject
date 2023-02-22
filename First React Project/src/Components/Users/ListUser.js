
import Card from "../UI/Card";
import './ListUser.css';

const ListUser = (props) => {
  return (
    <Card className='users'>
    <ul>
      {props.list.map((user) => (
        <li key={user.id}>
          {user.name} ({user.age} years old)
        </li>
      ))}
    </ul>
    </Card>
  );
};

export default ListUser;
