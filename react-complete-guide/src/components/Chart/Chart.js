import ChartBar from './ChartBar';
import './Chart.css';

function Chart(props) {
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          amount={dataPoint.amount}
          label={dataPoint.label}
          maxValue={null}
        />
      ))}
    </div>
  );
}

export default Chart;
