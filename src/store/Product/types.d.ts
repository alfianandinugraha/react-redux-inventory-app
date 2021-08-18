declare module 'ProductStore' {
  import { Product } from 'state'

  export type ProductActionType =
    | 'ADD_PRODUCT'
    | 'DELETE_PRODUCT'
    | 'INCREMENT_PRODUCT'
    | 'DECREMENT_PRODUCT'

  export interface ProductAction {
    type: ProductActionType
    payload: {
      id?: string
      product?: Product
    }
  }

  export interface ProductStore {
    products: Product[]
  }
}
