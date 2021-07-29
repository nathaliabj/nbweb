import { FC, useRef, useEffect } from "react";
import { GalleryWrapper } from "./gallery.sc";


interface Props {
  isActive: boolean;
}

const Gallery: FC<Props> = ({ isActive }) => {
  const imageRef = useRef<HTMLImageElement>(null);
  
  const imagesSrc = [
    "/photos/nathalia.png",
    "/photos/academy.png",
    "/photos/documentation.png",
  ];

  let intervalID;
  let index = 0;

  useEffect(() => {
    if (isActive) {
      intervalID = setInterval(updateSrc, 130);
    }

    return () => {
      clearInterval(intervalID);
      imageRef?.current.setAttribute("src", imagesSrc[0]);
    };
  }, [isActive]);

  const updateSrc = () => {
    let src = imagesSrc[index];

    index === imagesSrc.length ? (index = 0) : index++;
    imageRef?.current.setAttribute("src", src);
  };

  return (
    <>
      <GalleryWrapper>
        <img
          ref={imageRef}
          src="/photos/nathalia.png"
          alt="Nathalia Buitrago"
          width={496}
          height={550}
        />
      </GalleryWrapper>
    </>
  );
};

export default Gallery;
