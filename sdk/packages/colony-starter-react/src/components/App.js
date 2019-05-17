import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import styles from './App.module.scss';

const App = ({ colonyClient, error, loading }) => (
  <div className={styles.container}>
    <header className={styles.header}>
      <img src={logo} className={styles.logo} alt="logo" />
      <h1 className={styles.title}>
        {'colony-starter-react'}
      </h1>
    </header>
    <div className={styles.message}>
      {error &&
        <p>{error.message}</p>
      }
      {loading &&
        <p>{'loading...'}</p>
      }
      {colonyClient &&
        <div>
          <p>{`Wallet Address: ${colonyClient.adapter.wallet.address}`}</p>
          <p>{`Network Address: ${colonyClient.networkClient.contract.address}`}</p>
          <p>{`Colony Address: ${colonyClient.contract.address}`}</p>
        </div>
      }
    </div>
  </div>
);

export default App;
