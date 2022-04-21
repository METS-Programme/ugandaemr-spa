import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { spaBasePath } from './constants';

export default function Root() {
  return <BrowserRouter basename={spaBasePath}>
    <h2>Uganda EMR</h2>
    <h3>Cervical Cancer App</h3>
  </BrowserRouter>;
}
