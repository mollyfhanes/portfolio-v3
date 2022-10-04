import Grid from '@mui/material/Unstable_Grid2'
import Typography from '@mui/material/Typography'

export default function Home() {
  return (
    <Grid>
      <Typography variant="h1" gutterBottom>
        Hello!
      </Typography>
      <Typography variant="h3" gutterBottom>
        My name is Molly Hanes.
      </Typography>
      <Typography variant="h5" gutterBottom>
        I'm a full stack software developer based in Houston, Texas.
      </Typography>
    </Grid>
  )
}
