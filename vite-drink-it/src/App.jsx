import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import axios from 'axios'

import LoginPage from '../components/LoginPage'

function App() {
  const [count, setCount] = useState(0)
  const [quote, setQuote] = useState('')

  return (
    <div className="App">
      <img src="/Logo-without-bg.svg" className="logo" alt="Drint it logo" />
      <h1 class="app-name">Drint'it</h1>
      {/* <h1> {quote} </h1> */}
    <LoginPage></LoginPage>


{/*     <button onClick={() => axios.get('https:/api.kanye.rest').then(
      result => setQuote(result.data.quote)
    )}>
      Click me
    </button> */}


    </div>
  )
}

export default App
