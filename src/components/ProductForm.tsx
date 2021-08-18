import { Button, Grid, TextField } from '@material-ui/core'
import React from 'react'

const ProductForm = () => {
  return (
    <Grid container spacing={2} direction="column">
      <Grid item>
        <Grid container spacing={2}>
          <Grid item>
            <TextField type="text" label="Product Name" />
          </Grid>
          <Grid item>
            <TextField type="number" label="Product Stock" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Button variant="contained" color="primary">
          Add product
        </Button>
      </Grid>
    </Grid>
  )
}

export default ProductForm
