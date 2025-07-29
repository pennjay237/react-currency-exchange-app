import React from 'react';
import styles from './WalletPage.module.css';
import Header from '../../components/Header/Header';
import BalanceCard from '../../components/BalanceCard/BalanceCard';
import TotalBalance from '../../components/TotalBalance/TotalBalance';
import DepositForm from '../../components/DepositForm/DepositForm';
import CurrencyConverter from '../../components/CurrencyConverter/CurrencyConverter';
import { useWallet } from '../../context/WalletContext';

const WalletPage = () => {
  const { balances, defaultCurrency, getTotalBalance } = useWallet();
  
  return (
    <div className={styles.walletPage}>
      <Header />
      
      <main className={styles.mainContent}>
        <div className={styles.balanceSummary}>
          <TotalBalance 
            total={getTotalBalance()} 
            currency={defaultCurrency} 
          />
          
          <div className={styles.currencyCards}>
            {Object.entries(balances).map(([currency, balance]) => (
              <BalanceCard 
                key={currency} 
                currency={currency} 
                balance={balance} 
              />
            ))}
          </div>
        </div>
        
        <div className={styles.actions}>
          <DepositForm />
          <CurrencyConverter />
        </div>
      </main>
      
      <footer className={styles.footer}>
        <p>© 2025 Jude'sCurrency Exchange Wallet. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default WalletPage;