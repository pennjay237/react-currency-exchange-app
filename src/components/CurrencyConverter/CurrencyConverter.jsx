import React, { useState } from 'react';
import CurrencySelector from '../CurrencySelector/CurrencySelector';
import styles from './CurrencyConverter.module.css';
import { useWallet } from '../../context/WalletContext';
import { formatCurrency } from '../../utils/currencyUtils';

const CurrencyConverter = () => {
  const { balances, exchange } = useWallet();
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [amount, setAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [error, setError] = useState('');

  const handleConvert = (e) => {
    e.preventDefault();

    if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
      setError('Please enter a valid positive amount');
      return;
    }

    if (fromCurrency === toCurrency) {
      setError('Cannot convert between the same currencies');
      return;
    }

    if (balances[fromCurrency] < parseFloat(amount)) {
      setError(`Insufficient ${fromCurrency} balance`);
      return;
    }

    setError('');
    setConvertedAmount(null);

    try {
      const result = exchange(fromCurrency, toCurrency, parseFloat(amount));
      setConvertedAmount(result);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={styles.converterContainer}>
      <h3 className={styles.converterTitle}>Currency Exchange</h3>

      <form onSubmit={handleConvert}>
        <div className={styles.converterRow}>
          <div className={styles.column}>
            <CurrencySelector
              label="From"
              value={fromCurrency}
              onChange={setFromCurrency}
            />
          </div>

          <div className={styles.column}>
            <CurrencySelector
              label="To"
              value={toCurrency}
              onChange={setToCurrency}
            />
          </div>
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>Amount to convert</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className={styles.input}
            placeholder="Enter amount"
            step="0.01"
            min="0.01"
          />
        </div>

        {error && <div className={styles.error}>{error}</div>}

        {convertedAmount !== null && !error && (
          <div className={styles.result}>
            <p>
              {formatCurrency(parseFloat(amount), fromCurrency)} = 
              <strong> {formatCurrency(convertedAmount, toCurrency)}</strong>
            </p>
          </div>
        )}

        <button type="submit" className={styles.button}>
          Exchange
        </button>
      </form>
    </div>
  );
};

export default CurrencyConverter;
