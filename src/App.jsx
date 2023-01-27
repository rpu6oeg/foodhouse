import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Main from './link/Main'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div> 
      <Main />
    </div>
  )
}

export default App
