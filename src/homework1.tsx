import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Coruse from './components/course'


createRoot(document.getElementById('root')!).render(

  <StrictMode>
    <Coruse/>
  </StrictMode>
  
) 
