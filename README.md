# Anime search

Anime Search is a React-based application that allows users to browse and search for anime using the [Jikan API](https://jikan.moe/)
, a free RESTful API for retrieving data from MyAnimeList.

## Features

-   **Search Functionality:** Search for anime by title.

-   **Top Anime:** View the top-ranked anime when no search query is entered.

-   **Anime Details:** Display anime title, synopsis, and image.

-   **Pagination:** Navigate through multiple pages of search results or top anime.

-   **Dynamic Modals:** View the full synopsis in a modal window.

-   **Add to Favorites:** Feature to mark anime as favorite (future implementation)

## Tech Stack

-   **Frontend:** React (with TypeScript)

-   **Styling:** CSS

-   **API:** [Jikan API](https://jikan.moe/)

## Installation

1. Clone the repository:

    ```
    git clone https://github.com/fek1ss/anime-search.git
    ```

2. Navigate to the project directory:

    ```
    cd anime-search
    ```

3. Install dependencies:

    ```
    npm install
    ```

4. Start the development server:

    ```
    npm run start
    ```

5. Open the application in your browser at http://localhost:3000.

## API Integration

This project uses the [Jikan API](https://jikan.moe/) for fetching anime data. Below are the key endpoints:

-   Search Anime: `https://api.jikan.moe/v4/anime?q={query}&page={page}`

-   Top Anime: `https://api.jikan.moe/v4/top/anime?page={page}`

## Folder Structure

```src/
  ├── components/
  │   ├── AniCard/
  │   ├── AniList/
  │   ├── Modal/
  │   ├── Pagination/
  │   └── SearchBar/
  ├── hooks/
  │   └── useModal.tsx
  ├── pages/
  │   └── Home/
  └── App.tsx
```

# Live Demo

Check out the live version of the project here: [Anime Search](https://anime-search-seven.vercel.app/)
