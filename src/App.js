import Header from './components/Header';
import ExpenseItem from './components/ExpenseItem';

const App = () => {
  const expenses = [
    {
      id: 1,
      title: 'Car Insurance',
      amount: 500,
      date: new Date(2022, 0, 21),
    },
    {
      id: 2,
      title: 'Buy Milk and Bread',
      amount: 15,
      date: new Date(2022, 0, 18),
    },
    {
      id: 3,
      title: 'University Fees',
      amount: 1000,
      date: new Date(2022, 0, 5),
    },
    {
      id: 4,
      title: 'Cat Veterinary',
      amount: 400,
      date: new Date(2021, 11, 3),
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-violet-50 ">
      <main className="flex-[1_0_auto] ">
        <Header />

        <div className="container max-w-screen-md p-4 mx-auto mt-8">
          <div className="p-8 mt-8 bg-white rounded-xl">
            <h2 className="mb-10 text-2xl font-bold text-violet-900">
              Transaction history
            </h2>

            {expenses.map((expense) => {
              return (
                <ExpenseItem
                  key={expense.id}
                  title={expense.title}
                  amount={expense.amount}
                  date={expense.date}
                />
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
