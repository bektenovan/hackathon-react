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
import { AddShoppingCart } from "@mui/icons-material";
import { basketContext } from "../../contexts/basketContext";
import { authProductContext } from "../../contexts/authProductContext";

const ProductCard = ({ item, id }) => {
  const navigate = useNavigate();
  const { addProductToBasket, checkProductInBasket } =
    useContext(basketContext);
  const { isAdmin } = useContext(authProductContext);
  const [checkProduct, setCheckProduct] = useState(checkProductInBasket(item));
  const { deleteProduct } = useContext(productsContext);
  const [ratingValue, setRatingValue] = React.useState(null);
  console.log(ratingValue);
  const handleChange = (e, newValue) => {
    setRatingValue(newValue);
  };

  return (
    <Card sx={{ maxWidth: 345, margin: "10px" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image={item.image}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          color="text.secondary">
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
        {isAdmin ? (
          <>
            <Button size="small" onClick={() => deleteProduct(item.id)}>
              <DeleteIcon />
            </Button>
            <Button size="small" onClick={() => navigate(`/edit/${item.id}`)}>
              <EditIcon />
            </Button>{" "}
          </>
        ) : null}

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
