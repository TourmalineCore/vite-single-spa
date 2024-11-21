import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import {App} from './App';

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
});

export const { bootstrap, mount, unmount } = lifecycles;

console.log('Bootstrap app1:', bootstrap);
console.log('Mount app1:', mount);
console.log('Unmount app1:', unmount);