import React from 'react';
import {  
  Container,
  Grid,
  Link,
  makeStyles,
  Typography
} from '@material-ui/core';
import Page from 'src/components/Page';
import { Section } from './Section';
import { Tiles } from './Tiles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  spacer: {
    marginBottom: '40px;'
  }  
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Dashboard"
    >
      <Container maxWidth={false}>
        <Section title1="Nouveaux" title2="poste" showAll={true}></Section>
        <Tiles className={classes.spacer}></Tiles>         
      </Container>
    </Page>
  );
};

export default Dashboard;
