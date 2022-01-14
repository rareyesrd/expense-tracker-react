import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const chartValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximun = Math.max(...chartValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximun}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
