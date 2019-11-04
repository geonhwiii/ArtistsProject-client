import React from 'react';
import DetailSection from '../components/DetailSection';
import DetailAlbum from '../components/DetailAlbum';
import Copyright from '../components/CopyRight';

const Detail = ({ match }) => {
  console.log(match.params);
  return (
    <div>
      <DetailAlbum />
      <DetailSection />
      <Copyright />
    </div>
  );
};

export default Detail;
