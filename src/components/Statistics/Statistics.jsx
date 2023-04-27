import PropTypes from 'prop-types';
import getRandomHexColor from 'utils/getRandomHexColor';

import {
  StatisticSection,
  Title,
  StatisticList,
  StatisticListItem,
  StatisticLabel,
  StatisticPercentage,
} from './Statistics.styled';

export function Statistics({ title, stats }) {
  return (
    <StatisticSection>
      {title && <Title>{title}</Title>}
      <StatisticList>
        {stats.map(stat => {
          return (
            <StatisticListItem
              randomColor={getRandomHexColor()}
              key={stat.id}
              className="item"
            >
              <StatisticLabel>{stat.label}</StatisticLabel>
              <StatisticPercentage>{stat.percentage}%</StatisticPercentage>
            </StatisticListItem>
          );
        })}
      </StatisticList>
    </StatisticSection>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
