import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import InfoIcon from "@mui/icons-material/Info";

import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { productsContext } from "../../contexts/ProductsContext";
// import { CartContext } from "../../contexts/cartContext";
import { AddShoppingCart } from "@mui/icons-material";
import { createTheme } from "@mui/material/styles";
import { basketContext } from "../../contexts/basketContext";
const theme = createTheme({
  status: {
    danger: "#ff77a9",
  },
  palette: {
    primary: {
      main: "#0971f1",
      darker: "#053e85",
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
  },
});
const ProductCard = ({ item, id }) => {
  const navigate = useNavigate();
  const { addProductToBasket, checkProductInBasket } =
    useContext(basketContext);
  const [checkProduct, setCheckProduct] = useState(checkProductInBasket(item));
  const { deleteProduct, getOneProduct, oneProduct } =
    useContext(productsContext);
  const [ratingValue, setRatingValue] = React.useState(null);
  console.log(ratingValue);
  const handleChange = (e, newValue) => {
    setRatingValue(newValue);
  };
  // useEffect(() => {
  //   getOneProduct(id);
  // }, [oneProduct]);
  // console.log(setRatingValue);
  // const { addProductToCart, checkProductInCart } = useContext(CartContext);
  // const [checkProduct, setCheckProduct] = useState(checkProductInCart(item));

  // console.log(item);
  return (
    <Card sx={{ maxWidth: 345, margin: "10px" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image={item.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description.length > 20
            ? `${item.description.slice(0, 20)}...`
            : item.description}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {item.price}
        </Typography>
        <Rating
          precision={0.5}
          size="large"
          value={ratingValue}
          onChange={handleChange}
          name="simple-controlled"
        />
      </CardContent>
      <CardActions>
        {/*! icons added as components */}

        <Button size="small" onClick={() => deleteProduct(item.id)}>
          <DeleteIcon />
        </Button>
        <Button size="small" onClick={() => navigate(`/edit/${item.id}`)}>
          <EditIcon />
        </Button>
        <Button
          onClick={() => {
            addProductToBasket(item);
            setCheckProduct(checkProductInBasket(item));
          }}
          size="small">
          <AddShoppingCart color={checkProduct ? "secondary" : "primary"} />
        </Button>
        <Button size="small" onClick={() => navigate(`/products/${item.id}`)}>
          <InfoIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
