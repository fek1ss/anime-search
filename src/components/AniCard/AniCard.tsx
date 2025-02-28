import React from 'react';
import useModal from '../../hooks/useModal.tsx';
import Modal from '../../components/Modal/Modal.tsx';
import styles from './styles.module.css';

interface Anime {
    mal_id: number;
    synopsis: string;
    title: string;
    images: {
        jpg: {
            image_url: string;
        };
    };
}

interface AnimeProps {
    anime: Anime;
    addToFavorites?: (anime: Anime) => void;
    favorites: Anime[];
}

const AniCard: React.FC<AnimeProps> = ({ anime, addToFavorites, favorites }) => {
    const { isOpen, toggle } = useModal();
    const isFavorite = favorites.some(fav => fav.mal_id === anime.mal_id);

    if (!anime.synopsis) return <p>No data available</p>;

    const posterUrl = anime.images.jpg.image_url
        ? anime.images.jpg.image_url
        : 'https://via.placeholder.com/500x750?text=No+Image';

    return (
        <div className={styles.animeCard}>
            <img src={posterUrl} alt={anime.title} />
            <h2 className={styles.animeTitle}>{anime.title}</h2>
            <p>
                {`${anime.synopsis.substring(0, 150)}... `}
                <span className={styles.toggleMore} onClick={toggle}>
                    Read more
                </span>
            </p>
            <Modal isOpen={isOpen} toggle={toggle}>
                {anime.synopsis}
            </Modal>

            {addToFavorites && (
                <button onClick={() => addToFavorites(anime)}>
                    {isFavorite ? 'Remove from favorites' : 'Add to Favorite'}
                </button>
            )}
        </div>
    );
};

export default AniCard;
