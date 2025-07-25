import { useState } from 'react';
import './App.css'; // Regular CSS
import { WalletProvider } from './context/WalletContext';
import WalletPage from './pages/WalletPage/WalletPage';

function App() {
  return (
    <WalletProvider>
      <div className="app">
        <WalletPage />
      </div>
    </WalletProvider>
  );
}

export default App;
