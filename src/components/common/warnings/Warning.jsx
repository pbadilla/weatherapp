import React from "react";

import { WarningWrapper, Message, IconMessage } from "./warning.styles";

import Exclamation from "../../../../public/images/alert.svg";

const Warning = ({ message, hasIcon, isVisible }) => {

  return (
    <WarningWrapper isVisible={isVisible}>
      <Message>{message}</Message>
      <IconMessage>
        {hasIcon ? <img src={Exclamation} alt={message} /> : ""}
      </IconMessage>
    </WarningWrapper>
  );
};

export default Warning;
