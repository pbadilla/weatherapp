// .lazyImage {
//   display: block;
//   height: 100%;
//   width: 100%;

//   // Add a smooth animation on loading
//   @keyframes loaded {
//     0% {
//       opacity: 0.1;
//     }
//     100% {
//       opacity: 1;
//     }
//   }

//   // I use utilitary classes instead of props to avoid style regenerating
//   &.loaded:not(.has-error) {
//     animation: loaded 300ms ease-in-out;
//   }

//   &.has-error {
//     // fallback to placeholder image on error
//     content: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII=");
//   }
// }
