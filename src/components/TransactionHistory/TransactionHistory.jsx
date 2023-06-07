import { TransactionItem } from 'components/TransactionItem/TransactionItem';
import PropTypes from 'prop-types';
import {
  HistoryHead,
  HistoryHeadRow,
  HistoryHeaderName,
  HistoryTable,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <HistoryTable className="transaction-history">
      <HistoryHead>
        <HistoryHeadRow>
          <HistoryHeaderName>Type</HistoryHeaderName>
          <HistoryHeaderName>Amount</HistoryHeaderName>
          <HistoryHeaderName>Currency</HistoryHeaderName>
        </HistoryHeadRow>
      </HistoryHead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <TransactionItem
              key={id}
              transactionType={type}
              amount={amount}
              currency={currency}
            />
          );
        })}
      </tbody>
    </HistoryTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
