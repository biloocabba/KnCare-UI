// https://stackoverflow.com/questions/286141/remove-blank-attributes-from-an-object-in-javascript
export const removeEmptyAttributesFromObject = (obj: Object) => {
  // _ is not used but its value is the attribute name
  return Object.fromEntries(
    Object.entries(obj).filter(([_, value]) => value !== null && value !== "")
  );
};
