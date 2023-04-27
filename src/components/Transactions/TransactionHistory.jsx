import PropTypes from 'prop-types';
import {
  TableHeader,
  TableHeaderTitle,
  TransactionTable,
  BodyTable,
  BodyCell,
  BodyTableLine,
} from './TransactionHistory.styled';

export function TransactionHistory({ items }) {
  return (
    <TransactionTable>
      <thead>
        <TableHeader>
          <TableHeaderTitle>Type</TableHeaderTitle>
          <TableHeaderTitle>Amount</TableHeaderTitle>
          <TableHeaderTitle>Currency</TableHeaderTitle>
        </TableHeader>
      </thead>

      <BodyTable>
        {items.map(item => {
          return (
            <BodyTableLine key={item.id}>
              <BodyCell>{item.type}</BodyCell>
              <BodyCell>{item.amount}</BodyCell>
              <BodyCell>{item.currency}</BodyCell>
            </BodyTableLine>
          );
        })}
      </BodyTable>
    </TransactionTable>
  );
}
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
