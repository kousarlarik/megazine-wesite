import React, { useEffect } from 'react';
import hero from '../../asest/hero.svg';
import './HeroSection.css';
import { Box, Typography } from '@mui/material';
import text from '../../asest/text-img.png'; 
import gsap from 'gsap';

const HeroSection = () => {
  
  useEffect(() => {
    // span
    gsap.to("span", {
      duration: 1,
      x: 30,
      opacity: 1,
      delay: 0.5,
      stagger: 0.3,
    });

    // image
    gsap.fromTo(
      ".img-fluid",
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, delay: 1 }
    );

   
    gsap.fromTo(
      "span:first-of-type",
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, delay: 1.5 }
    );

   
  }, []);

  return (
    <div
      className="hero-section flex items-center justify-center text-white text-4xl"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: 'auto',
        paddingRight: '20px', 
      }}
    >
      <Box className="container" style={{ marginTop: '-80px' }}> 
        {/* Heading */}
        <Typography
          variant="span"
          className="text-white"
          style={{
            textTransform: 'uppercase',
            textAlign: 'left', 
            display: 'block',
            opacity: 0, // Hidden initially for animation
          }}
        >
          Revolutionize night cycling with
        </Typography>

        {/* Image */}
        <img
          width={250}
          className="img-fluid d-block"
          src={text}
          alt="Spectralite Logo"
          style={{ marginLeft: '0', opacity: 0 }} // Hidden initially for animation
        />

        {/* Subtext */}
        <Typography
          variant="span"
          className="text-white uppercase text-center mx-auto max-w-lg leading-tight"
          style={{ marginTop: '20px', opacity: 0 }} // Hidden initially for animation
        >
          Experience unmatched visibility & safety with Spectralite’s <br className="mb-0" />
          innovative lighting for every night cyclist.
        </Typography>
      </Box>
    </div>
  );
};

export default HeroSection;
