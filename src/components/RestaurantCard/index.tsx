import styles from './styles.module.css';
import { Tag } from '../Tag';
import { FiClock } from 'react-icons/fi';

export function RestaurantCard() {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src="https://images.unsplash.com/photo-1594397108691-61fe6098c247?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Restaurant banner" />
            </div>

            <div className={styles.content}>
                <h3>Black Sushi</h3>
                <div className={styles.info}>
                    <FiClock />
                    <span>30-40 min</span>
                    <div className={styles.separator} />
                    <span>$$$</span>
                </div>

                <Tag emoji="🍔" title="Burger" />
            </div>
        </div>
    );
}