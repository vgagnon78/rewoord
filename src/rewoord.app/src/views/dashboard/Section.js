import React from 'react';

import {
  Grid,
  makeStyles,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    color: '#999',
    marginBottom: '15px',
    paddingRight: '16px'
  }
}));

export const Section = props => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="center"
      className={classes.title}>
      <Grid item>
        <Typography variant="h4"><strong>{props.title1}</strong> <span style={{ fontWeight: 'normal' }}>{props.title2}</span></Typography>
      </Grid>
      {
        props.showAll &&
        <Grid item>
          <Typography variant="caption">Voir plus</Typography>
        </Grid>
      }
    </Grid>
  );
};