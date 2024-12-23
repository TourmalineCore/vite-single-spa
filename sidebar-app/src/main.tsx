import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Sidebar from './sidebar/sidebar';
import { createRoot } from 'react-dom/client';

// Configure the lifecycle methods for the microfrontend using single-spa-react
// singleSpaReact wraps the React app and provides lifecycle hooks (bootstrap, mount, unmount)
const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Sidebar, // Specify the root React component to render in this microfrontend
});

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);
  root.render(<Sidebar />);
} else {
  console.error("Root container 'root' not found.");
}

// Export the lifecycle functions for single-spa
// These functions are used by the single-spa framework to manage this microfrontend
export const { bootstrap, mount, unmount } = lifecycles;
