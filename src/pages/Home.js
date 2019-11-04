import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Section from '../components/Section';
import Copyright from '../components/CopyRight';
import { PREFIX_URL } from '../util/util';

const Home = () => {
  const [albums, setAlbums] = useState([]);

  // TODO: Life Cycle Method
  useEffect(() => {
    fetchAlbums();
  }, []);

  // TODO: Fetch Albums Data
  const fetchAlbums = async () => {
    try {
      const response = await axios.get(`${PREFIX_URL}/api/album`);
      setAlbums(response.data);
      return;
    } catch (err) {
      console.log(err);
      return;
    }
  };

  // TODO: no fetch data
  if (!albums.length) return <div>Loading...</div>;

  return (
    <>
      <Section albums={albums} />
      <Copyright />
    </>
  );
};

export default Home;
