import React, { useState } from "react";
import "./NewExpensesForm.css";

const NewExpensesForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [showForm, setShowForm] = useState(false);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const toggleForm = () => {
    setEnteredTitle("");
    setEnteredAmount(0);
    setEnteredDate("");
    setShowForm(!showForm);
  };

  const cancelNewExpense = () => {
    toggleForm();
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveNewData(expenseData);
    toggleForm();
  };

  let formField = (
    <button type="submit" onClick={toggleForm}>
      Add expense
    </button>
  );

  if (showForm) {
    formField = (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={cancelNewExpense}>
            Cancel
          </button>
          <button type="submit">Add expense</button>
        </div>
      </form>
    );
  }

  return <div>{formField}</div>;
};

export default NewExpensesForm;
