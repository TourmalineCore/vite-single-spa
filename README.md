## Vite Micro Frontends Using Single-Spa

**These folders contain four different services, so you need to open each service in a new terminal and enter these commands in the terminal of each service**

To run each service, you need to install modules. To do this, enter the command `npm ci`

Next, you need to build each service by running the command `npm run build` (we recommend starting with the sidebar-app service)

And then enter the command to start the services `npm run start`

You can test it:

1. Open the sidebar-app at http://localhost:5173/
2. You can switch between services using the sidebar or by going to http://localhost:5173/app1, http://localhost:5173/to-dos, http://localhost:5173/app2
3. Change the text of any button in the sidebar-app
4. To see the changes, stop the service in which you made changes and enter the commands `npm run build` and `npm run start`

So, we have a service that implements the sidebar (sidebar-app), and three services that the sidebar switches between (first-app, second-app and to-dos-ui-ss). Instead of repeating the sidebar in each of these three services, we implement it separately and pass the sidebar module into every one of them

There is no hot reload when you change something in an app. You need t manually re-build it.
