import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Container,
  Typography,
  CssBaseline
} from '@material-ui/core';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
    maxWidth: 550
  },
  trackOrder: {
    width: 8,
    marginRight: theme.spacing(3)
  }
}));

const DetailSection = ({ tracks }) => {
  const classes = useStyles();
  if (!tracks) return <div>Loading...</div>;
  return (
    <Container className={classes.root} align='center'>
      <CssBaseline />
      <List className={classes.list}>
        {tracks.map((track, i) => {
          const { id, track_title, track_artist, track_url, playtime } = track;
          return (
            <ListItem key={id} dense button>
              <Typography
                className={classes.trackOrder}
                component='p'
                variant='subtitle1'
                color='textSecondary'
                id={id}
              >
                {i + 1}
              </Typography>
              <ListItemText
                id={id}
                primary={track_title}
                secondary={track_artist}
              />

              <ListItemSecondaryAction>
                <IconButton edge='end' aria-label='comments'>
                  <PlayCircleOutlineIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
};

export default DetailSection;
