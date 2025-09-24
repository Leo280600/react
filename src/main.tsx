import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.tsx'
//import TodoApp from './components/Todolist.tsx'
//import Coruse from './components/course'
import TodoListHook from './components/TodoListHook.tsx'

createRoot(document.getElementById('root')!).render(

  <StrictMode>
   {/*<App />*/}
   <TodoListHook/> 
   {/* <TodoApp /> */}
    {/*<Coruse /> */}
  </StrictMode>
  
) 
