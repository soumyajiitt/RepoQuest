interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header = ({ darkMode, toggleDarkMode }: HeaderProps) => {
  return (
    <header className="header">
      <h1 className="title">devfinder</h1>
      <div className="mode-toggle" onClick={toggleDarkMode}>
        <p>{darkMode ? 'LIGHT' : 'DARK'}</p>
        <img 
          src={darkMode ? '../../public/assets/icon-sun.svg' : '../../public/assets/icon-moon.svg'} 
          alt={darkMode ? 'light mode' : 'dark mode'} 
        />
      </div>
    </header>
  );
};

export default Header; 