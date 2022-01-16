const ExpenseItem = ({ title, amount, date }) => {
  const dateDay = date.toLocaleString('de-CH', { day: '2-digit' });
  const dateMonth = date.toLocaleString('de-CH', { month: 'long' });
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
        {new Intl.NumberFormat('de-CH', {
          style: 'currency',
          currency: 'CHF',
        }).format(amount)}
      </div>
    </div>
  );
};

export default ExpenseItem;
