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
          <div className={styles.divider}/>
          <Cart amount={4} />
          <Avatar url="https://www.publicspace.org/documents/220568/1825027/36-Judith+Butler-3.jpg/56313282-c6cb-0864-b426-644ae847659e?t=1529000341298" />
        </div>
      </div>
    </nav>
  )
}
