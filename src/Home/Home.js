import React from "react";
import { Link } from 'react-router-dom';

import Title from './title.jsx';

function Logotipo (props) {
  return <img src={props.path} id="logo"/>
}

class Home extends React.Component {
  render() {
    return (
      <div>
        <Logotipo path="/src/logo.svg"/>
        <Title greeting="Welcome to your first StealJS and React app!" />
        
        <Link to="/about">Go to About page</Link>
      </div>
    );
  }
};

export default Home;