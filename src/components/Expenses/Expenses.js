import { useState } from 'react';

import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import ExpensesList from './ExpensesList';

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState('2022');

  const selectExpenseDate = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  filteredExpenses.sort(function (a, b) {
    return new Date(b.date) - new Date(a.date);
  });

  return (
    <>
      <ExpensesFilter
        selected={filteredYear}
        onSelectExpenseDate={selectExpenseDate}
      />

      <ExpensesChart expenses={filteredExpenses} />

      <ExpensesList expenses={filteredExpenses} />
    </>
  );
};

export default Expenses;
