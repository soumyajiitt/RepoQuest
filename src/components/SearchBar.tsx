import { useState } from 'react';

interface SearchBarProps {
  onSearch: (username: string) => void;
  error: string | null;
}

const SearchBar = ({ onSearch, error }: SearchBarProps) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      onSearch(username.trim());
    }
  };

  return (
    <form className="searchbar-container" onSubmit={handleSubmit}>
      <div className="search-input-wrapper">
        <img src="../../public/assets/icon-search.svg" alt="search" />
        <input
          type="text"
          placeholder="Search GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      {error && <p className="error">{error}</p>}
      <button type="submit" className="btn-search">
        Search
      </button>
    </form>
  );
};

export default SearchBar; 