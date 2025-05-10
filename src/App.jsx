import { useState } from 'react'
import './App.css'
import Container from './components/Container';

function App() {
  return <>
    <div id="react_root" className='w-screen h-screen bg-[url(../public/bg.jpg)] bg-no-repeat bg-center bg-[#0c0a29] absolute top-0'>
      <div className=' relative w-1/2 m-auto  text-center py-5 bg-[#13103c]/50 border-2 rounded-3xl align-center top-1/3'>
        <div className='bg-gray-200 rounded-2xl text-blue-800 m-5 p-3 text-3xl font-bold mt-0'>
          This is a Curreny Converter</div>
        <Container />
      </div>
    </div>

  </>;
}

export default App
