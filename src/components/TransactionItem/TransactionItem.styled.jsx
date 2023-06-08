import styled from '@emotion/styled';

export const HistoryRow = styled.tr`
  background-color: #fff;

  &:nth-of-type(even) {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const HistoryCell = styled.td`
  padding: 16px;

  &::first-letter {
    text-transform: uppercase;
  }
`;
