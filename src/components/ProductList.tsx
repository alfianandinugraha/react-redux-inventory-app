import { Product } from 'state'
import { nanoid } from 'nanoid'
import { Grid } from '@material-ui/core'
import ProductItem from '@/components/ProductItem'
import React from 'react'

const productFactory = (id: string, name: string, stock: number): Product => ({
  id,
  name,
  stock,
})

const ProductList = () => {
  const products: Product[] = [
    productFactory(nanoid(), 'Asus MPM1', 5),
    productFactory(nanoid(), 'Lenovo Thinkpad T440p', 10),
    productFactory(nanoid(), 'Pen Pilot', 20),
    productFactory(nanoid(), 'Book Sidu', 30),
    productFactory(nanoid(), 'Lenovo Ideapad', 3),
  ]

  return (
    <Grid container spacing={3}>
      {products.map((product) => {
        return (
          <Grid item key={product.id} xs={3}>
            <ProductItem {...product} />
          </Grid>
        )
      })}
    </Grid>
  )
}

export default ProductList
