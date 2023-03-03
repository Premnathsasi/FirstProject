import Card from "../UI/Card";
import classes from "./MealsList.module.css";

const list = [
  {
    id: "l1",
    name: "Chow Mein",
    description: "Fried noodles consist of chicken.",
    price: 45.7,
  },
  {
    id: "l2",
    name: "Dumplings",
    description: "East Asian cuisines special",
    price: 35.1,
  },
  {
    id: "l3",
    name: "Kung Pao Chicken",
    description: " classic Chinese dish",
    price: 23.6,
  },
  {
    id: "l4",
    name: "Ma Po Tofu",
    description: "A german specialty!",
    price: 27.5,
  },
];

const MealsList = (props) => {
  const MealsItem = list.map((meal) => {
    return (
      <li className={classes.meal}>
        <h3>{meal.name}</h3>
        <div className={classes.description}>{meal.description}</div>
        <div className={classes.price}>${meal.price}</div>
      </li>
    );
  });

  return (
    <div className={classes.meals}>
      <Card>
        <ul>{MealsItem}</ul>
      </Card>
    </div>
  );
};

export default MealsList;
