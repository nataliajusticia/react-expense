import { useState } from 'react';

import Header from './components/Header';
import Layout from './components/Layout';
import ExpensesList from './components/Expenses/ExpensesList';
import ExpenseForm from './components/Expenses/ExpenseForm';

const DUMMY_EXPENSES = [
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

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const saveExpenseDataHandler = (newExpenseData) => {
    setExpenses((prevExpenses) => {
      return [newExpenseData, ...prevExpenses];
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-violet-50">
      <Header />

      <main className="flex-[1_0_auto] pb-8">
        <Layout>
          <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </Layout>

        <Layout>
          <ExpensesList items={expenses} />
        </Layout>
      </main>
    </div>
  );
};

export default App;
