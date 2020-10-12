import styled from "styled-components";

export const SearchWrapper = styled.div`
  display: flex;
  margin: 30px 30px 10px 30px;
  width: 100%;
  form {
    align-items: center;
    display: flex-inline;
    flex-direction: row;

    input {
      background-color: #f0f0f0;
      border-radius: 4px 0 4px 4px;
      border: solid 0.5px rgba(98, 98, 98, 0.4);
      font-family: "Lato";
      height: 20px;
      object-fit: contain;
      padding-left: 5px;
      width: 355px;
    }
    button {
      left: -4px;
      position: relative;
      top: -1px;
    }
  }
`;
