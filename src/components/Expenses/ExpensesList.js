import { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

const ExpensesList = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState('2022');

  const selectExpenseDate = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <>
      <ExpensesFilter
        selected={filteredYear}
        onSelectExpenseDate={selectExpenseDate}
      />

      <h2 className="mb-10 text-2xl font-bold text-violet-900">
        Transaction history
      </h2>

      {items.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </>
  );
};

export default ExpensesList;
