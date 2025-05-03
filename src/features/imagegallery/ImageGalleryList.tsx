import { useEffect, useState } from "react";
import ImageList from "./ImageList";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

type ImageGalleryListProps = {
  images: string[]; //mandatory prop
  loop?: boolean; //infinity gallery
  gridAll?: boolean; //gallery images in grid to view at once
};

export default function ImageViewer({
  images,
  loop,
  gridAll,
}: ImageGalleryListProps) {
  const [Gallery] = useState(() => {
    const list = new ImageList();
    images?.forEach((image) => list.append(image));
    return list;
  });

  const [currentImage, setCurrentImage] = useState(Gallery.getCurrent());

  const [galleryImages] = useState(Gallery.getGallery() || []);

  const handleNext = () => {
    if (loop) {
      setCurrentImage(Gallery.next() || Gallery.getHead());
    } else {
      if (Gallery.hasNext()) {
        setCurrentImage(Gallery.next() || null);
      }
    }
  };

  const handlePrevious = () => {
    if (loop) {
      setCurrentImage(Gallery.prev() || Gallery.getTail());
    } else {
      if (Gallery.hasPrev()) {
        setCurrentImage(Gallery.prev());
      }
    }
  };

  function handleKeyUp(e) {
    console.log(e);
    if (e.code === "ArrowLeft") {
      handlePrevious();
    }

    if (e.code === "ArrowRight") {
      handleNext();
    }
  }

  return (
    <>
      <div
        className='flex flex-col items-center justify-center max-h-screen overflow-hidden'
        onKeyUp={handleKeyUp}
        tabIndex={0}>
        <div className='relative overflow-hidden rounded-lg shadow-lg'>
          <img
            src={currentImage || ""}
            alt='Gallery'
            className='object-cover w-full h-full'
          />

          <Button
            disabled={!Gallery.hasPrev() && !loop}
            onClick={handlePrevious}
            size='icon'
            variant='outline'
            className='absolute top-1/2 left-4 transform -translate-y-1/2 rounded-full bg-white/40 border-white border-2 hover:bg-white cursor-pointer'>
            <FaArrowLeftLong size={24} />
          </Button>
          <Button
            disabled={!loop && !Gallery.hasNext()}
            onClick={handleNext}
            size='icon'
            variant='outline'
            className='absolute top-1/2 right-4 transform -translate-y-1/2 rounded-full border-white border-2 hover:bg-white cursor-pointer bg-white/40'>
            <FaArrowRightLong size={24} />
          </Button>
        </div>
        {gridAll && (
          <div className='flex p-2 justify-center items-center scroll-auto overflow-hidden my-2'>
            {galleryImages?.map((item, index) => {
              console.log(item);
              return (
                <div key={`item-${index}`}>
                  <img
                    src={item}
                    alt=''
                    className={`cursor-pointer ${
                      currentImage === item ? "" : "opacity-80"
                    }`}
                    onClick={() => setCurrentImage(item)}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
