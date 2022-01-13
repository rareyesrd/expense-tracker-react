import React, { useState } from "react";

import ExpenseFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";
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
      <ExpensesList items={expenses} />
    </Card>
  );
};

export default Expenses;
