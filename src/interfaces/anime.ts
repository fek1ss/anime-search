export interface Anime {
    mal_id: number;
    synopsis: string;
    title: string;
    images: {
        jpg: {
            image_url: string;
        };
    };
}

export interface AnimeProps {
    favorites: Anime[];
    setFavorites: React.Dispatch<React.SetStateAction<Anime[]>>;
}

export interface ApiError {
    message?: string;
}

export interface ApiResponse extends ApiError {
    data: Anime[];
    pagination: {
        last_visible_page: number;
    };
}
