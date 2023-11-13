import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import LoginForm from '../../organisms/LoginForm'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../services/Auth/Auth'

interface LoginProp {
  onSubmit: (isAuthenticated: boolean) => void
}

const Login = ({ onSubmit }: LoginProp) => {
  const navigate = useNavigate()
  const { email, setEmail, password, setPassword, handleCheckEmailPassword } =
    useAuth()

  useEffect(() => {
    if (email && password && handleCheckEmailPassword()) {
      navigate('/otp-verify')
      onSubmit(true)
    }
  }, [email, password, handleCheckEmailPassword, navigate, onSubmit])

  const handleSubmit = (email: string, password: string) => {
    setEmail(email)
    setPassword(password)
  }

  return (
    <Box>
      <LoginForm onSubmit={handleSubmit} />
    </Box>
  )
}

export default Login
