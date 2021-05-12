import React, { FC } from "react";
import { GalleryWrapper } from "./gallery.sc";
import Image from "next/image";

const Gallery: FC = () => (
  <GalleryWrapper>
    <Image src="/photos/nathalia.png" alt="Nathalia Buitrago" width={496} height={550} />
  </GalleryWrapper>
);

export default Gallery;
