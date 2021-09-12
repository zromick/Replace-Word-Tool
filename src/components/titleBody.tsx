import React from 'react';
import { Grid, Typography, Input } from '@material-ui/core';

const TitleBody = () => {
  return (
    <Grid item container justify="center" xs={12}>
      <Grid item container justify="center" xs={12}>
        <Typography variant="h3">
          <Input
            color="primary"
            autoFocus
            defaultValue="Replace"
            inputProps={{ style: { fontSize: 45, width: 160 } }}
          />
          {` Word Tool`}
        </Typography>
      </Grid>
      <Grid item container justify="center" xs={12}>
        <Typography>An Experimental Word Replacement Tool By <a href="https://github.com/zromick">Zac Romick</a></Typography>
      </Grid>
    </Grid>
  );
}

export default TitleBody;