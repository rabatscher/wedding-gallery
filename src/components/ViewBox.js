import React, { useEffect } from "react";

import { schlossHeidegg } from "../imageList";
import ViewBoxItem from "./ViewBoxItem";
import { AiOutlineClose, AiOutlineCloudDownload } from "react-icons/ai";

function ViewBox({ activeImage, handleActiveImage, album, style }) {
  let filteredImages = schlossHeidegg
    .slice()
    .filter((image) => image.album === album);

  useEffect(() => {
    return () => {
      const element = document.getElementById("#schlossheidegg_014.jpg");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen z-40 grid place-content-center `}>
      {/* <div className="absolute inset-0 z-30 flex"> */}
      {/* <div className="fixed bottom-2 left-2 z-40">
        <a
          href={`#schlossheidegg_${
            activeImage < 10
              ? "00" + (activeImage + 1)
              : "0" + (activeImage + 1)
          }.jpg`}
          className="
         hover:bg-[#f6b284] hover:ring-[#f6b284] inline-flex items-center p-3 text-white transition-opacity focus:outline-none hover:ring-2 focus:ring-offset-2">
          <AiOutlineClose className="h-8 w-8" aria-hidden="true" />
        </a>
      </div> */}
      <div className="fixed bottom-[3vh] z-50 right-[48%]">
        <p className="text-xs text-white">
          {activeImage + 1} | {filteredImages.length}
        </p>
      </div>
      <div className="fixed top-2 right-2 z-40">
        <button
          onClick={() => handleActiveImage(-1)}
          className="
         hover:bg-[#f6b284] hover:ring-[#f6b284] inline-flex items-center p-3 text-white transition-opacity focus:outline-none hover:ring-2 focus:ring-offset-2">
          <AiOutlineClose className="h-8 w-8" aria-hidden="true" />
        </button>
      </div>

      <div className="fixed bottom-2 right-2 z-40">
        <a
          href={`images/${
            { 1: "schlossheidegg", 2: "schifflaende", 3: "photobox" }[album]
          }_${
            activeImage < 10
              ? "00" + (activeImage + 1)
              : "0" + (activeImage + 1)
          }.jpg`}
          download={`${
            { 1: "schlossheidegg", 2: "schifflaende", 3: "photobox" }[album]
          }_${
            activeImage < 10
              ? "00" + (activeImage + 1)
              : "0" + (activeImage + 1)
          }.jpg`}
          className="
         hover:bg-[#f6b284] hover:ring-[#f6b284] inline-flex items-center p-3 text-white transition-opacity focus:outline-none hover:ring-2 focus:ring-offset-2">
          <AiOutlineCloudDownload className="h-8 w-8" aria-hidden="true" />
        </a>
      </div>
      <div
        className="absolute inset-0 bg-[#000000] opacity-70 "
        onClick={() => handleActiveImage(-1)}></div>

      {/* </div> */}
      <div className="flex absoulte text-white z-50 inline-0 max-w-[100vw] max-h-[80vh] place-content-center gap-8 ">
        {/* {filteredImages.map((el, i) => {
          return (
            <>
              {el.src}
              <ViewBoxItem src={el.src} key={"view" + i} />
            </>
          );
        })} */}
        <ViewBoxItem
          src={filteredImages[activeImage].src}
          key={"view" + activeImage}
          activeImage={activeImage}
          handleActiveImage={handleActiveImage}
          max={filteredImages.length}
          style={style}
        />
      </div>
    </div>
  );
}

export default ViewBox;
