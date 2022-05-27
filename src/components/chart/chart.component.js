import ChartBar from "../chart-bar/chart-bar.component";

import "./chart.styles.css";

const Chart = (props) => {
  const value = props.data.map((data) => data.value);
  const totalMax = Math.max(...value);

  return (
    <div className="chart">
      {props.data.map((data) => (
        <ChartBar
          key={data.label}
          value={data.value}
          maxValue={totalMax}
          label={data.label}
        />
      ))}
    </div>
  );
};

export default Chart;
