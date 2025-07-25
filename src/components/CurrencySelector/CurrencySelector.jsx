import React from 'react';
import styles from './CurrencySelector.module.css';

const CurrencySelector = ({ 
  label, 
  value, 
  onChange, 
  currencies = ['USD', 'EUR', 'XAF'] 
}) => {
  return (
    <div className={styles.selectorContainer}>
      {label && <label className={styles.label}>{label}</label>}
      <select 
        value={value} 
        onChange={(e) => onChange(e.target.value)}
        className={styles.select}
      >
        {currencies.map(currency => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencySelector;