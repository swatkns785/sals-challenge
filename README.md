This project creates renders a table of products and allows users to filter the results by the available attributes.

## Install dependencies

Run `yarn install` or `npm install` to install project dependencies.

## Available Scripts

In the project directory, you can run the following:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## About the app

### Filtering

I chose to focus the majority of my efforts on the filtering functionality. In `/utils/filterData` there are methods that filter the data that is broken down by operator type. There is also a test suite that fully tests the filtering functionality.

### Application state

In `/utils/filterReducer`, I created a state management mechanism to be leveraged by React's `useReducer` hook. There are actions to set different values for different filters. The application's state at any given moment is used in `filterData` to return applicable products (or nothing, if none are available).

### Styling

In choosing to focus most of my efforts on the filtering functionality, I leveraged the Material UI toolkit for the application's components.
