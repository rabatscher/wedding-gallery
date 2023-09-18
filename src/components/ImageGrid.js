import React, { useState } from "react";
import { schlossHeidegg } from "../imageList";
import ImageItem from "./ImageItem";
import ReactVisibilitySensor from "react-visibility-sensor";
import { isVisible } from "@testing-library/user-event/dist/utils";
import ViewBox from "./ViewBox";

function ImageGrid({ album }) {
  let filteredImages = schlossHeidegg
    .slice()
    .filter((image) => image.album === album);

  const [imagesShownArray, setImagesShownArray] = useState(
    Array(filteredImages.length).fill(false)
  );

  const imageVisibilityChange = (index, isVisible) => {
    if (isVisible) {
      setImagesShownArray((currentImagesShownArray) => {
        currentImagesShownArray[index] = true;
        return [...currentImagesShownArray];
      });
    }
  };

  const [activeImage, setActiveImage] = useState(-1);
  return (
    <div>
      {activeImage === -1 ? (
        ""
      ) : (
        <ViewBox
          activeImage={activeImage}
          handleActiveImage={setActiveImage}
          album={album}
        />
      )}
      <div
        className={`grid grid-cols-2 gap-0 ${
          activeImage !== -1 ? "blur-sm" : ""
        }`}>
        {filteredImages.map((el, i) => {
          return (
            <ReactVisibilitySensor
              key={i}
              offset={{ bottom: 80 }}
              partialVisibility={true}
              onChange={(isVisible) => imageVisibilityChange(i, isVisible)}>
              {(isVisible) => (
                <ImageItem
                  src={el.src}
                  key={i}
                  numb={i}
                  alt={el.location}
                  show={imagesShownArray[i]}
                  handleActiveImage={setActiveImage}
                />
              )}
            </ReactVisibilitySensor>
          );
        })}
      </div>
    </div>
  );
}

export default ImageGrid;
