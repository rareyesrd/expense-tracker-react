import "./Chart.css";
import ChartBar from "./ChartBar";
const Chart = (props) => {
  return (
    <div className="chart">
      {props.dataPoints.map((datapoint) => {
        <ChartBar
          key={datapoint.label}
          value={datapoint.value}
          maxvalue={null}
          label={datapoint.label}
        />;
      })}
    </div>
  );
};

export default Chart;
