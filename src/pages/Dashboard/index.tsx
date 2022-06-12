import { Category } from "../../components/Category";
import { Navbar } from "../../components/Navbar";
import { PromotionBanner } from "../../components/PromotionBanner";
import { RestaurantCard } from "../../components/RestaurantCard";

import styles from './styles.module.css';

export const Dashboard = () => {
  return (
    <main className={styles.container}>
      <Navbar />

      <div className={styles.wrapper}>
        <div className={styles.promotionsContainer}>
          <PromotionBanner lead="Todas as sobremesas" header="20% OFF" image="https://res.cloudinary.com/ruyawm/image/upload/v1654652965/delivery%20medusa/img_mask_mxuxdg.png" footer="Noite Doce"/>
          <PromotionBanner lead="Hamburgers" header="50% OFF" image="https://res.cloudinary.com/ruyawm/image/upload/v1654652993/delivery%20medusa/img_mask_1_e6twtd.png" footer="Gostosuras"/>
        </div>

        <div className={styles.categoriesContainer}>
          <Category emoji="🍔" title="Burger"/>
          <Category emoji="🍣" title="Sushi"/>
          <Category emoji="🥩" title="Churras"/>
          <Category emoji="🥦" title="Vegetariano"/>
          <Category emoji="🧁" title="Sobremesas"/>
          <Category emoji="🍕" title="Pizza"/>
        </div>

        <h3 className={styles.restaurantsHeader}>Restaurantes próximos</h3>

        <div className={styles.restaurantsContainer}>
          <RestaurantCard  />
          <RestaurantCard  />
          <RestaurantCard  />
          <RestaurantCard  />
          <RestaurantCard  />
        </div>

      </div>
    </main>
  );
}