import React from 'react'
import Button, { ButtonProps as MuiButtonProps } from '@mui/material/Button'

interface ExtendedButtonProps extends MuiButtonProps {
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
}

const ExtendedButton: React.FC<ExtendedButtonProps> = (props) => {
  const { startIcon, endIcon, ...otherProps } = props

  return (
    <Button
      startIcon={startIcon}
      endIcon={endIcon}
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
