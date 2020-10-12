import style from "styled-components";

export const ImageWrapper = style.section`
  position: relative;
    width: 100%;
    height: 50vw;

  @keyframes bground {
    0% {
      background-color: #fff;
    }
    50% {
      background-color: #ccc;
    }
    100% {
      background-color: #fff;
    }
  }
`;

export const Placeholder = style.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  animation: bground 1s infinite;
  .styledImage {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
