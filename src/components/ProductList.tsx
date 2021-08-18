import { Grid } from '@material-ui/core'
import ProductItem from '@/components/ProductItem'
import React from 'react'
import { useSelector } from 'react-redux'
import { Store } from 'store'

const ProductList = () => {
  const products = useSelector((state: Store) => state.products)

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
