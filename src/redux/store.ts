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

import { rootReducer, AppState } from './rootReducer'
import { AppActionTypes } from './context'

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
  void,
  AppActionTypes
> = () => {
  const dispatch: ThunkDispatch<AppState, void, AppActionTypes> = useDispatch()
  return dispatch
}

export type AppActionCreator = ActionCreator<AppActionTypes>

export type ThunkAppActionCreator<R> = ActionCreator<
  ThunkAction<R, AppState, void, AppActionTypes>
>
