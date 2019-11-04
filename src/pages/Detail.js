/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DetailSection from '../components/DetailSection';
import DetailAlbum from '../components/DetailAlbum';
import Copyright from '../components/CopyRight';
import { PREFIX_URL } from '../util/util';

const Detail = ({ match }) => {
  const [data, setData] = useState(null);
  const { id } = match.params;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get(`${PREFIX_URL}/api/album/${id}`);
    setData(response.data);
    return;
  };
  if (!data) return <div>Loading...</div>;
  return (
    <div>
      <DetailAlbum data={data} />
      <DetailSection tracks={data.Tracks} />
      <Copyright />
    </div>
  );
};

export default Detail;
