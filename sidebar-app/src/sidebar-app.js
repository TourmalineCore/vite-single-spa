import { registerApplication, start } from 'single-spa'; 
// Import functions from the single-spa library to register applications and start the single-spa framework

// Register the first microfrontend application
registerApplication({
    name: '@org/app1', // Unique name for the microfrontend
    //You can substitute any name instead of @org
    app: () => System.import('@org/app1'), // Dynamically load the application using SystemJS
    activeWhen: ['/app1'], // The application will activate when the URL path matches '/app1'
});

registerApplication({
    name: '@org/app2', 
    app: () => System.import('@org/app2'), 
    activeWhen: ['/app2'],
});

registerApplication({
    name: '@org/to-dos', 
    app: () => System.import('@org/to-dos'),
    activeWhen: ['/to-dos'], 
});

start(); 
