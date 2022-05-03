import { useState,useReducer} from 'react'
// import logo from './logo.svg'
import './App.css'
import Head from './component/Head'
import Manu from './component/Manu';
import Content from './component/Content';
import "tailwindcss/tailwind.css"

import {Context} from './redux/context'
import { reducers,InitValue } from './redux/context';



function App() {
  const [state, dispatch] = useReducer(reducers, InitValue)
  const [selected, setSelected] = useState<string>("1")
  return (
      <Context.Provider value={{state,dispatch}}>
        <div className="App">
          <div className='sticky top-0 z-10'>
            <Head>
            We're launching NFTs!  🚀  Buy the  Spendee NFT  and get a VIP license  💰  click to see what's coming soon  🐷
            </Head>
            <Manu cg={setSelected}/>
          </div>
          <Content display={selected}/>
        </div>
      </Context.Provider>

  )
}

export default App
