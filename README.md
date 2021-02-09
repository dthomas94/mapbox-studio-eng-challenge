# Map Design Engineering Challenge

## Assignment

We'd like to build a point-of-interest (POI) favoriting system. We want users to be able to click on a POI to add it to a list of favorite places, and to display that list with a little information about what that place is, like a name and type. The user should be able to move the map from favorite to favorite by clicking items in the list. The user should also be able to unfavorite an item by clicking a button in the favorites list.

We'd like you to build the following features:

- Add a POI to a list of favorites by clicking on the map
- Move the map from favorite to favorite by clicking through the list
- Unfavorite POIs

We'd also like a small write-up that explains any decisions and tradeoffs you made. If you included any dependencies, spend some time talking about why you chose them, and crucially, what the downsides are of including them. If you struggled anywhere, this is the place to discuss those challenges. The quality of the write-up is as important as the quality of your code.

### What we're looking for

- Your solutions should be extensible and re-usable
- Your code should be well tested
- Your code should be tidy and adhere to conventions
- While a perfect design is not necessary, your UI should be usable
- Your write-up should be thoughtful and coherent

## Development

This project was bootstrapped with Create React App.

Run `npm install` or `yarn install` to install dependencies.

Run `npm start` to start the app in development mode.

Run `npm test` to run tests.

### Technical Decisions

#### Packages

1. Updated react package to be able to use hooks - functional programming makes testing easier and components inherently simpler/more intentional. This especially was important to me because there is a lot of misuse the lifecycle methods in class components. Hooks force you to think about why/what you are trying to accomplish.
2. Updated react-scripts package to be able to use latest version of jest
3. Updated react-dom to be in sync with latest react version
4. Added package for unofficial enzyme adapat to be able to support React v17

#### Challenges

##### Mapbox-gl

Initially setting up mapbox-gl was simple. The documentation is well laid out for getting up and running. The biggest hurdle was understanding layers and how they come into play with map events. A lot of the documentation, if not all, explains how to work with custom markers, but the markers for this map were already setup because of the style attribute passed to the map.

##### Testing

Testing a React app generally isn't difficult, but with the added code for native dom events being handled within a mapbox instance proved challenging. Ultimately, I decided not to dive deep into testing the map itself because I know the package has its own test suite.

For improvement, I would have liked to also add cypress tests to assert the happy path of user flows (adding/removing favorites).
