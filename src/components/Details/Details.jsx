import { Box, Breadcrumbs, Container, Paper, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { productsContext } from "../../contexts/ProductsContext";
import Loader from "../Loader/Loader";

const Details = () => {
  const { getOneProduct, oneProduct } = useContext(productsContext);
  const { id } = useParams();
  useEffect(() => {
    getOneProduct(id);
  }, []);
  // console.log(getOneProduct(id));
  return (
    <Container>
      {oneProduct ? (
        <Box>
          <Typography>{oneProduct.description}</Typography>
          <Typography>{oneProduct.title}</Typography>
          <Typography>{oneProduct.price}</Typography>
          <img src={oneProduct.image}></img>
        </Box>
      ) : (
        <Loader />
      )}
    </Container>
  );
};

export default Details;
