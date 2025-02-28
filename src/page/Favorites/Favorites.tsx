import React from 'react';
import AniCard from '../../components/AniCard/AniCard.tsx';
import styles from './styles.module.css';
import { AnimeProps, Anime } from '../../interfaces/anime.ts';

const Favorites: React.FC<AnimeProps> = ({ favorites, setFavorites }) => {
    const onRemove = (favAnime: Anime) => {
        setFavorites(prev => prev.filter(anime => anime.mal_id !== favAnime.mal_id));
    };
    return (
        <div>
            <h1 className={styles.h1}>Favorites</h1>
            {favorites.length === 0 ? (
                <p>No favorites added yet.</p>
            ) : (
                <div className={styles.animeList}>
                    {favorites.map(anime => (
                        <div className={styles.favoriteCard}>
                            <AniCard key={anime.mal_id} anime={anime} favorites={favorites} />
                            <button className={styles.btnRemove} onClick={() => onRemove(anime)}>
                                remove
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Favorites;
