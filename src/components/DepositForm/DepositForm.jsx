import React, { useState } from 'react';
import CurrencySelector from '../CurrencySelector/CurrencySelector';
import styles from './DepositForm.module.css';
import { useWallet } from '../../context/WalletContext';

const DepositForm = () => {
  const { deposit } = useWallet();
  const [currency, setCurrency] = useState('USD');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
      setError('Please enter a valid positive amount');
      return;
    }
    
    try {
      deposit(currency, parseFloat(amount));
      setAmount('');
      setError('');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={styles.formContainer}>
      <h3 className={styles.formTitle}>Deposit Funds</h3>
      
      <form onSubmit={handleSubmit}>
        <CurrencySelector 
          label="Currency to deposit"
          value={currency}
          onChange={setCurrency}
        />
        
        <div className={styles.inputGroup}>
          <label className={styles.label}>Amount</label>
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
        
        <button type="submit" className={styles.button}>
          Deposit
        </button>
      </form>
    </div>
  );
};

export default DepositForm;