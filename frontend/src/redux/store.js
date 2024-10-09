import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";


// composeWithDevTools(applyMiddleware(thunk, logger)

const loadfromlocalStorage = localStorage.getItem("token") ? localStorage.getItem("token") : null

const initialState = {
  token: loadfromlocalStorage
}

export const store = configureStore(
  {
    reducer: rootReducer,
  },
  initialState, 
  composeWithDevTools(applyMiddleware(thunk, logger))
);

// store.subscribe(() => console.log(store.getState()))
