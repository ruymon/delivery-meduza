import styles from './styles.module.css';

interface TagProps {
    emoji: string,
    title: string
}

export function Tag({ emoji, title }: TagProps) {
    return (
        <div className={styles.container}>
            <span>{ emoji }</span>
            <span>{ title }</span>
        </div>
    )
}