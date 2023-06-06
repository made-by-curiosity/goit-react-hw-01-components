import PropTypes from 'prop-types';
import {
  UserStatisticsList,
  UserStatisticsItem,
  UserStatisticsLabel,
  UserStatisticsQuantity,
} from './UserStatistics.styled';

export const UserStatistics = ({ followers, views, likes }) => {
  return (
    <UserStatisticsList>
      <UserStatisticsItem>
        <UserStatisticsLabel>Followers</UserStatisticsLabel>
        <UserStatisticsQuantity>{followers}</UserStatisticsQuantity>
      </UserStatisticsItem>
      <UserStatisticsItem>
        <UserStatisticsLabel>Views</UserStatisticsLabel>
        <UserStatisticsQuantity>{views}</UserStatisticsQuantity>
      </UserStatisticsItem>
      <UserStatisticsItem>
        <UserStatisticsLabel>Likes</UserStatisticsLabel>
        <UserStatisticsQuantity>{likes}</UserStatisticsQuantity>
      </UserStatisticsItem>
    </UserStatisticsList>
  );
};

UserStatistics.propTypes = {
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
