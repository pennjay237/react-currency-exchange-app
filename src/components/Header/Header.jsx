import React from 'react';
import styles from './Header.module.css';
import CurrencySelector from '../CurrencySelector/CurrencySelector';
import { useWallet } from '../../context/WalletContext';

const Header = () => {
  const { defaultCurrency, setDefault } = useWallet();
  
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>Currency Exchange Wallet</h1>
      </div>
      
      <div className={styles.controls}>
        <div className={styles.selectorContainer}>
          <span className={styles.selectorLabel}>Choose Default Currency:</span>
          <CurrencySelector 
            value={defaultCurrency}
            onChange={setDefault}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;