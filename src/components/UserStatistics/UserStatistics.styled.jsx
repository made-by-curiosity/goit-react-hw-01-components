import styled from '@emotion/styled';

export const UserStatisticsList = styled.ul`
  display: flex;
  justify-content: space-between;

  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

export const UserStatisticsItem = styled.li`
  height: 80px;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 10px;
  padding-right: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;

  &:not(:last-child) {
    border-right: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

export const UserStatisticsLabel = styled.span`
  color: rgba(0, 0, 0, 0.5);
`;

export const UserStatisticsQuantity = styled.span`
  font-weight: 700;
`;
