import * as React from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Unstable_Grid2'
import Button from '@mui/material/Button'

export default function About() {
  return (
    <Grid>
      <Typography variant="h3">My Experience</Typography>
      <Typography variant="body1">
        I have been a software engineer since 2018. Currently I work remotely
        for Amazon, from my home in Houston, Texas. Prior to that, I worked for
        Stripe.
      </Typography>
      <br />
      <Button
        href="https://docs.google.com/document/d/1cgOXR7_OOMIE66wCzcwQhlG6Fcg5uR2jeYHh5HsqIPc/edit?usp=sharing"
        target="_blank"
        variant="outlined"
      >
        View my resume
      </Button>
    </Grid>
  )
}
