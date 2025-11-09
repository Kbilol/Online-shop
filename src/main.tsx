import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./main.css"

import "flowbite";
import "flowbite/dist/flowbite.css";


import { AppRouter } from './app/router/AppRouter.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRouter/>
  </StrictMode>,
)
