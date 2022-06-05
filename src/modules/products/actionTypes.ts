
export interface ProductsLoadAll {
  type: 'PRODUCTS_LOAD_ALL'
  payload: {
    currency: string
    products: any[]
  }
}
export interface ProductsLoadMultiple {
  type: 'PRODUCTS_LOAD_MULTIPLE'
  payload: {
    currency: string
    products: any[]
  }
}
export interface ProductsLoadSingle {
  type: 'PRODUCTS_LOAD_SINGLE'
  payload: {
    currency: string
    product: any
  }
}

export type ProductsActionTypes = ProductsLoadAll | ProductsLoadSingle | ProductsLoadMultiple
