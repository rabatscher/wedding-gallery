import React from "react";

function ImageItem({ src, alt }) {
  return (
    // <div className="relative group transition duration-500">
    //   <div className="absolute inset-0 z-10 flex transition duration-200 ease-in hover:opacity-0 ">
    //     <div className="absolute inset-0 bg-[#000000] opacity-40"></div>
    //     <div className="absolute inset-3  border-2 border-white opacity-100"></div>
    //   </div>
    //   <div className="transition group hover:scale-150 duration-100 ease-in">
    //     <img src={src} alt={alt} />
    //   </div>
    // </div>
    <div
      className={`relative group transition duration-500 overflow-hidden cursor-pointer`}>
      <div className="absolute inset-0 z-10 flex transition duration-200 ease-in group-hover:opacity-0">
        <div className="absolute inset-0 bg-[#000000] opacity-50"></div>
        <div className="absolute inset-3  border-2 border-white opacity-100"></div>
      </div>
      <div className="transition scale-110 group-hover:scale-100 duration-100 ease-in">
        <img src={src} alt={alt} />
      </div>
    </div>
  );
}

export default ImageItem;
