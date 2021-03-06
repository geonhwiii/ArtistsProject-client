/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DetailSection from '../components/DetailSection';
import DetailAlbum from '../components/DetailAlbum';
import Copyright from '../components/CopyRight';
import { PREFIX_URL } from '../util/util';

const Detail = ({ match, setTrackUrl, setHidePlayer }) => {
  const [data, setData] = useState(null);
  const { id } = match.params;

  // TODO: Life Cycle Method
  useEffect(() => {
    fetchData();
  }, []);

  // TODO: Fetch Album Tracks Data
  const fetchData = async () => {
    const response = await axios.get(`${PREFIX_URL}/api/album/${id}`);
    setData(response.data);
    return;
  };

  // TODO: Get url by Selecting Track & Show Audio player
  const selectTrack = url => {
    setTrackUrl(url);
    setHidePlayer(false);
  };

  // TODO: Prevent error
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <DetailAlbum data={data} />
      <DetailSection tracks={data.Tracks} handleClick={selectTrack} />
      <Copyright />
    </>
  );
};

export default Detail;
