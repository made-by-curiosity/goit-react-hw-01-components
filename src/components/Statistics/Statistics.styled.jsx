import styled from '@emotion/styled';

export const StatSection = styled.section`
  background-color: #fff;
`;

export const StatTitle = styled.h2`
  padding-top: 32px;
  padding-bottom: 32px;

  display: block;

  text-align: center;
  text-transform: uppercase;
`;

export const StatList = styled.ul`
  display: flex;
`;

const setBgColor = props => {
  return props.bgColor;
};

export const StatItem = styled.li`
  width: 100px;
  padding: 16px 0px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 8px;

  color: #fff;

  background-color: ${setBgColor};
`;

export const StatLabel = styled.span``;

export const StatPercentage = styled.span`
  font-size: 28px;
`;
