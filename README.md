# steal-react-example
[Live demo](https://steal-and-react.herokuapp.com)

## Development version

1. Clone this repo.
2. Run `npm install`
3. Start the http-server using `npm run start`.
4. Open /development.html file in your browser.

You can click on the “Welcome to…” title to see the `onClick` event fire.

#### Live-reload:
Live reload will reload modules as you change them in your browser, without having to reload the page. [see more](https://stealjs.com/docs/StealJS.hot-module-replacement.html)

Run `npm run live-reload` at a command prompt and open another command prompt and run `npm run start`. Open /development.html in your browser and Modify any project file to see in action.

## Production version

1. Run `npm run build` in terminal to generate the bundles in "dist" folder.
2. Start the http-server using `npm run start`.
3. Open /production.html file in browser.

#### Watch mode:
This enables you to continuously rebuild your application as you work. This is useful if you prefer a workflow where you are debugging your application as it will appear in production. [see more](https://stealjs.com/docs/steal-tools.watch-mode.html)

Run `npm run watch` at a command prompt, open another command prompt and run `npm run start`. Open /production.html in your browser, modify any project file and refresh page.

This example uses [steal-jsx](https://www.npmjs.com/package/steal-jsx).

![Steal-React Example Screenshot](screenshot.png?raw=true "Simple Steal-React Example App")
