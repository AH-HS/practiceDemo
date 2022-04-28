import { useState } from 'react'
// import logo from './logo.svg'
import './App.css'
import Head from './component/Head'
import Manu from './component/Manu';
import Content from './component/Content';

import "tailwindcss/tailwind.css"

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="App">
      <div className='sticky top-0'>
        <Head>
          We're launching NFTs!  
        </Head>
        <Manu />
      </div>
      <Content />
    </div>
  )
}

export default App
