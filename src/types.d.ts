declare module 'state' {
  export interface Product {
    name: string
    id: string
    stock: number
  }
}

declare module 'store' {
  import { ProductStore } from 'ProductStore'

  export interface Store extends ProductStore {}
}
