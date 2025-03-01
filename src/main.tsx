import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header/>
    <h1 className='text-lg'>Hello World</h1>
  </StrictMode>,
)
