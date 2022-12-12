import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import axios from 'axios'
import SmallProductCard from "./SmallProductCard";
import ProductCard from "./ProductCard"


export default function ProductGrid() {

    const [products, setProducts] = useState([]);

    const getProducts = () => {
        axios.get('http://localhost:3000/products/')
            .then((response) => {
                console.log(response)
                const productList = response['data']['products']
                setProducts(productList)
            })
    }
    
    useEffect(() => getProducts(), [])

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {products.map((product) => (
                    <Grid item xs={2} sm={4} md={4} key={product.id}>
                        <SmallProductCard product={product} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
