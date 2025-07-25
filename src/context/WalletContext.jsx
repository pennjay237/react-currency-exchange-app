import React, { createContext, useContext, useState } from 'react';
import { convertCurrency } from '../utils/currencyUtils';

const WalletContext = createContext();

const initialBalances = {
  USD: 100,
  EUR: 500,
  XAF: 10000
};

export const WalletProvider = ({ children }) => {
  const [balances, setBalances] = useState(initialBalances);
  const [defaultCurrency, setDefaultCurrency] = useState('USD');
  const [transactions, setTransactions] = useState([]);

  const deposit = (currency, amount) => {
    setBalances(prev => ({
      ...prev,
      [currency]: prev[currency] + amount
    }));
    
    setTransactions(prev => [
      ...prev,
      { type: 'deposit', currency, amount, timestamp: new Date() }
    ]);
  };

  const exchange = (fromCurrency, toCurrency, amount) => {
    const convertedAmount = convertCurrency(amount, fromCurrency, toCurrency);
    
    if (balances[fromCurrency] < amount) {
      throw new Error(`Insufficient ${fromCurrency} balance`);
    }
    
    setBalances(prev => ({
      ...prev,
      [fromCurrency]: prev[fromCurrency] - amount,
      [toCurrency]: prev[toCurrency] + convertedAmount
    }));
    
    setTransactions(prev => [
      ...prev,
      { 
        type: 'exchange', 
        fromCurrency, 
        toCurrency, 
        amount, 
        convertedAmount,
        timestamp: new Date() 
      }
    ]);
  };

  const setDefault = (currency) => {
    setDefaultCurrency(currency);
  };

  const getTotalBalance = () => {
    return Object.entries(balances).reduce((total, [currency, amount]) => {
      return total + convertCurrency(amount, currency, defaultCurrency);
    }, 0);
  };

  return (
    <WalletContext.Provider value={{
      balances,
      defaultCurrency,
      transactions,
      deposit,
      exchange,
      setDefault,
      getTotalBalance
    }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => useContext(WalletContext);