import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Buttonadd from './components/Buttonadd'
import Headertxt from './components/Headertxt'
import List_members from './components/Members'

function App() {

  const [name] = useState('CSMJU')

  const [massge] = useState('สอบเส็จสบายใจจัง')

  const [cho] = useState('Choi')
  const title: string = "test"
  const status = true; // true = เขียว, false = แดง 

  

  return (
    <>
      <div>
        <List_members group="Sajaboy" />
      </div>

      <div>
        <h1>{name}</h1>
        <h1>{title}</h1>
        <Headertxt title="asdsadasdasdas" textsize="100" status={true} />
        <Headertxt title="asdsadasdasdas" textsize="100" status={false} />

        <h2>{massge}</h2>
        <h3>{1 + 1}</h3>
        <h1 className={status ? "green-txt" : "red-txt"}>{cho}</h1>


        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Buttonadd />
        {/*         <button onClick={() => setCount((count) => count + 1)*/}
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
