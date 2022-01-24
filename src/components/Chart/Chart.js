import ChartBar from './ChartBar';

const Chart = ({ dataPoints }) => {
  const dataPointsValues = dataPoints.map((dataPoint) => dataPoint.value);
  const maxValue = Math.max(...dataPointsValues);

  return (
    <div className="flex justify-between">
      {dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label.toLowerCase()}
            label={dataPoint.label}
            value={dataPoint.value}
            maxValue={maxValue}
          />
        );
      })}
    </div>
  );
};

export default Chart;
