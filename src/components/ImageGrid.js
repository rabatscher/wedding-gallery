import React, { useState } from "react";
import { schlossHeidegg } from "../imageList";
import ImageItem from "./ImageItem";

function ImageGrid({ album }) {
  let filteredImages = schlossHeidegg
    .slice()
    .filter((image) => image.album === album);

  //   if (album === 3) setImageList(photobox);
  return (
    <div className="grid grid-cols-2 gap-0">
      {filteredImages.map((el) => {
        return <ImageItem src={el.src} alt={el.location} />;
      })}
    </div>
  );
}

export default ImageGrid;
