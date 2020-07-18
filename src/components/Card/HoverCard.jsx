import React from "react";
import "./hovercard.css";

const HoverCard = () => {
  return (
    <section className='body-container'>
      <div className='project-title'>
        <h4>Latest Projects.</h4>
      </div>
      <div className='wrapper'>
        <div className='card'>
          <img src='/img/drums.png' />
          <div className='info'>
            <h2>Drum Machine</h2>
            <p>HTML5, Flex Box CSS3, and Javascript.</p>
            <a className='button' href='https://pheedme.netlify.com/'>
              Demo
            </a>
          </div>
        </div>

        <div className='card'>
          <img src='/img/movies.jpg' />
          <div className='info'>
            <h2>TMDB Movie App</h2>
            <p> React, React Hooks, FlexBox</p>
            <a
              className='button'
              href='https://eloquent-edison-a1172e.netlify.com/'
            >
              Demo
            </a>
          </div>
        </div>

        <div className='card'>
          <img src='/img/store.png' />
          <div className='info'>
            <h2>ECommerce Application</h2>
            <p> React, Redux, Router, Firebase</p>
            <a
              className='button'
              href='https://eager-almeida-2b0f40.netlify.com/'
            >
              Demo
            </a>
          </div>
        </div>

        <div className='card'>
          <img src='/img/starwars.png' />
          <div className='info'>
            <h2>Star Wars API</h2>
            <p>React</p>
            <a
              className='button'
              href='https://mystifying-clarke-73db29.netlify.com/'
            >
              Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HoverCard;
