// https://stackoverflow.com/questions/286141/remove-blank-attributes-from-an-object-in-javascript
export const removeEmptyAttributesFromObject = (obj: Record<string, unknown>) => {
  // _ is not used but its value is the attribute name
  return Object.fromEntries(
    Object.entries(obj).filter(([, value]) => value !== null && value !== "")
  );
};
