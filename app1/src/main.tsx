import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import {App} from './App';


// Configure the lifecycle methods for the microfrontend using single-spa-react
// singleSpaReact wraps the React app and provides lifecycle hooks (bootstrap, mount, unmount)
const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App, // Specify the root React component to render in this microfrontend
});


// Export the lifecycle functions for single-spa
// These functions are used by the single-spa framework to manage this microfrontend
export const { bootstrap, mount, unmount } = lifecycles;
