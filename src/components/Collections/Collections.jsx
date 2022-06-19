import { ExpandMore } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";
import InfoIcon from "@mui/icons-material/Info";
import { productsContext } from "../../contexts/ProductsContext";




const Collections = ({ item, id }) => {
  const { products } = useContext(productsContext);
  const navigate = useNavigate();
  return (
    <>
      <Typography
        variant="h3"
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "40px",
          color: "#ff77a9",
          fontFamily: " GT America Burrow",
        }}>
        Explore each unique collection
      </Typography>
      <Box
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "80px",
        }}>
        <Card
          style={{ marginRight: "30px", marginBottom: "85px" }}
          sx={{ maxWidth: 500 }}>
          <CardMedia
            onMouseDown={() => navigate("/field-collection")}
            component="img"
            height="500"
            image="	https://media.graphassets.com/resize=w:908,fit:crop/output=format:webp/compress/O1vOXGkHSdtWJtnPnNFQ"
            alt="seating"
          />
        </Card>
        <Card
          style={{ marginRight: "30px", marginBottom: "85px" }}
          sx={{ maxWidth: 500 }}>
          <CardMedia
            onMouseDown={() => navigate("/range-collection")}
            component="img"
            height="500"
            image="	https://media.graphassets.com/resize=w:908,fit:crop/output=format:webp/compress/w7ZOKWeyQe26myIXlMpH"
            alt="se"
          />
        </Card>
        <Card
          style={{ marginRight: "30px", marginBottom: "85px" }}
          sx={{ maxWidth: 500 }}>
          <CardMedia
            onMouseDown={() => navigate("/nomad-collection")}
            component="img"
            height="500"
            image="https://media.graphassets.com/resize=w:908,fit:crop/output=format:webp/compress/nBvYI3hsTLmFw7h0Awnr"
            alt="seat"
          />
        </Card>
      </Box>
    </>
  );
};

export default Collections;
