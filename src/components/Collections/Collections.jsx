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



const Collections = ({ item, id }) => {

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "80px",
      }}>
      <Card style={{ marginRight: "50px" }} sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red[500]" }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Oslo Armchair"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="194"
          image="https://northdecoshop.com/1696-home_default/oslo-armchair.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            In our Oslo Armchair, an iconic Nordic-style model, you can relax
            and enjoy your favorite series and movies comfortably. A
            Scandinavian design with soft lines that you can combine with the
            sofa of the same line of 2 or 3 seats. Made of polyester and 100%
            natural linen of first quality. The combination of these materials
            with the legs of eucalyptus wood will bring warmth to your living
            room.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>



          <IconButton aria-label="share">

            <ShareIcon />
          </IconButton>
        </CardActions>
        <Collapse in={"expanded"} timeout="auto" unmountOnExit>
          <CardContent></CardContent>
        </Collapse>
      </Card>
      <Card style={{ marginRight: "50px" }} sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red[500]" }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Oslo Armchair"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="194"
          image="https://www.gerosadesign.com/images/prodotti/poltrone/fritz-hansen/egg-fritz-hansen/egg-fritz-hansen1.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            The Egg Chair in addition to having an exclusive design is ideal for
            rest areas or even for the home. This design armchair is formed by
            an interior structure of fiberglass upholstered in cashmere. This
            results in a soft, pleasant and warm touch. We love it!
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
        <Collapse in={"expanded"} timeout="auto" unmountOnExit>
          <CardContent></CardContent>
        </Collapse>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red[500]" }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Sillón Papa Bear"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="194"
          image="https://northdecoshop.com/8248-large_default/sillon-papa-bear.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            The Papa Bear armchair is inspired by one of the most famous models
            of the 20th century. It stands out for being versatile and perfect
            for waiting rooms, living rooms, dining rooms, and more.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
        <Collapse in={"expanded"} timeout="auto" unmountOnExit>
          <CardContent></CardContent>
        </Collapse>
      </Card>
    </Box>
  );
};

export default Collections;
