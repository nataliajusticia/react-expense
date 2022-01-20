import { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

const ExpensesList = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState('2022');

  const selectExpenseDate = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = items.filter((expense) => {
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

      <h2 className="mb-10 text-2xl font-bold text-violet-900">
        Transaction history
      </h2>

      {filteredExpenses.length > 0
        ? filteredExpenses.map((expense) => {
            return (
              <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
              />
            );
          })
        : 'There is no expenses on this year.'}
    </>
  );
};

export default ExpensesList;
