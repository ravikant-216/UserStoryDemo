import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from 'react-router-dom'
import Login from './components/organisms/Login'
import OTPCheck from './components/organisms/OtpCheck'
import Home from './pages/HomePage'
import React from 'react'

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false)
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route
          path="/login"
          element={<Login onSubmit={setIsAuthenticated} />}
        />
        <Route path="/otp-verify" element={<OTPCheck />} />
        {!isAuthenticated && (
          <Route path="/home" element={<Navigate to="/login" />} />
        )}
        <Route path="/home" element={<Home onClick={setIsAuthenticated} />} />
      </Routes>
    </Router>
  )
}

export default App
