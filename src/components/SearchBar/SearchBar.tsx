import React, { useState } from 'react';
import styles from './styles.module.css';

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [query, setQuery] = useState<string>('');

    const handleSearch = () => {
        if (query.trim() !== '') {
            onSearch(query);
        }
    };

    return (
        <div className={styles.searchBar}>
            <input
                type="text"
                placeholder="Search anime..."
                value={query}
                onChange={e => setQuery(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSearch()}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchBar;
