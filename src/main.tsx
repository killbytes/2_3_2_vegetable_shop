import {StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import { MantineProvider } from "@mantine/core"
import './index.scss'
import App from './app/App'
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import CartProvider from "@/context/CartProvider";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <MantineProvider defaultColorScheme="light">
            <CartProvider>
                <App />
            </CartProvider>
        </MantineProvider>
    </StrictMode>,
)