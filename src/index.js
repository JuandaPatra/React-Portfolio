import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import {BrowserRouter} from "react-router-dom"

import {Provider} from "react-redux"
import {createStore, applyMiddleware} from "redux"
import allReducer from "./redux/reducer"
import ReduxThunk from "redux-thunk"
const gS = createStore(allReducer, applyMiddleware(ReduxThunk))


ReactDOM.render(
  <Provider store={gS}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);

