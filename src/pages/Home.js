import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Section from '../components/Section';
import Copyright from '../components/CopyRight';

const Home = () => {
  const [albums, setAlbums] = useState([]);

  // TODO: Life Cycle Method
  useEffect(() => {
    fetchAlbums();
  }, []);

  // TODO: Fetch Albums Data
  const fetchAlbums = async () => {
    try {
      const response = await axios.get('http://13.125.107.126:8000/api/album');
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
    <div>
      <Section albums={albums} />
      <Copyright />
    </div>
  );
};

export default Home;
