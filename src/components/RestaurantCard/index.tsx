import styles from './styles.module.css';
import { Tag } from '../Tag';
import { FiClock } from 'react-icons/fi';

import { categories } from './../../helpers/categories';

interface RestaurantData {
    id: number;
    trending: boolean;
    bannerImage: string;
    name: string;
    deliveryTime: string;
    budget: number;
    tags: number[];
};

interface RestaurantCardProps {
    data: RestaurantData;
};

export function RestaurantCard({ data }: RestaurantCardProps) {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src={data.bannerImage} />
            </div>

            <div className={styles.content}>
                <h3>{data.name}</h3>
                <div className={styles.info}>
                    <FiClock />
                    <span>{data.deliveryTime} min</span>
                    <div className={styles.separator} />
                    <span>{Array.apply(null, Array(data.budget)).map(() => '$')}</span>
                </div>

                { data.tags.map(tag => {
                    const tagCategory = categories.find(category => category.id === tag);
                    
                    const tagEmoji = tagCategory?.emoji || '👀';
                    const tagTitle = tagCategory?.title || 'Desconhecido';

                    return (
                        <Tag key={tag} emoji={tagEmoji} title={tagTitle}/>
                    )
                }) }
            </div>
        </div>
    );
}