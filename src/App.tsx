import { useState } from "react";

import "./App.css";
import ImageGalleryList from "./features/imagegallery/ImageGalleryList";

const imageList = [
  "https://placehold.co/1200x800/000000/FFFFFF/png",
  "https://placehold.co/1200x800/FF0000/FFFFFF/png",
  "https://placehold.co/1200x800/00FF00/FFFFFF/png",
  "https://placehold.co/1200x800/0000FF/FFFFFF/png",
  "https://placehold.co/1200x800/FFFF00/FFFFFF/png",
  "https://placehold.co/1200x800/FF00FF/FFFFFF/png",
  "https://placehold.co/1200x800/00FFFF/FFFFFF/png",
  "https://placehold.co/1200x800/FFFFFF/000000/png",
];

function App() {
  return (
    <>
      <div className='w-full'>
        <ImageGalleryList images={imageList} />
      </div>
    </>
  );
}

export default App;
