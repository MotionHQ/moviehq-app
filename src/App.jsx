import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import MobileNavigation from './components/MobileNavigation'
import { useEffect } from 'react'
import Banner from './components/Banner'

function App() {

  return (
    <main className='pb-14 lg:pb-0'>
      <Header/>
      <div>
        <Banner/>
      </div>
      <div className='pt-20'>
        <Outlet/>
      </div>
      <Footer/>
      <MobileNavigation/>
    </main>
  )
}

export default App
