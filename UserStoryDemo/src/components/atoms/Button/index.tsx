import React from 'react'
import Button, { ButtonProps as MuiButtonProps } from '@mui/material/Button'

const ExtendedButton: React.FC<MuiButtonProps> = (props) => {
  const { ...otherProps } = props

  return (
    <Button
      {...otherProps}
      sx={{
        borderRadius: '18px',
        backgroundColor: '#338BA8',
        color: '#fff',
        '&:hover': {
          backgroundColor: '#338BA8',
          color: '#fff',
        },
        '&:disabled': {
          backgroundColor: '#338BA8',
          opacity: 0.5,
          color: '#fff',
        },
      }}
    />
  )
}

export default ExtendedButton
