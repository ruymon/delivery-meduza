import { Logo } from '../Logo';
import styles from './styles.module.css';

export function Navbar () {
  return (
    <nav className={styles.container}>
      <div className={styles.wrapper}>
        <Logo />

        <div className={styles.navItems}>
          <a href="#">Restaurantes</a>
          <a href="#">Promoções</a>
          <a href="#">Pedidos</a>
        </div>
      </div>
    </nav>
  )
}
