export const isEmpty = (value: any) => {
  if (value === null) {
    return true;
  }
  /* string */
  if (typeof value === "string") {
    return value.length === 0;
  }
  /* object */
  if (typeof value === "object") {
    return Object.keys(value).length === 0;
  }
  /* other type */
};
