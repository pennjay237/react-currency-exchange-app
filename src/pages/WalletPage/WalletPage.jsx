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
    
  );
};

export default WalletPage;