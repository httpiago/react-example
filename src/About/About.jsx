import React from "react";
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">Go back to Home</Link>
        <h2>Sobre mim:</h2>
      </div>
    );
  }
};

export default Home;