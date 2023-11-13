import { Route, Routes, useNavigate } from 'react-router-dom'
import Login from './components/organisms/Login'
import OTPCheck from './components/organisms/OtpCheck'
import Home from './pages/HomePage'
import React, { useEffect } from 'react'

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login')
    }
  }, [isAuthenticated, navigate])
  return (
    <Routes>
      <Route path="/login" element={<Login onSubmit={setIsAuthenticated} />} />
      <Route path="/otp-verify" element={<OTPCheck />} />

      <Route path="/home" element={<Home onClick={setIsAuthenticated} />} />
    </Routes>
  )
}

export default App
