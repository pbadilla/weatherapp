import styled from "styled-components";

export const WarningWrapper = styled.div`
  @-webkit-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @-moz-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  animation: fadein 1s ease-in;
  align-items: flex-start;
  background-color: rgba(98, 98, 98, 0.6);
  border-radius: 4px;
  box-shadow: 0 2px 6px 0 rgba(192, 192, 192, 0.5);
  color: white;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-weight: bold;
  height: 250px;
  opacity: ${(props) => (props.isVisible ? "1" : "0")};
  padding: 15px;
  text-align: left;
  width: 201px;
`;
export const Message = styled.span`
  text-align: center;
  margin: 65px auto 20px auto;
`;

export const IconMessage = styled.div`
  text-align: center;
  margin: 15px auto 20px auto;
`;
