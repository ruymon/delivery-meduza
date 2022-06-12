import { FiArrowUp } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Logo } from '../../components/Logo';

import styles from './styles.module.css';

export function Splash() {
  return (
    <div className={styles.container}>
      <aside className={styles.contentContainer}>
        <main className={styles.content}>
          <Logo />

          <div className={styles.header}>
            <h1>Tudo pra facilitar seu dia a dia</h1>
            <span>O que você precisa está aqui. Peça e receba onde estiver e quando quiser. Uma grande variedade na palma da sua mão!</span>
          </div>

          <Link className={styles.button} to="/app">
            <div>
              <FiArrowUp />
            </div>
            <span>Começar</span>
          </Link>

          <footer className={styles.footer}>
            Copyright &copy; Delivery Meduza <br />
            All rights reserved.
          </footer>
        </main>
      </aside>

      <aside className={styles.ilustration} />
    </div>
  );
}
