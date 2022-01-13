import "./NewExpenses.css";
import NewExpensesForm from "./NewExpensesForm";

const NewExpenses = (props) => {
  const saveNewDataEntered = (newExprenseEntered) => {
    const expenses = {
      ...newExprenseEntered,
      id: Math.random().toString(),
    };
    props.onAddNewExpense(expenses);
  };

  return (
    <div className="new-expense">
      <NewExpensesForm onSaveNewData={saveNewDataEntered} />
    </div>
  );
};

export default NewExpenses;
