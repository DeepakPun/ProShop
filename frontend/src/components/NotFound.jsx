import React from 'react';
// import { Link } from 'react-router-dom';
import { Image, Button } from 'react-bootstrap';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Sorry!! Route Not Found.</h1>
      <Image
        src='https://images.unsplash.com/photo-1584824486509-112e4181ff6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
        alt='Not Found'
        style={{ width: '50vw', height: '50vh' }}
      />
      <br />
      <br />
      <Button variant='primary' style={{ width: '75%' }} href='/'>
        Home
      </Button>
      <br />
      <p>
        Images Courtesy of{' '}
        <a href='https://www.unsplash.com' target='_blank' rel='noreferrer'>
          Unsplash
        </a>
      </p>
    </div>
  );
};

export default NotFound;
