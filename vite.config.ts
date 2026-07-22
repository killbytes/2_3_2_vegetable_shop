/// <reference types="vitest" />
// позволяет TypeScript получить корректную типизацию для Vitest
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Включает глобальные функции из Vitest
    environment: 'jsdom', // Устанавливает окружение для тестов как 'jsdom', имитирующую браузер
  },
})
