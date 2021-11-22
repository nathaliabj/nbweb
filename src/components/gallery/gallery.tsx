import { FC, useRef, useEffect } from "react";
import { GalleryWrapper, Overlay } from "./gallery.sc";
import imagesSrc from "./imgSrc.json"

interface Props {
  isActive: boolean;
}

const Gallery: FC<Props> = ({ isActive }) => {
  const imageRef = useRef<HTMLImageElement>(null);

  // const imagesSrc = [
  //   "/photos/nathalia.jpg",
  //   "/photos/img1.jpg",
  //   "/photos/img2.jpg",
  //   "/photos/img3.jpg",
  //   "/photos/img4.jpg",
  //   "/photos/img5.jpg",
  //   "/photos/img6.jpg",
  //   "/photos/img7.jpg",
  //   "/photos/img8.jpg",
  //   "/photos/img9.jpg",
  //   "/photos/img10.jpg",
  //   "/photos/img11.jpg",
  //   "/photos/img12.jpg",
  //   "/photos/img13.jpg",
  //   "/photos/img14.jpg",
  //   "/photos/img15.jpg",
  //   "/photos/img16.jpg",
  //   "/photos/img17.jpg",
  //   "/photos/img18.jpg",
  //   "/photos/img19.jpg",
  //   "/photos/img20.jpg",
  //   "/photos/img21.jpg",
  //   "/photos/img22.jpg",
  //   "/photos/img23.jpg",
  //   "/photos/img24.jpg",
  //   "/photos/img25.jpg",
  //   "/photos/img26.png",
  //   "/photos/img27.jpg",
  //   "/photos/img28.jpg",
  //   "/photos/img29.jpg",
  //   "/photos/img30.jpg",
  //   "/photos/img31.jpg",
  // ];

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
