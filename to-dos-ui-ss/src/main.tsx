import './index.css'

import React from 'react'
// import ReactDOMClient from 'react-dom/client'
import ReactDOM from 'react-dom'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import { HomePage } from './pages/home/HomePage.tsx'
import { ToDosPage } from './pages/to-dos/ToDosPage.tsx'
import singleSpaReact from 'single-spa-react'

declare global {
  // this makes TS errors go away https://stackoverflow.com/a/56458070
  interface Window {
    __ENV__: {
      VITE_API_ROOT: string,
    },
  }
}

// Configure the lifecycle methods for the microfrontend using single-spa-react
// singleSpaReact wraps the React app and provides lifecycle hooks (bootstrap, mount, unmount)
const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: ToDosPage, // Specify the root React component to render in this microfrontend
})

// Export the lifecycle functions for single-spa
// These functions are used by the single-spa framework to manage this microfrontend
export const {
  bootstrap, mount, unmount, 
} = lifecycles
