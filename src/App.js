import * as React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Unstable_Grid2'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import avatar from './avatar.png'
import Home from './Home'
import Skills from './Skills'
import About from './About'

function App() {
  const [value, setValue] = React.useState(0)

  return (
    <Box sx={{ width: '100%' }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => {
              setValue(0)
            }}
          >
            <img
              src={avatar}
              alt="software engineer"
              style={{ height: '5vh' }}
            />
          </IconButton>
          <Button
            color="inherit"
            onClick={() => {
              setValue(1)
            }}
          >
            Skills
          </Button>
          <Button
            color="inherit"
            onClick={() => {
              setValue(2)
            }}
          >
            About
          </Button>
          <Button
            color="inherit"
            onClick={() => {
              setValue(3)
            }}
          >
            Contact
          </Button>
        </Toolbar>
      </AppBar>
      <Grid
        container
        spacing={5}
        xs
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ marginTop: '5vh', paddingX: '5vw' }}
      >
        {value === 0 && <Home />}
        {value === 1 && <Skills />}
        {value === 2 && <About />}
      </Grid>
    </Box>
  )
}

export default App
