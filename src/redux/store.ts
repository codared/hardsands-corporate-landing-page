import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import {
  applyMiddleware,
  Middleware,
  compose,
  ActionCreator,
} from 'redux'
import thunk, { ThunkDispatch, ThunkAction } from 'redux-thunk'

import { rootReducer, AppState, AppActionTypes } from './rootReducer'

export function createStore() {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState: {},
    enhancers: [],
  });
}

export const useTypedSelector: TypedUseSelectorHook<AppState> = useSelector

export const useTypedDispatch: () => ThunkDispatch<
  AppState,
  {},
  AppActionTypes
> = () => {
  const dispatch: ThunkDispatch<AppState, {}, AppActionTypes> = useDispatch()
  return dispatch
}

export type AppActionCreator = ActionCreator<AppActionTypes>

export type ThunkAppActionCreator<R> = ActionCreator<
  ThunkAction<R, AppState, void, AppActionTypes>
>
