import React from 'react'
import { TextField } from '@mui/material'
import { Box } from '@mui/material'

const InputBox = ({label, onChange}) => {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label={label}
        //   defaultValue="Hello World"
        onChange= {onChange}
        />
      </div>
    </Box>
  )
}

export default InputBox