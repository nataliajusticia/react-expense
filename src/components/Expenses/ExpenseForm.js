import { useState } from 'react';

const ExpenseForm = ({ onSaveExpenseData }) => {
  const [expenseTitle, setExpenseTitle] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [expenseDate, setExpenseDate] = useState('');

  const titleChangeHandler = (event) => {
    setExpenseTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setExpenseAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setExpenseDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: expenseTitle,
      amount: expenseAmount,
      date: new Date(expenseDate),
    };

    onSaveExpenseData(expenseData);

    setExpenseTitle('');
    setExpenseAmount('');
    setExpenseDate('');
  };

  return (
    <>
      <h2 className="mb-10 text-2xl font-bold text-violet-900">New Expense</h2>

      <form onSubmit={submitHandler}>
        <label htmlFor="title" className="block my-2 text-sm font-bold">
          Title
          <input
            type="text"
            id="title"
            value={expenseTitle}
            onChange={titleChangeHandler}
            className="block w-full border border-gray-300 rounded-lg py-1.5 px-4"
          />
        </label>

        <label htmlFor="amount" className="block my-2 text-sm font-bold">
          Amount
          <input
            type="number"
            id="amount"
            min="0.01"
            step="0.01"
            value={expenseAmount}
            onChange={amountChangeHandler}
            className="block w-full border border-gray-300 rounded-lg py-1.5 px-4"
          />
        </label>

        <label htmlFor="date" className="block my-2 text-sm font-bold">
          Date
          <input
            type="date"
            id="date"
            min="2019-01-01"
            max="2022-12-31"
            value={expenseDate}
            onChange={dateChangeHandler}
            className="block w-full border border-gray-300 rounded-lg py-1.5 px-4"
          />
        </label>

        <button
          type="submit"
          className="block px-4 py-2 mt-4 text-sm font-medium text-white transition-colors delay-150 border border-transparent rounded-md shadow-sm bg-violet-900 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
        >
          Add Expense
        </button>
      </form>
    </>
  );
};

export default ExpenseForm;
