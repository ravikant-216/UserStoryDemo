import React from 'react'
import InputField from '../../atoms/InputField'
import { useNavigate } from 'react-router-dom'
import ExtendedButton from '../../atoms/Button'
import { StyledBox, StyledContainer } from '../LoginForm'
import { OTP_MESSAGE } from '../../../utils/constant'
interface OtpProps {
  onClick?: (otp: string) => void
}
const OTPCheck = ({ onClick }: OtpProps) => {
  const navigate = useNavigate()
  const [otp, setOtp] = React.useState<string>('')
  const [otpError, setOtpError] = React.useState<boolean>(false)
  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtpError(e.target.value.length !== 6)
    setOtp(e.target.value)
  }
  const onSubmit = () => {
    onClick && onClick(otp)
    navigate('/home')
  }
  return (
    <StyledContainer>
      <StyledBox>
        <InputField
          label={'OTP'}
          type={'number'}
          placeholder="Enter OTP"
          error={otpError}
          helperText={otpError ? OTP_MESSAGE : ''}
          onChange={handleChanges}
        ></InputField>
        <ExtendedButton
          onClick={onSubmit}
          disabled={otpError || !otp}
          variant="contained"
        >
          Verify
        </ExtendedButton>
      </StyledBox>
    </StyledContainer>
  )
}

export default OTPCheck
