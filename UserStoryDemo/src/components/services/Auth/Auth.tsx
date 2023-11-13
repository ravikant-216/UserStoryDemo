import { useState } from 'react'
import { user } from '../../../utils/user'

export const useAuth = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleCheckEmailPassword = () => {
    const matchedUser = user.find(
      (user) => user.email === email && user.password === password
    )

    if (matchedUser) {
      localStorage.setItem('user', JSON.stringify({ ...matchedUser }))
      return true
    } else {
      if (email !== '' && password !== '') {
        window.alert('Invalid Email or Password')
      }
      return false
    }
  }

  return {
    email,
    setEmail,
    password,
    setPassword,
    handleCheckEmailPassword,
  }
}
