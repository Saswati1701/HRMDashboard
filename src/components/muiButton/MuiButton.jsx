import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


const MuiButton = ({buttonText, onClick}) => {
  return (
    <Stack direction="row">
      <Button
       onClick={onClick}
       variant="contained"
       >{buttonText}</Button>
    </Stack>
  )
}

export default MuiButton