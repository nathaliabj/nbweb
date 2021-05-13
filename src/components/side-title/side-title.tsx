import React, { FC } from "react";
import { SideTitleWrapper } from "./side-title.sc";

const SideTitle: FC = ({children}) => (
  <SideTitleWrapper>{children}</SideTitleWrapper>
);

export default SideTitle;
