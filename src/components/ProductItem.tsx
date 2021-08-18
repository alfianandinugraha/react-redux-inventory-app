import { Product } from 'state'
import {
  Button,
  ButtonGroup,
  Card,
  CardContent,
  Grid,
  Typography,
} from '@material-ui/core'
import { Add, Delete, Remove } from '@material-ui/icons'
import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteProduct } from '@/store/Product/Actions'

interface ProductItemProps extends Product {}

const ProductItem = (props: ProductItemProps) => {
  const dispatcher = useDispatch()

  return (
    <Card>
      <CardContent>
        <Grid>
          <Typography>{props.name}</Typography>
          <Typography variant="caption">Stock {props.stock}</Typography>
        </Grid>
        <Grid
          container
          style={{ marginTop: 16 }}
          justifyContent="space-between"
        >
          <Grid item>
            <ButtonGroup>
              <Button color="secondary">
                <Remove style={{ fontSize: 16 }} />
              </Button>
              <Button color="primary">
                <Add style={{ fontSize: 16 }} />
              </Button>
            </ButtonGroup>
          </Grid>
          <Grid item>
            <ButtonGroup>
              <Button
                color="secondary"
                variant="contained"
                onClick={() => {
                  dispatcher(deleteProduct(props.id))
                }}
              >
                <Delete style={{ fontSize: 16 }} />
              </Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default ProductItem
