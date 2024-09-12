import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'
import React from 'react'

const loading = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress color="secondary" />
    </Box>
  )
}

export default loading