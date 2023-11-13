import { useNavigate } from 'react-router-dom'
import { Typography } from '@mui/material'
import ExtendedButton from '../../components/atoms/Button'
import {
  StyledBox,
  StyledContainer,
} from '../../components/organisms/LoginForm'
interface HomeProps {
  onClick?: (logout: boolean) => void
}
const Home = ({ onClick }: HomeProps) => {
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('user') || '{}')

  const handleLogout = () => {
    localStorage.removeItem('user')
    onClick && onClick(false)
    navigate('/')
  }

  return (
    <StyledContainer>
      <StyledBox
        sx={{
          width: '100%',
          height: '90%',
        }}
      >
        <Typography variant="h4">Welcome, {user.name}</Typography>
        <Typography variant="h5">Your Email Is : {user.email}</Typography>
        <ExtendedButton onClick={handleLogout}>Logout</ExtendedButton>
      </StyledBox>
    </StyledContainer>
  )
}

export default Home
