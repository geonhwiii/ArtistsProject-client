import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import { Container } from '@material-ui/core';

const Player = ({ url, hidePlayer, setHidePlayer }) => {
  return (
    <Container
      style={{
        bottom: -20,
        position: 'fixed',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }}
    >
      <AudioPlayer
        src={url}
        hidePlayer={hidePlayer}
        onEnded={() => setHidePlayer(true)}
      />
    </Container>
  );
};

export default Player;
