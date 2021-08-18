import React from 'react'
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core'

const App = (): React.ReactElement => {
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
    </Container>
  )
}

export default App
