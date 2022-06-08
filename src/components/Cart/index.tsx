import { FiShoppingBag } from 'react-icons/fi';

import styles from './styles.module.css';

interface CartProps {
  amount: number;
}

export function Cart({ amount }: CartProps) {
  return (
    <div className={styles.container}>
      <FiShoppingBag />
      <span className={styles.amount}>{amount}</span>
    </div>
  );
};