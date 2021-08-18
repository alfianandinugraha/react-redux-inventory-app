import { Product } from 'state'
import { ProductAction } from 'ProductStore'

const addProduct = (product: Product): ProductAction => {
  return {
    type: 'ADD_PRODUCT',
    payload: { product },
  }
}

const deleteProduct = (id: string): ProductAction => {
  return {
    type: 'DELETE_PRODUCT',
    payload: {
      id,
    },
  }
}

const incrementProduct = (id: string): ProductAction => {
  return {
    type: 'INCREMENT_PRODUCT',
    payload: { id },
  }
}

export { addProduct, deleteProduct, incrementProduct }
