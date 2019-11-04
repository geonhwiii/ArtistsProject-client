/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
  Typography,
  Container,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  CssBaseline,
  Grid
} from '@material-ui/core';

const styles = theme => ({
  cardContainer: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
    padding: theme.spacing(1)
  },
  card: {
    contentLayout: 'center'
  },
  cardMedia: {
    height: 100
  },
  sectionTitle: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2)
  }
});

// TODO: Main
const Section = props => {
  const { classes, albums } = props;

  if (!albums.length) return <div>Loading...</div>;
  return (
    <Container
      className={classes.cardContainer}
      component='section'
      maxWidth='md'
    >
      <CssBaseline />
      <Typography className={classes.sectionTitle} component='h6' variant='h6'>
        🏆 Main Albums
      </Typography>
      <Grid container spacing={2}>
        {albums.map(album => (
          <Grid item key={album.id} id={album.id} xs={6} sm={3}>
            <Card className={classes.card}>
              <CardActionArea>
                <Link
                  component={RouterLink}
                  to={`/detail/${album.id}`}
                  underline='none'
                  color='inherit'
                >
                  <CardMedia
                    className={classes.cardMedia}
                    image={album.album_coverImg}
                    title={album.album_title}
                  />
                  <CardContent>
                    <Typography
                      component='h5'
                      variant='h6'
                      color='inherit'
                      noWrap
                    >
                      {album.album_title}
                    </Typography>
                    <Typography
                      variant='body2'
                      color='textSecondary'
                      component='p'
                    >
                      {album.album_artist}
                    </Typography>
                  </CardContent>
                </Link>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

Section.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Section);
