import React, { useState } from "react";

import ExpenseFilter from "../ExpensesFilter/ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [filterYearSelected, setFilterYearSelected] = useState("2019");
  const [expenses, setExpenses] = useState(props.items);

  const filterSelectionHandler = (selectedField) => {
    setFilterYearSelected(selectedField);
    const filterExpenses = props.items.filter(
      (expense) => expense.date.getFullYear().toString() === selectedField
    );
    setExpenses(filterExpenses);
  };

  return (
    <Card className="expenses">
      <ExpenseFilter
        selectedYear={filterYearSelected}
        onSelectedFilter={filterSelectionHandler}
      />
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
