import React from "react";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

function ViewBoxItem({ src, activeImage, handleActiveImage, max }) {
  return (
    <>
      <img className="snap-center" id={src} src={"/thumbs/" + src} alt="" />
      {activeImage + 1 < max && (
        <div className="fixed top-[47%] right-0 z-50">
          <button
            onClick={() => handleActiveImage(activeImage + 1)}
            className="
          hover:bg-[#f6b284] hover:ring-[#f6b284] inline-flex items-center p-3 text-white transition-opacity focus:outline-none hover:ring-2 focus:ring-offset-2">
            <AiOutlineRight className="h-8 w-8" aria-hidden="true" />
          </button>
        </div>
      )}
      {activeImage > 0 && (
        <div className="fixed top-[47%] left-0 z-50">
          <button
            onClick={() => handleActiveImage(activeImage - 1)}
            className="
          hover:bg-[#f6b284] hover:ring-[#f6b284] inline-flex items-center p-3 text-white transition-opacity focus:outline-none hover:ring-2 focus:ring-offset-2">
            <AiOutlineLeft className="h-8 w-8" aria-hidden="true" />
          </button>
        </div>
      )}
    </>
  );
}

export default ViewBoxItem;
