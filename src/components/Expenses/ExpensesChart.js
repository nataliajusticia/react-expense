import Chart from '../Chart/Chart';

const ExpensesChart = ({ expenses }) => {
  const DATA_POINTS = [
    { label: 'January', value: 0 },
    { label: 'February', value: 0 },
    { label: 'March', value: 0 },
    { label: 'April', value: 0 },
    { label: 'May', value: 0 },
    { label: 'June', value: 0 },
    { label: 'July', value: 0 },
    { label: 'August', value: 0 },
    { label: 'September', value: 0 },
    { label: 'October', value: 0 },
    { label: 'November', value: 0 },
    { label: 'December', value: 0 },
  ];

  for (const expense of expenses) {
    const expenseMonth = expense.date.getMonth();
    DATA_POINTS[expenseMonth].value += expense.amount;
  }

  return (
    <div className="my-16">
      <Chart dataPoints={DATA_POINTS} />
    </div>
  );
};

export default ExpensesChart;
