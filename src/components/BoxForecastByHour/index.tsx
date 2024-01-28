import { Condition } from '../../@types/typeForecasts';
import { extractTimeStrFromDate } from '../../helpers/dateHelpers';

type BoxForecastByHourProps = {
  condition: Condition | null;
  time: string;
  temp_c: number;
};

export default function BoxForecastByHour({
  condition,
  time = '',
  temp_c = 0,
}: BoxForecastByHourProps) {
  if (condition === null) {
    return null;
  }

  return (
    <div className="box-forecast-hour">
      <div className="box-forecast-hour__header">
        <img
          src={condition.icon}
          alt={condition.text}
          className="box-forecast-hour__icon"
        />
      </div>
      <div className="box-forecast-hour__body">
        <p className="box-forecast-hour__temperature">{temp_c} °C</p>
      </div>
      <div className="box-forecast-hour__footer">
        <p className="box-forecast-hour__hour">
          {extractTimeStrFromDate(time)}
        </p>
      </div>
    </div>
  );
}
