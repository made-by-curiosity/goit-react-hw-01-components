import styled from '@emotion/styled';

const setOnlineColor = ({ isOnline }) => {
  if (isOnline) {
    return '#1EA551';
  } else {
    return '#EB1E32';
  }
};

export const FriendsItem = styled.li`
  height: 70px;
  width: 250px;

  padding-left: 40px;
  padding-top: 4px;
  padding-bottom: 4px;

  position: relative;

  display: flex;
  align-items: center;

  background-color: #fff;

  box-shadow: 2px 2px 5px -2px rgba(0, 0, 0, 0.59);

  &::before {
    content: '';
    width: 16px;
    height: 16px;

    display: inline-block;

    position: absolute;
    top: 50%;
    left: 12px;

    transform: translateY(-8px);

    border-radius: 50%;

    background-color: ${setOnlineColor};
  }
`;

export const FriendPhoto = styled.img`
  height: 60px;
  width: 60px;
  margin-right: 16px;

  object-fit: contain;

  box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
`;

export const FriendName = styled.span`
  font-size: 20px;
  font-weight: 600;
`;
