import React from "react";
import { schlossHeidegg } from "../imageList";

function ViewBox({ activeImage, handleActiveImage, album }) {
  let filteredImages = schlossHeidegg
    .slice()
    .filter((image) => image.album === album);
  return (
    <div
      className={`fixed top-0 left-0 overflow-hidden cursor-pointer z-40 grid place-content-center h-screen w-screen`}>
      {/* <div className="absolute inset-0 z-30 flex"> */}
      <div
        className="absolute inset-0 bg-[#000000] opacity-70 "
        onClick={() => handleActiveImage(-1)}></div>

      {/* </div> */}
      <div className=" flex absoulte text-white z-50 aspect-video max-w-[90vw] max-h-[80vh] place-content-center gap-8 ">
        {activeImage >= 1 ? (
          <img
            className=""
            src={"/images/" + filteredImages[activeImage - 1].src}
            alt=""
            onClick={() => handleActiveImage(activeImage - 1)}
          />
        ) : (
          <img
            className="opacity-0"
            src={"/images/" + filteredImages[activeImage].src}
            alt=""
          />
        )}
        <img
          className=""
          src={"/images/" + filteredImages[activeImage].src}
          alt=""
        />
        {activeImage < filteredImages.length - 1 ? (
          <img
            className=""
            src={"/images/" + filteredImages[activeImage + 1].src}
            alt=""
            onClick={() => handleActiveImage(activeImage + 1)}
          />
        ) : (
          <img
            className="opacity-0"
            src={"/images/" + filteredImages[activeImage].src}
            alt=""
          />
        )}
      </div>
    </div>
  );
}

export default ViewBox;
