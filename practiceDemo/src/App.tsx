import { useState } from 'react'
// import logo from './logo.svg'
import './App.css'
import Head from './component/Head'
import Manu from './component/Manu';
import Content from './component/Content';

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="App">
      <Head>
        We're launching NFTs!  
      </Head>
      <Manu />
      <Content />
    </div>
  )
}

export default App
