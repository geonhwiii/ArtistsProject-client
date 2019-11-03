import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Container
} from '@material-ui/core';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
    maxWidth: 500
  },
  list: {}
}));

const DetailSection = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root} align='center'>
      <List className={classes.list}>
        {[0, 1, 2, 3].map(val => (
          <ListItem key={val} dense button>
            <ListItemText id={val} primary={`PRIMARY`} />
            <ListItemText id={val} secondary={`ASH ISLAND`} />
            <ListItemSecondaryAction>
              <IconButton edge='end' aria-label='comments'>
                <PlayCircleOutlineIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default DetailSection;
