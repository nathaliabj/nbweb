import { FC, useRef, useEffect } from "react";
import { GalleryWrapper, Overlay } from "./gallery.sc";
import imagesSrc from "./imgSrc.json";

interface Props {
  isActive: boolean;
}

const Gallery: FC<Props> = ({ isActive }) => {
  const imageRef = useRef<HTMLImageElement>(null);

  let intervalID;
  let index = 0;

  
 const updateSrc = async () => {
   let src = imagesSrc[index];

   index === imagesSrc.length ? (index = 0) : index++;
   imageRef?.current.setAttribute("src", src);
 };

  useEffect(() => {
    if (isActive) {
      intervalID = setInterval(updateSrc, 130);
    }

    return () => {
      clearInterval(intervalID);
      imageRef?.current.setAttribute("src", imagesSrc[0]);
    };
  }, [isActive, updateSrc]);

 
  return (
    <>
      <GalleryWrapper>
        <img
          ref={imageRef}
          src="/photos/nathalia.jpg"
          alt="Nathalia Buitrago"
          width={496}
          height={550}
        />
        <Overlay />
      </GalleryWrapper>
    </>
  );
};

export default Gallery;
