import React from 'react';
import { Button } from '@material-ui/core'
import './home.css';

function Home() {

  return (
    <div className="home">
      <div className="animate-pop-in">
        <h1 className="big-big mb-0">Hi, I'm Taylor.</h1>
        <h2 className="mt-0">I build user interfaces.</h2>
      </div>
      <div className="animate-pop-in">
        I'm a front-end software engineer based out of Omaha, Nebraska. 
      </div>
      <Button variant="outlined" color="primary" className="mt-60">
        Contact Me
      </Button>
    </div>
  )
}

export default Home;
