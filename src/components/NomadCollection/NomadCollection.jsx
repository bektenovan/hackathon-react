import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

const NomadCollection = () => {
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
                    image="https://media.graphassets.com/resize=w:2400,fit:crop/output=format:webp/compress/UKfdQWqXSdGfUNuA2n76"
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        Block Nomad Leather Sofa
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        $2495
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="194"
                    image="https://media.graphassets.com/resize=w:2400,fit:crop/output=format:webp/compress/EqNMntkbSdW8iRbbQ68s"
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        Slope Nomad Leather 7-Seat U Sectional
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        $6295
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="194"
                    image="https://media.graphassets.com/resize=w:2400,fit:crop/output=format:webp/compress/jma7ZtwDRTqiIbM9LJdU"
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        Nomad Leather Loveseat with Chaise
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        $2690
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="194"
                    image="https://media.graphassets.com/resize=w:2400,fit:crop/output=format:webp/compress/1NuQeGQ7TGMOMJNTVOIf"
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        Nomad Velvet Loveseat with Chaise
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        $1990
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default NomadCollection;