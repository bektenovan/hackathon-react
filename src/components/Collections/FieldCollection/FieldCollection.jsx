import { AddShoppingCart } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const FieldCollection = () => {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "80px",
        marginBottom: "40px",
        marginLeft: "20px",
        marginRight: "20px",
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
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="194"
          image="https://media.graphassets.com/resize=w:2400,fit:crop/output=format:webp/compress/IKCCuuqoRhiwA9dvkQhM"
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
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
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
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
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
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default FieldCollection;
