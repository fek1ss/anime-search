import React, { useEffect, useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar.tsx';
import AniList from '../../components/AniList/AniList.tsx';
import Pagination from '../../components/Pagination/Pagination.tsx';
import styles from './styles.module.css';
import { Anime, AnimeProps, ApiError, ApiResponse } from '../../interfaces/anime.ts';

/**
 *
 */

const Home: React.FC<AnimeProps> = ({ favorites, setFavorites }) => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [anime, setAnime] = useState<Anime[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [error, setError] = useState<ApiError | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        setCurrentPage(1);
    }, [searchQuery]);

    useEffect(() => {
        /**
         * Получает список аниме с API Jikan
         *
         * @param {string} searchQuery - Поисковый запрос (если пустой, загружается топ аниме)
         * @param {number} currentPage - Текущая страница результатов
         * @returns {Promise<void>} - Обновляет состояние аниме и страниц, либо устанавливает ошибку
         */
        const fetchAnime = async () => {
            setIsLoading(true);

            try {
                const url = searchQuery
                    ? `https://api.jikan.moe/v4/anime?q=${searchQuery}&page=${currentPage}`
                    : `https://api.jikan.moe/v4/top/anime?page=${currentPage}`;

                const response = await fetch(url);
                const data: ApiResponse = await response.json();
                console.log(data);

                if (response.ok) {
                    setAnime(data.data);
                    setTotalPages(data.pagination.last_visible_page);
                    setError(null);
                } else {
                    setError({
                        message: data.message || 'Error fetching anime.',
                    });
                    console.log('error is ', data.message);
                }
            } catch (e) {
                setError({
                    message: 'Network error. Please try again later.',
                });
            } finally {
                setIsLoading(false);
            }
        };

        fetchAnime();
    }, [searchQuery, currentPage]);

    /**
     * Добавляет или удаляет аниме из списка избранного
     *
     * @param {Anime} anime - Объект аниме, который нужно добавить или удалить
     * @returns {void} - Функция не возвращает значение, но обновляет состояние favorites
     */
    const addToFavorites = (anime: Anime) => {
        setFavorites(prevF => {
            const isFavorite = prevF.some(fav => fav.mal_id === anime.mal_id);

            // Если аниме уже в избранном, удаляем его, иначе добавляем
            if (isFavorite) return prevF.filter(fav => fav.mal_id !== anime.mal_id);
            else return [...prevF, anime];
        });
    };

    return (
        <div className={styles.Home}>
            <SearchBar onSearch={setSearchQuery} />
            {error && <p className={styles.error}>{error.message}</p>}

            {isLoading ? (
                <div className={styles.loader}></div>
            ) : (
                <AniList addToFavorites={addToFavorites} favorites={favorites} anime={anime} />
            )}

            {totalPages > 1 && (
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
            )}
        </div>
    );
};

export default Home;
