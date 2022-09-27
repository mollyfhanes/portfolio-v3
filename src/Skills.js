import Grid from '@mui/material/Unstable_Grid2'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container'
import Icon from './Icon'

export default function Skills() {
    return (
        <Grid container sx={{marginTop: '5vh'}}>
            <Grid>
                <Container sx={{width: '100%'}}>
                    <Icon name='ruby' />
                    <Typography align='center' variant='overline'>Ruby</Typography>
                </Container>
            </Grid>
            <Grid>
                <Icon name='js' />
                <Typography variant='overline'>JavaScript</Typography>
            </Grid>
            <Grid>
                <Icon name='node' />
                <Typography variant='overline'>Node.js</Typography>
            </Grid>
            <Grid>
                <Icon name='python' />
                <Typography variant='overline'>Python</Typography>
            </Grid>
            <Grid>
                <Icon name='react' />
                <Typography variant='overline'>ReactJS</Typography>
            </Grid>
            <Grid>
                <Icon name='html' />
                <Typography variant='overline'>HTML5</Typography>
            </Grid>
            <Grid>
                <Icon name='css' />
                <Typography variant='overline'>CSS3</Typography>
            </Grid>
            <Grid>
                <Icon name='redux' />
                <Typography variant='overline'>Redux</Typography>
            </Grid>
            <Grid>
                <Icon name='d3' />
                <Typography variant='overline'>D3.js</Typography>
            </Grid>
            <Grid>
                <Icon name='mongo' />
                <Typography variant='overline'>MongoDB</Typography>
            </Grid>
            <Grid>
                <Icon name='postgres' />
                <Typography variant='overline'>PostgreSQL</Typography>
            </Grid>
        </Grid>
    )
}