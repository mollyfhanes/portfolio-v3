import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import avatar from './avatar.png';

export default function Home() {
    return (
        <Grid container sx={{marginTop: '5vh'}}>
          <Grid sx={{height: '30vh', maxHeight: '500px'}}>
            <img src={avatar} alt="software engineer" style={{height: '100%'}} />
          </Grid>
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
        </Grid>
    )
}