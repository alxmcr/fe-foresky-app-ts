import { formatDate } from 'date-fns/format';
import { enUS } from 'date-fns/locale';
import { Forecastday } from '../../../@types/typeForecasts';
import { FORMAT_DATES } from '../../../utils/helpers-dates';

type BoxForecastByDayProps = {
  forecastDay: Forecastday;
};

export default function BoxForecastByDay({
  forecastDay,
}: BoxForecastByDayProps) {
  if (forecastDay !== null) {
    const { date, day } = forecastDay;
    const dateFormatted = formatDate(date, FORMAT_DATES.short, enUS.options);

    return (
      <article className="box-forecast-day">
        <p className="box-forecast-day__date">{dateFormatted}</p>
        <img
          src={day.condition.icon}
          alt={day.condition.text}
          className="box-forecast-day__icon"
        />
        <p className="box-forecast-day__temperature">
          {day.mintemp_c} / {day.maxtemp_c} °C
        </p>
      </article>
    );
  }

  return null;
}
