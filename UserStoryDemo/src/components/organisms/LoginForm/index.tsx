import { Box, Container, styled } from '@mui/material'
import React from 'react'
import InputField from '../../atoms/InputField'
import { EMAIL_MESSAGE, EMAIL_REGEX } from '../../../utils/constant'
import ExtendedButton from '../../atoms/Button'

interface LoginFormProps {
  onSubmit: (email: string, password: string) => void
}
export const StyledContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '97vh',
})

export const StyledBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '16px',
  justifyContent: 'center',
  width: '500px',
  height: '300px',
  padding: '36px',
  border: '2px solid #338BA8',
  borderRadius: '18px',
})

const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const [email, setEmail] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')
  const [emailError, setEmailError] = React.useState<boolean>(false)
  return (
    <StyledContainer>
      <StyledBox>
        <InputField
          label={'Email'}
          placeholder="Enter Email"
          error={emailError}
          helperText={emailError ? EMAIL_MESSAGE : ''}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setEmailError(!EMAIL_REGEX.test(e.target.value))
            setEmail(e.target.value)
          }}
        ></InputField>
        <InputField
          label={'Password'}
          placeholder="Enter Password"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setPassword(e.target.value)
          }}
        ></InputField>
        <ExtendedButton
          disabled={emailError || !email || !password}
          variant="contained"
          onClick={() => {
            onSubmit(email, password)
          }}
        >
          Go For Verification
        </ExtendedButton>
      </StyledBox>
    </StyledContainer>
  )
}

export default LoginForm
