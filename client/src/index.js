import React from 'react';
import ReactDOM from 'react-dom';
import GalleryPage from './composites/GalleryPage';

//import './index.css';
require('bootstrap/dist/css/bootstrap.min.css');

ReactDOM.render(
  <GalleryPage />,
  document.getElementById('app')
);
