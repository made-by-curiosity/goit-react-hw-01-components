import styled from '@emotion/styled';

export const UserInfoContainer = styled.div`
  padding: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #fff;
`;

export const UserImage = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 30px;

  border-radius: 50%;
  object-position: 0px 10px;

  box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.2);
`;

export const UserName = styled.p`
  margin-bottom: 10px;

  font-size: 24px;
  font-weight: 700;
`;

export const UserTag = styled.p`
  margin-bottom: 10px;

  color: rgba(0, 0, 0, 0.5);
`;

export const UserLocation = styled.p`
  color: rgba(0, 0, 0, 0.5);
`;
