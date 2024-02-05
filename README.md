# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Project Architcure:

- src:
  - App.css / App.tsx / Index.css / Index.tsx:
    - Root components and styles.
  - Apis:
    - Endpoints.ts:
      - Contains the base URL for API requests.
    - Index.ts:
      - Exports API functions using axios for fetching weather data.
  - Components:
    - CityCard:
      - Reusable component for displaying city information.
    - Header:
      - Component for the header of the application.
    - HiddenCities:
      - Component for displaying hidden cities.
  - Pages:
    - City:
      - Page component for displaying detailed information about a specific city.
    - Home:
      - Landing page component displaying a list of cities.
    - PageNotFound:
      - Component for handling 404 errors.
  - Redux:
    - Global:
      - Global.action.ts:
        - Actions for fetching weather data and city data.
      - Global.reducer.ts:
        - Reducer for handling global state changes.
      - Global.types.ts:
        - Action type constants.
      - Interface.ts:
        - TypeScript interfaces for defining state shapes.
      - rootReducer.js:
        - Root reducer combining all reducers.
      - Store.js:
        - Redux store configuration.
  - Utils:
    - index.ts:
      - Utility functions for structuring API data.

Components:

- CityCard:
  - Reusable component for displaying city information.
  - Handles both homepage and individual city page cases.
  - Uses Redux to dispatch actions for hiding cities.
- Header:
  - Simple header component.
- HiddenCities:
  - Component for displaying a list of hidden cities.

Pages:

- City:
  - Fetches and displays detailed information about a specific city.
  - Handles cases where the city is not found.
- Home:
  - Landing page displaying a list of cities.
  - Fetches weather data on mount and refresh.
- PageNotFound:
  - Component to handle 404 errors.

Redux:

- Global:
  - Handles global state for weather data and city details.
  - Uses Redux Thunk for asynchronous actions.
  - Actions include fetching weather data, fetching city data, and handling API errors.

API:

- Apis/Endpoints.ts:
  - Defines the base URL for API requests.
- Apis/Index.ts:
  - Utilizes axios to create functions for fetching weather data.

Utils:

- Utils/index.ts:
  - Contains utility functions, such as structuring API data.

Key Points:

- Clear separation of components, pages, and state management.
- Redux is used for global state management.
- Redux Thunk is employed for handling asynchronous actions.
- Components are modular and reusable.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
