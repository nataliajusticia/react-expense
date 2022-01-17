import ExpenseItem from './ExpenseItem';

const ExpensesList = ({ items }) => {
  return (
    <>
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
