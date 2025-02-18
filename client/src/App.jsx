import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
const App = () => {
  return (
   <>
   
   <Header/>
   <main className='min-h-[850vh]'>
<Home/>
   </main>
   <Footer/>


   
   
   </> )
}

export default App