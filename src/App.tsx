import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import React, { useState } from 'react';
import Home from './page/Home/Home.tsx';
import Header from './components/Header/Header.tsx';
import Favorites from './page/Favorites/Favorites.tsx';
import About from './page/About/About.tsx';

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

const App = () => {
    const [favorites, setFavorites] = useState<Anime[]>([]);
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Home favorites={favorites} setFavorites={setFavorites} />
                        }
                    />
                    <Route
                        path="/favorites"
                        element={
                            <Favorites
                                favorites={favorites}
                                setFavorites={setFavorites}
                            />
                        }
                    />
                    <Route path="/about" element={<About />} />
                </Routes>
            </Router>
        </>
    );
};

export default App;
