import { getDateFormatted } from '@/utils';
import { Statistic } from '@interfaces/coins';

interface StatisticProps {
  statistic: Statistic;
}

export const ItemPriceStatistics = ({ statistic }: StatisticProps) => {
  return (
    <tr className="border-b-2 border-light border-opacity-50 flex-row">
      <th className="py-3 text-left opacity-70 w-1/2">{statistic.label}</th>
      <td className="py-3 text-right font-bold w-1/2">
        <span>{statistic.value}</span>
        {statistic.value2 ? (
          <span className={`${statistic.colorValue2}`}>
            {' ' + statistic.value2}
          </span>
        ) : null}
        {statistic.date ? <br /> : null}
        {statistic.date ? (
          <small>{getDateFormatted(statistic.date)}</small>
        ) : null}
      </td>
    </tr>
  );
};
