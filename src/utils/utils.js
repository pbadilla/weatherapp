export function objToArray(objToConvert) {
  const tempArray = Object.keys(objToConvert).map((k) => {
    return objToConvert[k];
  });

  return tempArray[0];
}
