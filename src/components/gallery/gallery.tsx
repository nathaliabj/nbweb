import { FC, useRef, useEffect } from "react";
import { GalleryWrapper, Overlay } from "./gallery.sc";


interface Props {
  isActive: boolean;
}

const Gallery: FC<Props> = ({ isActive }) => {
  const imageRef = useRef<HTMLImageElement>(null);

  const imagesSrc = [
    "/photos/nathalia.png",
    "/photos/1.JPG",
    "/photos/2.JPG",
    "/photos/3.JPG",
    "/photos/4.JPG",
    "/photos/5.JPG",
    "/photos/6.jpg",
    "/photos/7.JPG",
    "/photos/8.jpg",
    "/photos/9.jpg",
    "/photos/10.jpg",
    "/photos/11.JPG",
    "/photos/12.jpg",
    "/photos/13.jpg",
    "/photos/14.jpg",
    "/photos/15.JPG",
    "/photos/17.jpg",
    "/photos/18.jpg",
    "/photos/19.jpg",
    "/photos/20.JPG",
    "/photos/21.JPG",
    "/photos/22.jpg",
    "/photos/23.jpg",
    "/photos/24.jpg",
    "/photos/25.jpg",
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
        <Overlay />
      </GalleryWrapper>
    </>
  );
};

export default Gallery;
