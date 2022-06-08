import styles from './styles.module.css';

interface PromotionBannerProps {
  header: string;
  lead: string;
  image: string;
  footer?: string;
}

export function PromotionBanner ({ header, lead, image, footer }: PromotionBannerProps) {
  return (
    <section className={styles.container}>
      <img src={image} alt="Ilustração" />
      <div className={styles.content}>
        <div className={styles.header}>
          <h1>{lead}</h1>
          <h2>{header}</h2>
        </div>
        <span className={styles.footer}>{footer}</span>
      </div>
    </section>
  )
}