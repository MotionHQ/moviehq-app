import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'

function App() {

  return (
    <main className='pb-14 lg:pb-0'>
      <div>
        <Header/>
      </div>
      <div>
        <Outlet/>
      </div>
    </main>
  )
}

export default App
