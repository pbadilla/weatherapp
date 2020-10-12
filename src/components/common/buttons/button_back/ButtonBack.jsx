import React from "react";
import { useHistory } from "react-router-dom";

import arrowLeft from "../../../../../public/images/left_arrow.svg";

import { BackButtonWrapper } from "./backbutton.styles";

export const Buttonback = () => {
  let history = useHistory();
  return (
    <>
      <BackButtonWrapper onClick={() => history.goBack()}>
        <img src={arrowLeft} alt="Go previous" />
        <span>Return</span>
      </BackButtonWrapper>
    </>
  );
};
