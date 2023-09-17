import React from "react";
export default function AlbumBar({ handleSetAlbum, album }) {
  return (
    <div className="flex">
      <button
        onClick={() => handleSetAlbum(0)}
        type="button"
        className=" text-white border-white border-2  py-2 hover:bg-[#f6b284] hover:border-transparent hover:text-white px-3 ">
        <div className="flex flex-row align-middle">
          <svg
            className="w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
              clip-rule="evenodd"></path>
          </svg>
        </div>
      </button>
      <h1 className="text-6xl h-20">
        {album === 1 ? "Schloss Heidegg" : ""}
        {album === 2 ? "Schifflände" : ""}
        {album === 3 ? "Photobox" : ""}
      </h1>
    </div>
  );
}
