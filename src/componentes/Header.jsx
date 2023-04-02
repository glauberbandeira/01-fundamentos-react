import React from 'react';
import styles from './Header.module.css';

import igniteLogo from '../assets/ignite-logo.svg'

export function Header() {
  return (
    <div>
        <h1 className={styles.header}>
          <img src={igniteLogo} alt='Logitpo do Ignite' />
        </h1>
    </div>
  )
}
