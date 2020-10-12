import styled from "styled-components";

export const CardCityDetailWrapper = styled.div`
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
  background-color: #5f9ea0;
  border-radius: 4px;
  box-shadow: 0 2px 6px 0 rgba(192, 192, 192, 0.5);
  color: white;
  display: flex;
  height: 250px;
  flex-direction: column;
  font-size: 14px;
  padding: 15px;
  text-align: left;
  width: 201px;
  opacity: ${(props) => (props.isVisible ? "1" : "0")};
  span {
    margin-bottom: 11px;
    z-index: 2;
  }
  button {
    margin: 0 auto;
    text-align: center;
    cursor: pointer;
    z-index: 1;
  }
`;

export const Name = styled.span`
  color: #ffffff;
  font-size: 18px;
  font-stretch: normal;
  font-style: italic;
  font-weight: bold;
  letter-spacing: normal;
  line-height: normal;
  margin: 0 auto 10px auto;
  text-align: center;
`;

export const IconWeather = styled.div`
  margin: 0 auto 10px auto;
  text-align: center;
  i {
    font-size: 47px;
  }
`;
export const Status = styled.span`
  margin: 0 auto 10px auto;
  font-size: 10px;
  text-align: center;
`;

export const WaterMark = styled.div`
  bottom: 90px;
  left: 80px;
  opacity: 0.1;
  position: relative;
  text-align: center;
  z-index: 0;

  i {
    font-size: 100px;
  }
`;
