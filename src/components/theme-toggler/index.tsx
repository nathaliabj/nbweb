import React from "react";
import {ModeTrigger} from "./theme-toggler.sc";

const ThemeToggler = (props) => {
  const { themeToggler } = props;
  return <ModeTrigger onClick={themeToggler}>//</ModeTrigger>;
};

export default ThemeToggler;
