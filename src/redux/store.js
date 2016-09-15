import { createStore } from 'redux';
import reducer from './reducer';
// import logger from 'redux-logger';

/*
let finalCreateStore = compose(
  applyMiddleware(logger({
  collapsed: true
}))
)(createStore);
*/

export default function configureStore (initialState = { ingredients: [] }) {
  return createStore(reducer, initialState);
} 