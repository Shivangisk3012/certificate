import './App.css'
import CertficateView from './Components/CertficateView'
import Header from './Components/Header'
import Usercertificate from './Components/Usercertificate'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className='flex-1 w-full bg-[#FF7256]'>
      {/* <Header /> */}
      <Routes>
        <Route path='/' element={<CertficateView />} />
        <Route path='/view' element={<Usercertificate/>} />
      </Routes>
      {/* <CertficateView /> */}
    </div>
  )
}

export default App
