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

const DetailAlbum = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container>
          <Grid item>
            <Grid item>
              <img
                className={classes.img}
                alt='trackImage'
                src='https://image.bugsm.co.kr/album/images/original/202799/20279972.jpg?version=undefined'
              />
            </Grid>
            <Grid item xs={12} container direction='row' spacing={1}>
              <Grid item xs={1}></Grid>
              <Grid item xs={3}>
                <Typography gutterBottom variant='subtitle1'>
                  아티스트
                </Typography>
                <Typography gutterBottom variant='subtitle1'>
                  앨범명
                </Typography>
                <Typography gutterBottom variant='subtitle1'>
                  장르
                </Typography>
                <Typography gutterBottom variant='subtitle1'>
                  발매일
                </Typography>
                <Typography gutterBottom variant='subtitle1'>
                  기획사
                </Typography>
                <Typography gutterBottom variant='subtitle1'>
                  음질
                </Typography>
              </Grid>
              <Grid item xs>
                <Typography gutterBottom variant='subtitle1'>
                  첸
                </Typography>
                <Typography gutterBottom variant='subtitle1'>
                  사랑하는 그대에게
                </Typography>
                <Typography gutterBottom variant='subtitle1'>
                  발라드
                </Typography>
                <Typography gutterBottom variant='subtitle1'>
                  2019.10.01
                </Typography>
                <Typography gutterBottom variant='subtitle1'>
                  SM ENTERTAINMENT
                </Typography>
                <Typography gutterBottom variant='subtitle1'>
                  FLAC 16bit
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default DetailAlbum;
