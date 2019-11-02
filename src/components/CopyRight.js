import React from 'react';
import { Typography, Link, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  copyrightContainer: {
    marginTop: theme.spacing(2)
  }
}));

const Copyright = () => {
  const classes = useStyles();

  return (
    <Container className={classes.copyrightContainer}>
      <Typography variant='body2' color='textSecondary' align='center'>
        {'Copyright © '}
        <Link color='inherit' href='https://classicmanager.com'>
          Classic Manager
        </Link>
        {`  ${new Date().getFullYear()}.${new Date().getMonth() + 1}`}
      </Typography>
    </Container>
  );
};

export default Copyright;
