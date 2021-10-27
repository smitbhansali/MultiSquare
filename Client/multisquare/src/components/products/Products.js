import React from 'react';
import {Grid} from '@material-ui/core';
import Product from './product/Product';
import useStyles from './productsstyles'

const products = [
    {id : 1, name : "IPhone 13", description : "Mobile", price : "1299$" , image: "https://media.4rgos.it/i/Argos/9520921_R_Z001A?w=750&h=440&qlt=70"},
    {id : 2, name : "MacBook Pro", description : "Laptop", price : "2899$", image: "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/macbookpro/macbook-pro-2020-late-13in-device.jpg"},
];

const Products = () => {
    const classes = useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    );
}

export default Products;