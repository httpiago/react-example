import React from "react";
import { Link } from 'react-router-dom';
import Title from './src/title.jsx';

class Home extends React.Component {
  render() {
    return (
      <div>
        <img src="/src/logo.svg" id="logo"/>
        <Title greeting="Welcome to your first StealJS and React app!" />
        
        <Link to="/about">Go to About page</Link>
      </div>
    );
  }
};

export default Home;