/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import PropTypes from 'prop-types';
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
  const { classes } = props;

  const albums = [
    {
      id: 1,
      imageUrl: 'https://image.bugsm.co.kr/album/images/1000/9396/939672.jpg',
      title: '유플래쉬',
      artist: '유재석'
    },
    {
      id: 2,
      imageUrl:
        'https://image.bugsm.co.kr/album/images/1000/202788/20278851.jpg',
      title: '항해',
      artist: '악동뮤지션'
    },
    {
      id: 3,
      imageUrl:
        'https://image.bugsm.co.kr/album/images/1000/202815/20281520.jpg',
      title: '만추',
      artist: '헤이즈'
    },
    {
      id: 4,
      imageUrl:
        'https://image.bugsm.co.kr/album/images/1000/202807/20280755.jpg',
      title: '마음, 하나',
      artist: '폴킴'
    },
    {
      id: 5,
      imageUrl:
        'https://image.bugsm.co.kr/album/images/1000/202799/20279972.jpg',
      title: '사랑하는 그대에게',
      artist: '첸'
    },
    {
      id: 6,
      imageUrl:
        'https://image.bugsm.co.kr/album/images/1000/202782/20278239.jpg',
      title: 'Feel Special',
      artist: '트와이스'
    }
  ];

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
          <Grid item key={album.id} xs={6} sm={3}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.cardMedia}
                  image={album.imageUrl}
                  title='놀면뭐하니'
                />
                <CardContent>
                  <Typography
                    component='h5'
                    variant='h6'
                    color='inherit'
                    noWrap
                  >
                    {album.title}
                  </Typography>
                  <Typography
                    variant='body2'
                    color='textSecondary'
                    component='p'
                  >
                    {album.artist}
                  </Typography>
                </CardContent>
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
