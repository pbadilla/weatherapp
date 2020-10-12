import styled from "styled-components";

const handleBGColorType = (color) => {
  switch (color) {
    case "odd":
      return "#FFF";
    case "selected":
      return "#5f9ea0";
    default:
      return "#EDEDED";
  }
};

export const CardWrapper = styled.span`
  align-items: center;
  background-color: ${({ bg }) => handleBGColorType(bg)};
  border-radius: 8px;
  box-shadow: 0 2px 6px 0 rgba(192, 192, 192, 0.5);
  color: ${(props) => (props.bg === "selected" ? "white" : "#626262")};
  display: flex;
  flex-direction: row;
  height: 40px;
  object-fit: contain;
  padding: 0 10px;
  width: 180px;
  i {
    width: 30px;
    font-size: 22px;
  }
`;

export const Name = styled.span`
  margin-right: 10px;
  max-width: 80px;
  width: 80px;
`;

export const Temperature = styled.span`
  margin-right: 15px;
  max-width: 40px;
  width: 40px;
`;
