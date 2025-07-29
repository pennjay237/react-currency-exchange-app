import React from 'react';
import styles from './TotalBalance.module.css';
import { formatCurrency } from '../../utils/currencyUtils';

const TotalBalance = ({ total, currency }) => {
  return (
    <div className={styles.totalContainer}>
      <h3 className={styles.totalTitle}>OverAll Total Balance</h3>
      <div className={styles.totalAmount}>
        {formatCurrency(total, currency)}
      </div>
    </div>
  );
};

export default TotalBalance;