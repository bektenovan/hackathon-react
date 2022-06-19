import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import React from "react";

const RangeCollection = () => {
  return (
    <Container
      className="range"
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "80px",
      }}>
      {/* <Typography>All Seating</Typography>
  <Typography>
    The main feature of any living room is always going to be the seating.
    Pick and choose your seating styles to build the perfect place to relax.
    Unwind by yourself, spend time with your family, or entertain guests,
    all in ultimate comfort.
  </Typography> */}
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="194"
          image="https://media.graphassets.com/resize=w:2400,fit:crop/output=format:webp/compress/8maDY8z1T3OacanCliBj"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Range 5-Piece Sectional Lounger
          </Typography>
          <Typography variant="body2" color="text.secondary">
            $2220
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="194"
          image="https://media.graphassets.com/resize=w:2400,fit:crop/output=format:webp/compress/09AdcZpFTsOmY2S2Q3X9"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Range 4-Piece One Arm Sectional
          </Typography>
          <Typography variant="body2" color="text.secondary">
            $1995
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="194"
          image="https://media.graphassets.com/resize=w:2400,fit:crop/output=format:webp/compress/GumkwnG7QeqK4FdWRGrw"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Range Seat
          </Typography>
          <Typography variant="body2" color="text.secondary">
            $425
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="194"
          image="https://media.graphassets.com/resize=w:2400,fit:crop/output=format:webp/compress/VqerAztSKHHKIqMHhj5A"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Range 2-Piece Sofa
          </Typography>
          <Typography variant="body2" color="text.secondary">
            $1070
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default RangeCollection;
