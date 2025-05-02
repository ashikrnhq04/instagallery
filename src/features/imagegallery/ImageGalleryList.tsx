import { useEffect, useState } from "react";
import ImageList from "./ImageList";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

type ImageGalleryListProps = {
  images: string[];
};

export default function ImageViewer({ images }: ImageGalleryListProps) {
  const [Gallery] = useState(() => {
    const list = new ImageList();
    images.forEach((image) => list.append(image));
    return list;
  });

  const [currentImage, setCurrentImage] = useState(Gallery.getCurrent());

  const handleNext = () => {
    if (Gallery.hasNext()) {
      setCurrentImage(Gallery.next());
    }
  };

  const handlePrevious = () => {
    if (Gallery.hasPrev()) {
      setCurrentImage(Gallery.prev());
    }
  };

  useEffect(() => {
    setCurrentImage(Gallery.getCurrent());
  }, [Gallery]);

  console.log(currentImage);
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
      <div className='relative overflow-hidden rounded-lg shadow-lg'>
        <img
          src={currentImage || ""}
          alt='Gallery'
          className='object-cover w-full h-full'
        />
        <button
          disabled={!Gallery.hasPrev()}
          onClick={handlePrevious}
          className='absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/60 rounded-full p-2 shadow-md hover:bg-white cursor-pointer disabled:hidden'>
          <FaArrowLeftLong size={24} />
        </button>
        <button
          onClick={handleNext}
          disabled={!Gallery.hasNext()}
          className='absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/60 rounded-full p-2 shadow-md hover:bg-white cursor-pointer disabled:hidden'>
          <FaArrowRightLong size={24} />
        </button>
      </div>
    </div>
  );
}
