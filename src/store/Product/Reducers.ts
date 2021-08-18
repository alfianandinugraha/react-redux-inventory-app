import { initialProducts } from '@/store/Product/Store'
import { ProductAction, ProductStore } from 'ProductStore'
import { Product } from 'state'

const foodReducer = (
  store: ProductStore = initialProducts,
  action: ProductAction
): ProductStore => {
  switch (action.type) {
    case 'ADD_PRODUCT': {
      const product = action.payload.product as Product
      return {
        products: [product, ...store.products],
      }
    }
    case 'DELETE_PRODUCT': {
      const id = action.payload.id || ''
      return {
        products: store.products.filter((product) => product.id !== id),
      }
    }
    default: {
      return {
        products: store.products,
      }
    }
  }
}

export default foodReducer
