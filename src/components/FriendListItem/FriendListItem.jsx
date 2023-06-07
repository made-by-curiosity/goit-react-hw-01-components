import PropTypes from 'prop-types';

import { FriendName, FriendPhoto, FriendsItem } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendsItem isOnline={isOnline}>
      <FriendPhoto src={avatar} alt={`User ${name}`} />
      <FriendName>{name}</FriendName>
    </FriendsItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
