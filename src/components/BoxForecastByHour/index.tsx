import { Hour } from '../../@types/typeForecasts';
import { extractTimeStrFromDate } from '../../helpers/dateHelpers';

type BoxForecastByHourProps = {
  hour: Hour | null;
};

export default function BoxForecastByHour({ hour }: BoxForecastByHourProps) {
  console.log("🚀 ~ BoxForecastByHour ~ hour:", hour)
  if (hour === null) {
    return null;
  }

  return (
    <div className="box-forecast-hour">
      <div className="box-forecast-hour__header">
        <img
          src={hour.condition.icon}
          alt={hour.condition.text}
          className="box-forecast-hour__icon"
        />
      </div>
      <div className="box-forecast-hour__body">
        <p className="box-forecast-hour__temperature">{hour.temp_c} °C</p>
      </div>
      <div className="box-forecast-hour__footer">
        <p className="box-forecast-hour__hour">
          {extractTimeStrFromDate(hour.time)}
        </p>
      </div>
    </div>
  );
}
