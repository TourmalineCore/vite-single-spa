import { registerApplication, start } from 'single-spa';

registerApplication({
    name: '@org/app1',
    app: () => System.import('@org/app1'),
    activeWhen: ['/app1'], 
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