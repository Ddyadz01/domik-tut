import { useSelector } from 'react-redux';
import { TextComponent } from '../../_components/IndexComponents';
import { ShareLinkProduct } from '../../utils/ShareLinkProduct';
import { Heart, MapPin, Share2 } from 'lucide-react'; // Предположим, что HeartFill — это иконка для избранного
import styles from './product.module.scss';
import { useToggleFavorite } from '../../hooks/useToggleFavorite';

const ProductInfoTop = ({ product }) => {
  const { user } = useSelector((state) => state.user);
  const { favorites } = useSelector((state) => state.user.user);
  const { handleToggleFavorite } = useToggleFavorite();
  const isFavorite = favorites?.some((favorite) => favorite._id === product._id);

  return (
    <div className={styles.product__info_top}>
      <div className={styles.product__info_top_text}>
        <TextComponent text={product.title} size={'heading'} />
        <TextComponent text={product.addres} size={'base'} icon={<MapPin />} />
      </div>
      <div className={styles.product__info_top_btns}>
        {user.token && (
          <Heart
            fill={isFavorite ? 'var(--color-primary)' : 'transparent'}
            onClick={() => handleToggleFavorite(product._id)}
            stroke={!isFavorite && 'var(--color-primary)'}
          />
        )}
        <Share2 onClick={ShareLinkProduct} />
      </div>
    </div>
  );
};

export default ProductInfoTop;
