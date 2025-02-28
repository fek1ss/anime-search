import AniCard from '../AniCard/AniCard.tsx';
import styles from './styles.module.css';
import React from 'react';
import { AniListProps } from '../../interfaces/anime.ts';

const AniList: React.FC<AniListProps> = ({ anime, addToFavorites, favorites }) => {
    if (!anime.length) {
        return <p>No anime found</p>;
    }

    return (
        <div className={styles.animeList}>
            {anime.slice(0, 8).map(ani => (
                <AniCard addToFavorites={addToFavorites} favorites={favorites} key={ani.mal_id} anime={ani} />
            ))}
        </div>
    );
};

export default AniList;
