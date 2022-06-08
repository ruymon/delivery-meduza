import styles from './styles.module.css';

interface AvatarProps {
  url: string;
}

// TODO: Add Fallback to image.

export function Avatar({ url }: AvatarProps ) {
  return <img className={styles.avatarContainer} src={url} alt="Avatar" />
}