import ExpenseItem from './ExpenseItem';

const ExpensesList = ({ expenses }) => {
  return (
    <>
      <h2 className="mb-10 text-2xl font-bold text-violet-900">
        Transaction history
      </h2>

      {expenses.length > 0
        ? expenses.map((expense) => {
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
