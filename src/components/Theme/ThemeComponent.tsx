import { useContext } from 'react';
import { ThemeContext } from '../../app/providers/ThemeProvider';

const ThemeComponent = () => {
    const { theme, toggleTheme } = useContext(ThemeContext); // Используем контекст

    return (
        <div style={{ background: theme === 'dark' ? '#333' : '#fff', color: theme === 'dark' ? '#fff' : '#000' }}>
            <h1>Current Theme: {theme}</h1>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
};

export default ThemeComponent;

