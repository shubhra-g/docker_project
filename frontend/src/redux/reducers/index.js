import React from "react"
import userReducers from "./userReducers"
import jobReducers from "./jobReducers"
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
    user: userReducers,
    job: jobReducers
})