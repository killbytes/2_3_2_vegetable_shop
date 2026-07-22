import { createContext, useState, PropsWithChildren } from 'react';

// Создаем контекст
export const ThemeContext = createContext();

// Провайдер для контекста
const ThemeProvider = ({ children }: PropsWithChildren) => {
    const [theme, setTheme] = useState('light'); // Состояние для темы

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children} {/* Оборачиваем children */}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
