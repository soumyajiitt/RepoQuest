import { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Profile from './components/Profile';
import { GithubUser } from './types/github';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState<GithubUser | null>(null);
  const [error, setError] = useState<string | null>(null);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark');
  };

  const searchUser = async (username: string) => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error('User not found');
      }
      const data = await response.json();
      setUser(data);
      setError(null);
    } catch (err) {
      setError('No results');
      setUser(null);
    }
  };

  return (
    <div className={`container ${darkMode ? 'dark' : ''}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <SearchBar onSearch={searchUser} error={error} />
        {user && <Profile user={user} />}
      </main>
    </div>
  );
}

export default App; 