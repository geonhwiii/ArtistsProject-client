import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

// TODO: Header Styles
const styles = theme => ({
  title: {
    fontSize: 24
  },
  toolbar: {
    justifyContent: 'center',
    backgroundColor: 'rgb(38, 38, 38)'
  }
});

// TODO: Main
const Header = props => {
  const { classes } = props;

  return (
    <div>
      <AppBar position='fixed'>
        <Toolbar className={classes.toolbar}>
          <Link
            variant='h6'
            underline='none'
            color='inherit'
            className={classes.title}
            href='/'
          >
            {'ARTISTS PROJECT'}
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
