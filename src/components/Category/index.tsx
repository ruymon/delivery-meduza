import styles from './styles.module.css';

interface CategoryProps {
    emoji: string,
    title: string
}

export function Category({ emoji, title }: CategoryProps ) {
    return (
        <div className={styles.container}>
            <span className={styles.emoji}>{ emoji }</span>
            <span className={styles.title}>{ title }</span>
        </div>
    )
};