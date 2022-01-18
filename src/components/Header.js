const Header = () => {
  return (
    <header className="p-6 bg-white shadow-sm shadow-violet-200/50">
      <a
        href="/"
        className="flex font-bold tracking-wider uppercase text-md text-violet-900"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="12" y1="1" x2="12" y2="23"></line>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>

        <span className="ml-1">Expense.ly</span>
      </a>
    </header>
  );
};

export default Header;
