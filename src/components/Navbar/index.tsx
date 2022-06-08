import { Avatar } from '../Avatar';
import { Cart } from '../Cart';
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
          <div className={styles.divider}/>
          <Cart amount={4} />
          <Avatar url="https://avatars.githubusercontent.com/u/50504050?v=4" />
        </div>
      </div>
    </nav>
  )
}
