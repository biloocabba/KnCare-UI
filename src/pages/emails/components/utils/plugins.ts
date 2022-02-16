import {
  createAlignPlugin,
  createBasicElementsPlugin,
  createBasicMarksPlugin,
  createComboboxPlugin,
  createExitBreakPlugin,
  createFontBackgroundColorPlugin,
  createFontColorPlugin,
  createFontFamilyPlugin,
  createFontSizePlugin,
  createFontWeightPlugin,
  createHorizontalRulePlugin,
  createImagePlugin,
  createIndentPlugin,
  createJuicePlugin,
  createLineHeightPlugin,
  createLinkPlugin,
  createListPlugin,
  createPlateUI,
  createPlugins,
  createResetNodePlugin,
  createSelectOnBackspacePlugin,
  createSoftBreakPlugin,
  createTodoListPlugin,
  createTrailingBlockPlugin,
} from "@udecode/plate";

import { CONFIG, withStyledPlaceHolders } from ".";

let components = createPlateUI();
components = withStyledPlaceHolders(components);

export const plugins = createPlugins(
  [
    createBasicElementsPlugin(),
    createBasicMarksPlugin(),

    createTodoListPlugin(),

    createImagePlugin(),

    createHorizontalRulePlugin(),

    createLineHeightPlugin(CONFIG.lineHeight),

    createLinkPlugin(),

    createListPlugin(),

    createAlignPlugin(CONFIG.align),

    createIndentPlugin(CONFIG.indent),

    createFontColorPlugin(),
    createFontBackgroundColorPlugin(),
    createFontSizePlugin(),

    createFontFamilyPlugin(),
    createFontWeightPlugin(),

    createResetNodePlugin(CONFIG.resetBlockType),
    createSoftBreakPlugin(CONFIG.softBreak),
    createExitBreakPlugin(CONFIG.exitBreak),
    createTrailingBlockPlugin(CONFIG.trailingBlock),
    createSelectOnBackspacePlugin(CONFIG.selectOnBackspace),

    createComboboxPlugin(),
    createJuicePlugin(),
  ],
  {
    components,
  }
);
