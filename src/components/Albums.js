import React from "react";
import AlbumItem from "./AlbumItem";

export default function Albums() {
  return (
    // WRAPPER
    <div className="flex flex-col grow h-screen gap-0">
      <AlbumItem text="Schloss Heidegg" source="albums/album_001.jpg" />
      <AlbumItem text="Schifflände" source="albums/album_002.jpg" />
      <AlbumItem text="Photobox" source="albums/album_003.jpg" />
    </div>
  );
}
