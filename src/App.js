import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Unstable_Grid2'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import avatar from './avatar.png'
import Home from './Home'
import Skills from './Skills'

function App() {
  const [value, setValue] = React.useState(0)
  const handleChange = (e, newValue) => setValue(newValue)

  return (
    <Box sx={{ width: '100%', paddingLeft: '5vw', paddingRight: '5vw'}}>
      <Tabs variant="fullWidth" value={value} onChange={handleChange}>
        <Tab label="Home" />
        <Tab label="Skills" />
        <Tab label="About" />
        <Tab label="Contact" />
      </Tabs>
      <Grid container spacing={5} xs display="flex" justifyContent="center" alignItems="center">
        {value === 0 && <Home />}
        {value === 1 && <Skills />}
      </Grid>
    </Box>
  )
}

export default App
