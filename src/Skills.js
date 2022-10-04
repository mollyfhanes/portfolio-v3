import * as React from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import Typography from '@mui/material/Typography'
import Icon from './Icon'

export default function Skills() {
  return (
    <React.Fragment>
      <Grid>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Icon name="ruby" />
          <div style={{ width: '100%', textAlign: 'center' }}>
            <Typography align="center" variant="overline">
              Ruby
            </Typography>
          </div>
        </Grid>
      </Grid>
      <Grid>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Icon name="js" />
          <div style={{ width: '100%', textAlign: 'center' }}>
            <Typography align="center" variant="overline">
              JavaScript
            </Typography>
          </div>
        </Grid>
      </Grid>
      <Grid>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Icon name="node" />
          <div style={{ width: '100%', textAlign: 'center' }}>
            <Typography align="center" variant="overline">
              Node.js
            </Typography>
          </div>
        </Grid>
      </Grid>
      <Grid>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Icon name="python" />
          <div style={{ width: '100%', textAlign: 'center' }}>
            <Typography align="center" variant="overline">
              Python
            </Typography>
          </div>
        </Grid>
      </Grid>
      <Grid>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Icon name="react" />
          <div style={{ width: '100%', textAlign: 'center' }}>
            <Typography align="center" variant="overline">
              ReactJS
            </Typography>
          </div>
        </Grid>
      </Grid>
      <Grid>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Icon name="html" />
          <div style={{ width: '100%', textAlign: 'center' }}>
            <Typography align="center" variant="overline">
              HTML5
            </Typography>
          </div>
        </Grid>
      </Grid>
      <Grid>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Icon name="css" />
          <div style={{ width: '100%', textAlign: 'center' }}>
            <Typography align="center" variant="overline">
              CSS3
            </Typography>
          </div>
        </Grid>
      </Grid>
      <Grid>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Icon name="redux" />
          <div style={{ width: '100%', textAlign: 'center' }}>
            <Typography align="center" variant="overline">
              Redux
            </Typography>
          </div>
        </Grid>
      </Grid>
      <Grid>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Icon name="d3" />
          <div style={{ width: '100%', textAlign: 'center' }}>
            <Typography align="center" variant="overline">
              D3.js
            </Typography>
          </div>
        </Grid>
      </Grid>
      <Grid>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Icon name="mongo" />
          <div style={{ width: '100%', textAlign: 'center' }}>
            <Typography align="center" variant="overline">
              MongoDB
            </Typography>
          </div>
        </Grid>
      </Grid>
      <Grid>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Icon name="postgres" />
          <div style={{ width: '100%', textAlign: 'center' }}>
            <Typography align="center" variant="overline">
              PostgreSQL
            </Typography>
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
