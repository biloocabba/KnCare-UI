import { withPlaceholders } from "@udecode/plate";

/**
 *  @description when you want to use specific text for element
 * @param components
 */
export const withStyledPlaceHolders = (components: any) =>
  withPlaceholders(components, [
    // {
    //   key: ELEMENT_PARAGRAPH,
    //   placeholder: "Type a paragraph",
    //   hideOnBlur: true,
    // },
    // {
    //   key: ELEMENT_H1,
    //   placeholder: "Untitled",
    //   hideOnBlur: false,
    // },
  ]);
