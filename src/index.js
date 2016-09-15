// Styling
require("./sass/styles.scss");
// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// Components
import configureStore from './redux/store.js';
import Layout from './containers/Layout.js';


let initialState = {
  timer: {
    timeSeconds: 60
  },
  editThisRecipie: {
    id:null,
      title: "",
      img: "",
      time:  "",
      ingredients: "",
      steps: "",
      notes: "",
      ingredientsList: [""]
  },
  search: "",
  recipies: [
   
  ]
};

let store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <Layout />
  </Provider>, 
  document.getElementById('app'));