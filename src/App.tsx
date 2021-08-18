import React from 'react'
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core'
import { Product } from 'state'
import { nanoid } from 'nanoid'
import ProductItem from '@/components/ProductItem'
import ProductList from '@/components/ProductList'

const productFactory = (id: string, name: string, stock: number): Product => ({
  id,
  name,
  stock,
})

const App = (): React.ReactElement => {
  const products: Product[] = [
    productFactory(nanoid(), 'Asus MPM1', 5),
    productFactory(nanoid(), 'Lenovo Thinkpad T440p', 10),
    productFactory(nanoid(), 'Pen Pilot', 20),
    productFactory(nanoid(), 'Book Sidu', 30),
    productFactory(nanoid(), 'Lenovo Ideapad', 3),
  ]

  return (
    <Container maxWidth="md">
      <Box mb={3}>
        <Typography variant="h4">Inventory App</Typography>
        <Typography>Example React - Redux App</Typography>
      </Box>
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
      <Box mt={4}>
        <ProductList />
      </Box>
    </Container>
  )
}

export default App
