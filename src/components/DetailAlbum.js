import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(9)
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500
  },
  img: {
    margin: 'auto',
    marginBottom: theme.spacing(2),
    display: 'block',
    maxWidth: '50%',
    maxHeight: '50%'
  }
}));

const DetailAlbum = ({ data }) => {
  const classes = useStyles();
  const {
    id,
    album_title,
    album_artist,
    album_coverImg,
    genre,
    company,
    quality,
    releaseDate
  } = data;
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container>
          <Grid item>
            <Grid item>
              <img
                className={classes.img}
                alt='trackImage'
                src={album_coverImg}
              />
            </Grid>
            <Grid item xs={12} container direction='row' spacing={1}>
              <Grid item xs={1}></Grid>
              <Grid item xs={3}>
                {['아티스트', '앨범명', '장르', '발매일', '기획사', '음질'].map(
                  val => (
                    <Typography key={id + val} gutterBottom variant='subtitle1'>
                      {val}
                    </Typography>
                  )
                )}
              </Grid>
              <Grid item xs>
                {[
                  album_title,
                  album_artist,
                  genre,
                  releaseDate,
                  company,
                  quality
                ].map(val => (
                  <Typography key={id + val} gutterBottom variant='subtitle1'>
                    {val}
                  </Typography>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default DetailAlbum;
