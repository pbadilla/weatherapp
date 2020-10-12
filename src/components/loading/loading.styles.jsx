import style from "styled-components";

export const LoaderWrapper = style.section`
$loader: #363636;
$background: white;
$size: 3$loader: #363636;
$background: white;
$size: 30px;

.loader {
  position: relative;
  top: 0;
  left: 0;
  width: $size;
  height: $size;
  animation: loader 0.75s linear infinite;

  span {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  .loader-inner-1 {
    background: linear-gradient(
      to right,
      rgba($loader, 0) 0%,
      rgba($loader, 0) 50%,
      $loader 51%
    );
  }

  .loader-inner-2 {
    background: linear-gradient(
      to top,
      rgba($background, 0) 0%,
      $background 100%
    );
  }

  .loader-inner-3 {
    $offset: $size * 0.1;
    top: $offset;
    left: $offset;
    width: $size - ($offset * 2);
    height: $size - ($offset * 2);
    background: $background;
  }
}

@keyframes loader {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
0px;

.loader {
  position: relative;
  top: 0;
  left: 0;
  width: $size;
  height: $size;
  animation: loader 0.75s linear infinite;

  span {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  .loader-inner-1 {
    background: linear-gradient(
      to right,
      rgba($loader, 0) 0%,
      rgba($loader, 0) 50%,
      $loader 51%
    );
  }

  .loader-inner-2 {
    background: linear-gradient(
      to top,
      rgba($background, 0) 0%,
      $background 100%
    );
  }

  .loader-inner-3 {
    $offset: $size * 0.1;
    top: $offset;
    left: $offset;
    width: $size - ($offset * 2);
    height: $size - ($offset * 2);
    background: $background;
  }
}

@keyframes loader {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}`;
