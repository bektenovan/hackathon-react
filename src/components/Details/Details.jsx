import {
  Box,
  Breadcrumbs,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
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
    <Box style={{ marginTop: "50px" }}>
      <Container>
        {oneProduct ? (
          <Card sx={{ maxWidth: 100 }}>
            <CardMedia
              component="img"
              alt="product"
              height="140"
              image={oneProduct.image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {oneProduct.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {oneProduct.description}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                {oneProduct.price}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        ) : (
          <Loader />
        )}
      </Container>
    </Box>
  );
};

export default Details;
