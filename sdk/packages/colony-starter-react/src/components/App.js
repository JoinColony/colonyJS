import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import styles from './App.module.scss';

const App = ({ error, loading, networkClient }) => (
  <div className={styles.container}>
    <header className={styles.header}>
      <img src={logo} className={styles.logo} alt="logo" />
      <h1 className={styles.title}>
        {'colony-starter-react'}
      </h1>
    </header>
    <div className={styles.message}>
      {error &&
        <p>{error}</p>
      }
      {loading &&
        <p>{'loading...'}</p>
      }
      {networkClient &&
        <div>
          <p>{`Wallet Address: ${networkClient.adapter.wallet.address}`}</p>
          <p>{`Network Address: ${networkClient.contract.address}`}</p>
        </div>
      }
    </div>
  </div>
);

export default App;
