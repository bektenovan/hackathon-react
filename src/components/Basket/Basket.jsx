import React, { useContext, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import { Box, Button, Container, IconButton, Typography } from '@mui/material';
import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from 'react-router-dom';
import { basketContext } from '../../contexts/basketContext';




export default function Basket() {
    const { getBasket, basket, changeProductCount, deleteFromBasket } = useContext(basketContext);
    useEffect(() => {
        getBasket();
    }, [])
    console.log(basket);
    const navigate = useNavigate()
    return (
        <Box className='basket'>
            <Container className='basket'>
                <Box >
                    <TableContainer component={Paper} className='basket'>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Product</TableCell>
                                    <TableCell align="right">Price</TableCell>
                                    <TableCell align="right">Count</TableCell>
                                    <TableCell align="right">SubPrice</TableCell>
                                    <TableCell align="right">Info</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {/* //если кард есть то покажи продукты */}
                                {basket &&
                                    basket?.products.map((row) => (
                                        <TableRow
                                            key={row.item.id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                            <TableCell component="th" scope="row">
                                                {row.item.title}
                                            </TableCell>
                                            <TableCell align="right">{row.item.price}</TableCell>
                                            <TableCell align="right">
                                                <IconButton aria-label="delete" onClick={() => changeProductCount(row.count - 1, row.item.id)}>
                                                    <IndeterminateCheckBoxIcon />
                                                </IconButton> {row.count}
                                                <IconButton aria-label="delete" onClick={() => changeProductCount(row.count + 1, row.item.id)}>
                                                    <AddBoxIcon />
                                                </IconButton></TableCell>
                                            <TableCell align="right">{row.subPrice}</TableCell>


                                            <TableCell align="right">
                                                <IconButton aria-label="delete" color="primary" onClick={() => deleteFromBasket(row.item.id)}>
                                                    <RestoreFromTrashIcon />
                                                </IconButton>
                                                <IconButton aria-label="delete" color="primary" onClick={() => navigate(`/products/${row.item.id}`)}>
                                                    <InfoIcon />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
                <Box
                    style={{ display: "flex", justifyContent: "flex-end", margin: "30px 170px" }}>
                    <Typography variant="h5" component="h4">
                        Total: {basket && basket?.totalPrice}
                    </Typography>
                </Box>
                <Box style={{ display: "flex", justifyContent: "flex-end", margin: "30px 170px" }} >
                    <Button variant="contained" color="primary" onClick={() => navigate("/order")}>
                        Buy now!
                    </Button>
                </Box>

            </Container >
        </Box>
    );
}
