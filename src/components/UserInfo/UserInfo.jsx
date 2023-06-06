import PropTypes from 'prop-types';
import {
  UserInfoContainer,
  UserImage,
  UserName,
  UserTag,
  UserLocation,
} from './UserInfo.styled';

export const UserInfo = ({ username, tag, location, avatar }) => {
  return (
    <UserInfoContainer>
      <UserImage src={avatar} alt="User Avatar" />
      <UserName>{username}</UserName>
      <UserTag>@{tag}</UserTag>
      <UserLocation>{location}</UserLocation>
    </UserInfoContainer>
  );
};

UserInfo.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
