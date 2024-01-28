import { Day } from '../../../@types/typeForecasts';

type BoxForecastByDayProps = {
  day: Day;
};

export default function BoxForecastByDay({ day }: BoxForecastByDayProps) {
  if (day !== null) {
    const { condition, mintemp_c, maxtemp_c } = day;

    return (
      <article className="box-forecast-day">
        <p className="box-forecast-day__date"></p>
        <img
          src={condition.icon}
          alt={condition.text}
          className="box-forecast-day__icon"
        />
        <p className="box-forecast-day__temperature">
          {mintemp_c} / {maxtemp_c} °C
        </p>
      </article>
    );
  }

  return null;
}
