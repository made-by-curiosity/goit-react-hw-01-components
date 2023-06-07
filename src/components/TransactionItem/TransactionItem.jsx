import PropTypes from 'prop-types';
import { HistoryCell, HistoryRow } from './TransactionItem.styled';

export const TransactionItem = ({ transactionType, amount, currency }) => {
  return (
    <HistoryRow>
      <HistoryCell>{transactionType}</HistoryCell>
      <HistoryCell>{amount}</HistoryCell>
      <HistoryCell>{currency}</HistoryCell>
    </HistoryRow>
  );
};

TransactionItem.propTypes = {
  transactionType: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
