# Base project for Testing React Hooks / Context

This is a base project for starting at the Hooks/Context sections of [React Testing with Jest and Enzyme](https://www.udemy.com/course/react-testing-with-jest-and-enzyme/?referralCode=3A42BF689E28CADB0587)

## How to run the project and see it work?

We have two cases:

- To see the app working with the local API, we must enter the `random-word-server` folder and run the `yarn start` to start the local server. After that, enter the `app-jotto-hooks-context` folder and run the command `yarn start`.

- If the user has a Wordnik key, enter the `src/config/wordnikKey.js` folder and set the `WORDNIK_KEY` variable to the value of his key. After that, enter the `app-jotto-hooks-context` folder and run the command `yarn start`.

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.
