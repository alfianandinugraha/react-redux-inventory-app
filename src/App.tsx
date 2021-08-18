import React from 'react'
import { Box, Container, Typography } from '@material-ui/core'
import ProductList from '@/components/ProductList'
import ProductForm from '@/components/ProductForm'

const App = (): React.ReactElement => {
  return (
    <Container maxWidth="md">
      <Box mb={3}>
        <Typography variant="h4">Inventory App</Typography>
        <Typography>Example React - Redux App</Typography>
      </Box>
      <ProductForm />
      <Box mt={4}>
        <ProductList />
      </Box>
    </Container>
  )
}

export default App
