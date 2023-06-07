import PropTypes from 'prop-types';
import { getRandomHexColor } from 'utils';
import {
  StatItem,
  StatLabel,
  StatList,
  StatPercentage,
  StatSection,
  StatTitle,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatSection>
      {title && <StatTitle>{title}</StatTitle>}

      <StatList>
        {stats.map(({ id, label, percentage }) => {
          const bgColor = getRandomHexColor();
          return (
            <StatItem key={id} bgColor={bgColor}>
              <StatLabel>{label}</StatLabel>
              <StatPercentage>{percentage}%</StatPercentage>
            </StatItem>
          );
        })}
      </StatList>
    </StatSection>
  );
};

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
