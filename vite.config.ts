/// <reference types="vitest" />
// позволяет TypeScript получить корректную типизацию для Vitest
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    globals: true, // Включает глобальные функции из Vitest
    environment: 'jsdom', // Устанавливает окружение для тестов как 'jsdom', имитирующую браузер
  },
})
