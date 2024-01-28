import { Current } from '../../@types/typeForecasts';
import { extractTimeStrFromDate } from '../../helpers/dateHelpers';

type BoxForecastByHourProps = {
  current: Current | null;
  time: string;
};

export default function BoxForecastByHour({
  current,
  time = '',
}: BoxForecastByHourProps) {
  if (current === null) {
    return null;
  }

  return (
    <div className="box-forecast-hour">
      <div className="box-forecast-hour__header">
        <img
          src={current.condition.icon}
          alt={current.condition.text}
          className="box-forecast-hour__icon"
        />
      </div>
      <div className="box-forecast-hour__body">
        <p className="box-forecast-hour__temperature">{current.temp_c} °C</p>
      </div>
      <div className="box-forecast-hour__footer">
        <p className="box-forecast-hour__hour">
          {extractTimeStrFromDate(time)}
        </p>
      </div>
    </div>
  );
}
