import { AddShoppingCart } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  IconButton,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";

const FieldCollection = () => {
  return (
    <Container
      className="field"
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "80px",
      }}>
      <Card>
        <CardMedia
          component="img"
          height="194"
          image="https://media.graphassets.com/resize=w:2400,fit:crop/output=format:webp/compress/xehq1HwZRCKpJVOtfLnh"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Field 3-Piece Sofa
          </Typography>
          <Typography variant="body2" color="text.secondary">
            $1495
          </Typography>
          {/* <IconButton aria-label="add to favorites">
            <AddShoppingCart />
          </IconButton> */}
        </CardContent>
      </Card>

      <Card>
        <CardMedia
          component="img"
          height="194"
          image="https://media.graphassets.com/resize=w:2400,fit:crop/output=format:webp/compress/xehq1HwZRCKpJVOtfLnh"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Field 2-Piece Sofa
          </Typography>
          <Typography variant="body2" color="text.secondary">
            $1905
          </Typography>
        </CardContent>
      </Card>
      <Card>
        <CardMedia
          component="img"
          height="194"
          image="https://media.graphassets.com/resize=w:2400,fit:crop/output=format:webp/compress/w7sUg9SYmyRnYBMDzRBw"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Field 2-Piece Lounger
          </Typography>
          <Typography variant="body2" color="text.secondary">
            $990
          </Typography>
        </CardContent>
      </Card>
      <Card>
        <CardMedia
          component="img"
          height="194"
          image="https://media.graphassets.com/resize=w:2400,fit:crop/output=format:webp/compress/sYG53zFET0W5qUbOaUDX"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Field Armchair
          </Typography>
          <Typography variant="body2" color="text.secondary">
            $590
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default FieldCollection;
