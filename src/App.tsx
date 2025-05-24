import { useState } from "react";

import "./App.css";
import ImageGalleryList from "./features/imagegallery/ImageGalleryList";

const imageList = [
  "https://cdn.pixabay.com/photo/2017/09/04/18/39/coffee-2714970_1280.jpg",
  "https://cdn.pixabay.com/photo/2014/12/11/02/56/coffee-563797_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/03/13/12/34/coffee-2139592_1280.jpg",
  "https://cdn.pixabay.com/photo/2012/02/23/09/16/coffee-15994_1280.jpg",
  "https://cdn.pixabay.com/photo/2018/01/31/09/57/coffee-3120750_1280.jpg",
  "https://cdn.pixabay.com/photo/2023/04/03/17/46/coffee-7897414_1280.jpg",
  "https://cdn.pixabay.com/photo/2022/11/03/15/24/coffee-7567749_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/11/29/12/52/coffee-1869647_1280.jpg",
];

function App() {
  return (
    <>
      <div className='w-full'>
        <ImageGalleryList gridAll={true} images={imageList} />
      </div>
    </>
  );
}

export default App;
