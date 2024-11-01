import { Route, Routes } from 'react-router-dom'
import { ChangePassword, Home, Login, RecoverPassword } from './pages'

export const TransversalRoutes = () => {
  return (
    <Routes>
      <Route path='inicio' element={<Home/>} />
      <Route path='login' element={<Login />} />
      <Route path='recuperar-clave' element={<RecoverPassword />} />
      <Route path='cambiar-clave' element={<ChangePassword />} />
    </Routes>
  )
}
