const ExpenseForm = () => {
  return (
    <>
      <h2 className="mb-10 text-2xl font-bold text-violet-900">New Expense</h2>

      <form>
        <label for="title" className="block my-2 text-sm font-bold">
          Title
        </label>
        <input
          type="text"
          id="title"
          className="block w-full border border-gray-300 rounded-lg py-1.5 px-4"
        />

        <label for="amount" className="block my-2 text-sm font-bold">
          Amount
        </label>
        <input
          type="number"
          id="amount"
          min="0.01"
          step="0.01"
          className="block w-full border border-gray-300 rounded-lg py-1.5 px-4"
        />

        <label for="date" className="block my-2 text-sm font-bold">
          Date
        </label>
        <input
          type="date"
          id="date"
          min="2019-01-01"
          max="2022-12-31"
          className="block w-full border border-gray-300 rounded-lg py-1.5 px-4"
        />

        <button
          type="submit"
          className="block px-4 py-2 mt-4 text-sm font-medium text-white transition-colors delay-150 border border-transparent rounded-md shadow-sm bg-violet-900 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
        >
          Add Expense
        </button>
      </form>
    </>
  );
};

export default ExpenseForm;
