import { Route, Routes } from 'react-router-dom'
import { HomeLoggedIn, Home, Login, } from './pages'

export const TransversalRoutes = () => {
  return (
    <Routes>
      <Route path='inicio' element={<Home/>} />
      <Route path='login' element={<Login />} />
    </Routes>
  )
}


export const TransversalRoutesPrivate = () => {
  return (
    <Routes>
      <Route path='home' element={<HomeLoggedIn />} />
    </Routes>
  )
}

