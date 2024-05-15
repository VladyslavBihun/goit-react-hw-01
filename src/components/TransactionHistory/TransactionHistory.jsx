import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table}>
      <thead className={css.head}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={css.body}>
        {items.map((item) => {
          return (
            <tr className={css.item} key={item.id}>
              <td className={css.value}>{item.type}</td>
              <td className={css.value}>{item.amount}</td>
              <td className={css.value}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
