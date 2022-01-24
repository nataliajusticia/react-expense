const ExpenseItem = ({ title, amount, date }) => {
  const dateDay = date.toLocaleString('en-GB', { day: '2-digit' });
  const dateMonth = date.toLocaleString('en-GB', { month: 'long' });
  const dateYear = date.getFullYear();

  return (
    <div className="flex justify-between mb-8 last:mb-0">
      <div>
        <h2 className="font-bold text-l">{title}</h2>
        <div className="mt-1 text-xs text-gray-400">
          {`${dateDay}. ${dateMonth} ${dateYear}`}
        </div>
      </div>

      <div className="text-sm font-semibold ">
        {new Intl.NumberFormat('en-GB', {
          style: 'currency',
          currency: 'EUR',
        }).format(amount)}
      </div>
    </div>
  );
};

export default ExpenseItem;
