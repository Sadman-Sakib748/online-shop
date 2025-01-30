import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes.jsx'
import {HeroUIProvider} from "@heroui/react";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeroUIProvider>
   <RouterProvider router={router}/>
   </HeroUIProvider>
  </StrictMode>,
)
