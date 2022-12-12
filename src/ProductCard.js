import React, { useEffect } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Button } from "@mui/material";


export default function ProductCard(props) {

  useEffect(() => { console.log(props) }, [])

  const { name, image, price } = props.product

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={"http://localhost:3000/" + image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Costs ${price}
          </Typography>
        </CardContent>
        <Button
          size="small"
          color="primary"
        >
          Learn More
        </Button>
      </CardActionArea>
    </Card>
  );
}
