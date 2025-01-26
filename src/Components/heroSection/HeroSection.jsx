import React from 'react';
import hero from '../../asest/hero.svg';
import './HeroSection.css';
import { Box, Typography } from '@mui/material';
import text from '../../asest/text-img.png'; 

const HeroSection = () => {
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
        {/* Main Heading */}
        <Typography
          variant="span"
          className="text-white"
          style={{
            textTransform: 'uppercase',
            textAlign: 'left', 
            display: 'block',
          }}
        >
          Revolutionize night cycling with
        </Typography>

        {/* Image*/}
        <img
          width={250}
          className="img-fluid d-block" 
          src={text}
          alt="Spectralite Logo"
          style={{ marginLeft: '0' }} 
        />

        {/* Subtext */}
        <Typography
          variant="span"
          className="text-white uppercase text-center mx-auto max-w-lg leading-tight"
          style={{ marginTop: '20px' }} 
        >
          Experience unmatched visibility & safety with Spectralite’s <br className="mb-0" />
          innovative lighting for every night cyclist.
        </Typography>
      </Box>
    </div>
  );
};

export default HeroSection;
