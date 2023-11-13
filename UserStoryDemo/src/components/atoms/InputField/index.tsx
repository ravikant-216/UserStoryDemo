import { TextField, TextFieldProps as MuiTextFieldProps } from '@mui/material'
import React from 'react'

type TextFieldProps = MuiTextFieldProps & {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const InputField: React.FC<TextFieldProps> = (props) => {
  return (
    <TextField
      fullWidth
      variant="outlined"
      {...props}
      sx={{
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: '#338BA8',
          },
          '&:hover fieldset': {
            borderColor: '#338BA8',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#338BA8',
          },
        },
      }}
    />
  )
}

export default InputField
