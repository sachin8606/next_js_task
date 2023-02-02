import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { ButtonBase } from '@mui/material';
interface ProductList {
  no: number,
  addToCart: any,
  pname: string,
  price: number,
  detail: string,
  img: string
}


export default function MediaCard(props: ProductList) {

  return (
    <Card sx={{ maxWidth: 345, minHeight: 400 }} style={{ "margin": "20px" }}>
      <CardMedia
        sx={{ height: 140 }}
        image={props.img}
        title="green iguana"
        component='img'
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <Link href={"/" + props.no} style={{ "color": "blue","marginRight":"4px" }}> {props.pname}</Link>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.detail}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" startIcon={<AddShoppingCartIcon />} onClick={() => props.addToCart(props.pname, props.price)}>Add to Cart</Button>
      </CardActions>
    </Card>
  );
}