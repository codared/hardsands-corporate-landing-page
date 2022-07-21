import { ProductsActionTypes } from 'redux/products/actionTypes'
import { productsReducer, ProductsReducerState } from 'redux/products/reducer'
import { combineReducers, ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'

export const rootReducer = combineReducers({
  products: productsReducer,
})

export type AppState = {
  products: ProductsReducerState
}

export type AppActionTypes = 
  | ProductsActionTypes

export type ThunkActionCreator<R> = ActionCreator<
  ThunkAction<R, AppState, void, AppActionTypes>
>
