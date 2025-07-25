import React from 'react';
import styles from './BalanceCard.module.css';
import { formatCurrency, currencySymbols } from '../../utils/currencyUtils';

const BalanceCard = ({ currency, balance }) => {
  return (
    <div className={styles.card}>
      <div className={styles.currencyHeader}>
        <span className={styles.currencyFlag}>
          {currency === 'USD' && '🇺🇸'}
          {currency === 'EUR' && '🇪🇺'}
          {currency === 'XAF' && '🇨🇲'}
        </span>
        <h3 className={styles.currencyTitle}>{currency}</h3>
      </div>
      <div className={styles.balanceAmount}>
        {currencySymbols[currency]} {formatCurrency(balance, currency)}
      </div>
    </div>
  );
};

export default BalanceCard;