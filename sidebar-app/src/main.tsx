import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Sidebar from './sidebar/sidebar';
import { createRoot } from 'react-dom/client';

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Sidebar,
});

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);
  root.render(<Sidebar />);
} else {
  console.error("Root container 'root' not found.");
}

export const { bootstrap, mount, unmount } = lifecycles;

console.log('Bootstrap sidebar:', bootstrap);
console.log('Mount sidebar:', mount);
console.log('Unmount sidebar:', unmount);