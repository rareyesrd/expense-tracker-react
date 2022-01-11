import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.items.map((items) => (
        <ExpenseItem
          key={items.id}
          title={items.title}
          amount={items.amount}
          date={items.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
