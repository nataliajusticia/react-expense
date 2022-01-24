const ChartBar = ({ label, value, maxValue }) => {
  let barFillHeight = '0%';

  if (maxValue > 0) {
    barFillHeight = Math.round((value / maxValue) * 100) + '%';
  }

  return (
    <div className="relative">
      <div className="relative w-6 h-48 overflow-hidden border-2 border-violet-300 bg-violet-50 rounded-xl">
        <div
          className="absolute bottom-0 w-full bg-violet-300 "
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <span className="absolute left-0 right-0 text-xs -rotate-90 text-violet-900 bottom-4">
        {label}
      </span>
    </div>
  );
};

export default ChartBar;
