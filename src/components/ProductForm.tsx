import { Button, Grid, TextField } from '@material-ui/core'
import React, { useState } from 'react'

const ProductForm = () => {
  const [name, setName] = useState('')
  const [stock, setStock] = useState('')

  return (
    <Grid container spacing={2} direction="column">
      <Grid item>
        <Grid container spacing={2}>
          <Grid item>
            <TextField
              type="text"
              label="Product Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value)
              }}
            />
          </Grid>
          <Grid item>
            <TextField
              type="number"
              label="Product Stock"
              value={stock}
              onChange={(e) => {
                setStock(e.target.value)
              }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            const payload = {
              name,
              stock: +stock,
            }
            console.log(payload)
          }}
        >
          Add product
        </Button>
      </Grid>
    </Grid>
  )
}

export default ProductForm
