import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

export default function HomePage() {
  return (
    <Box>
      <Box
        style={{
          fontFamily: "Sylvester",
          paddingTop: "80px",
        }}>
        <Typography
          style={{
            fontSize: "30px",
            display: "flex",
            justifyContent: "center",
            fontWeight: "bold",
            color: "#ff77a9",
          }}>
          Embrace the mix
        </Typography>
        <Typography
          style={{
            fontSize: "20px",
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}>
          with a variety of furniture styles to create your perfect room
        </Typography>
      </Box>
      <ImageList
        style={{ marginTop: "70px", marginLeft: "320px" }}
        sx={{ width: 700, height: 525 }}>
        <ImageListItem key="Subheader" cols={2}>
          <ListSubheader component="div"></ListSubheader>
        </ImageListItem>
        {itemData.map(item => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.author}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${item.title}`}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: "https://d3tskdc1t7oml9.cloudfront.net/media/wysiwyg/smartwave/porto/homepage/03/content/welcome_2021.jpg",
    title: "Breakfast",
    author: "@bkristastucchio",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://www.iconmobel.de/6781-thickbox_default/sillon-space-con-reposapies.jpg",

    title: "Burger",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0064/3796/1801/products/solna-3-seat-sofa-driftwood-fabric-sofa-the-modern-furniture-store_900x.jpg?v=1649220179",
    title: "Camera",
    author: "@helloimnik",
  },
  {
    img: "https://kupmeble.pl/files/product/17124/bhe512-2-otilia-1a-da50d937.jpg",
    title: "Coffee",
    author: "@nolanissac",
    cols: 2,
  },
  {
    img: "https://res.cloudinary.com/hni-corporation/image/upload/f_auto,q_auto/v1592407607/HON/Chairs/West%20Hill/HON-WestHill-HWH1SS.B.PBLE02.CWLLA1-000-001.jpg",
    title: "Hats",
    author: "@hjrc33",
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/736x/67/96/4c/67964c19e64a523f08688f8f40179f09.jpg",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0019/2521/8356/products/gray-hammock-chair-limbo-imports-light-t.jpg?v=1649708481",
    title: "Basketball",
    author: "@tjdragotta",
  },
  {
    img: "https://secure.img1-fg.wfcdn.com/im/06785727/resize-h755-w755%5Ecompr-r85/7005/70059290/84%27%27+Rolled+Arm+Sofa+with+Reversible+Cushions.jpg",
    title: "Fern",
    author: "@katie_wasserman",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0503/0074/7976/files/Armchair_1800x.jpg?v=1602843784",
    title: "Mushrooms",
    author: "@silverdalex",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://www.homesourcetx.com/wp-content/uploads/2021/02/New-arrivals-in-Houston-1024x1024.jpg",
    title: "Tomato basil",
    author: "@shelleypauls",
  },
];
