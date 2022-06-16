import { Box } from "@mui/material";
import React, { useState } from "react";

const Like = () => {
  const [like, setLike] = useState(100),
    [isLike, setIsLike] = useState(false),
    onLikeButtonClick = () => {
      setLike(like + (isLike?-1:1));
      setIsLike(!isLike);
    };

  return (
    <Box style={{display: "flex", justifyContent: "center", marginTop:"20px" }}>
      <button 
        className={"like-button " + (isLike ? "liked" : "")}
        onClick={onLikeButtonClick}
      >
        {"Like"} | {like}
      </button>
      <style>{`
        .like-button {
            font-size: 1rem;
            padding: 5px 10px;
            color:  black;
        }
        .liked {
            font-weight: bold;
            color: pink;
          }
      `}</style>
    </Box>
  );
};

export default function App() {
  return <Like />;
}