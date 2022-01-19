const ExpensesFilter = ({ selected, onSelectExpenseDate }) => {
  const yearChangeHandler = (event) => {
    onSelectExpenseDate(event.target.value);
  };

  return (
    <div className="flex items-center justify-between mb-8">
      <h2 className="font-bold text-violet-900">Filter by year</h2>

      <div>
        <select
          aria-label="Select a year"
          value={selected}
          onChange={yearChangeHandler}
          className="appearance-none block w-full border border-gray-300 rounded-lg bg-white bg-clip-padding bg-no-repeat py-1.5 px-4"
        >
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
