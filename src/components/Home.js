import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Generates Random Greeting</h1>
    <Link to="/greeting"><button type="button">Random Greeting</button></Link>
  </div>
);

export default Home;
