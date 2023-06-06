import PropTypes from 'prop-types';

export const UserInfo = ({ username, tag, location, avatar }) => {
  return (
    <div className="description">
      <img src={avatar} alt="User Avatar" className="avatar" />
      <p className="name">{username}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
    </div>
  );
};

UserInfo.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
