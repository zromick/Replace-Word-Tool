import React from 'react';
import {
  Grid,
  Typography,
  // Button,
} from '@material-ui/core';
import styles from '../styles.module.scss';

const IntroductionBody = () => {
  return (
    <Grid item container justify="center" xs={12}>
      <Grid item container justify="center" xs={12}>
        <div className={styles.basicMargin}>
          <Grid container item xs={12}>
            <Typography variant="h5">
              Introduction
            </Typography>
          </Grid>
        </div>
      </Grid>
      <Grid item container justify="center" xs={12} id='introductionBody'>
        <Grid item xs={12}>
          <div className={styles.introSpacing}>
            <Typography variant="body1" >
              Hi! Welcome to a passion project of mine. This app is built using TypeScript, React, and Material-UI and is hosted on GitHub Pages.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={styles.introSpacing}>
            <Typography variant="body1" >
              This app allows for global, one-time replacement of words within a body of text.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={styles.introSpacing}>
            <Typography variant="body1" >
              Click "NEXT" to begin.
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default IntroductionBody;