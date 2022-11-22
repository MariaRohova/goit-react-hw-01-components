import PropTypes from 'prop-types';
import css from './Transaction.module.css';

export function TransactionHistory({items}) {
    return (
      <table className={css.transactionHistory}>
        <thead>
          <tr className={css.items}>
            <th className={css.th}>Type</th>
            <th className={css.th}>Amount</th>
            <th className={css.th}>Currency</th>
          </tr>
        </thead>

        <tbody className={css.list}>
          {items.map(({ id, type, amount, currency }) => (
            <tr key={id}>
              <td className={css.td}>{type}</td>
              <td className={css.td}>{amount}</td>
              <td className={css.td}>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
}