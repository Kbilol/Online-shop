import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./main.css"

import App from './app/pages/Home.pages.tsx'
import { AppRouter } from './app/router/AppRouter.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <AppRouter/>
  </StrictMode>,
)
