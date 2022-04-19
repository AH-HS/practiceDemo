import { useState } from 'react'
// import logo from './logo.svg'
import './App.css'
import Head from './component/Head'

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="App">
      hello world
      <Head />
    </div>
  )
}

export default App
