import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./lessons/09-rtk/counterSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})

/*

* type RootState represents the type of the state stored in your Redux store. ReturnType is a utility type provided by TypeScript that can get the return type of a function. store.getState is a function that returns the current state stored in the Redux store.

* So ReturnType is the type of the state returned by store.getState, which is the type of the state in your Redux store.

*/

export type RootState = ReturnType<typeof store.getState>

/*

* type AppDispatch represents the type of the dispatch function in your Redux store. store.dispatch is the function you use to dispatch actions in Redux. typeof store.dispatch gets the type of this function. So AppDispatch is the type of the dispatch function in your Redux store.

*/

export type AppDispatch = typeof store.dispatch
