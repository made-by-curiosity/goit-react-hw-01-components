import PropTypes from 'prop-types';
import { ProfileCard } from './Profile.styled';
import { UserInfo } from 'components/UserInfo/UserInfo';
import { UserStatistics } from 'components/UserStatistics/UserStatistics';

export const Profile = ({
  user: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <ProfileCard>
      <UserInfo
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
      ></UserInfo>
      <UserStatistics
        followers={followers}
        views={views}
        likes={likes}
      ></UserStatistics>
    </ProfileCard>
  );
};

Profile.propTypes = {
  user: PropTypes.exact({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};
