import React from 'react';
import { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { Button, ButtonGroup } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import swal from 'sweetalert'

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

export default function SmallProductCard(props) {

    useEffect(() => { console.log(props) }, [])

    const { name, image, price, _id } = props.product

    function handleClick(e) {
        e.preventDefault();
        swal({
            title: "Good choice!",
            text: `You added ${name} to your cart!`,
            icon: "success",
            button: "Continue",
          });
      }

    return (
        <Paper
            sx={{
                p: 2,
                margin: 'auto',
                maxWidth: 500,
                flexGrow: 1,
                backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
        >
            <Grid container spacing={2}>
                <Grid item>
                    <ButtonBase sx={{ width: 128, height: 128 }}>
                        <Img alt="book cover" src={"http://localhost:3000/" + image} />
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1" component="div">
                                {name}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                New | Hardcover
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                ID: {_id.substring(4)}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <ButtonGroup>
                                <Button endIcon={<ShoppingCartIcon />}
                                    variant="contained"
                                    color="primary"
                                    size="small"
                                    onClick={handleClick}
                                >
                                    +
                                </Button>
                                <Button
                                    color="secondary"
                                    size="small"
                                >
                                    More
                                </Button>
                            </ButtonGroup>

                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography color="green" variant="subtitle1" component="div">
                            ${price}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}
