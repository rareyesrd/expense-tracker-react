import React, { useState } from "react";

import ExpenseFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filterYearSelected, setFilterYearSelected] = useState("2019");

  const filterSelectionHandler = (selectedField) => {
    setFilterYearSelected(selectedField);
  };

  const filterExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filterYearSelected
  );

  return (
    <Card className="expenses">
      <ExpenseFilter
        selectedYear={filterYearSelected}
        onSelectedFilter={filterSelectionHandler}
      />
      <ExpensesChart expenses={filterExpenses} />
      <ExpensesList items={filterExpenses} />
    </Card>
  );
};

export default Expenses;
