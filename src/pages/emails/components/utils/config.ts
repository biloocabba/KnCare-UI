import {
  createPlateUI,
  ELEMENT_BLOCKQUOTE,
  ELEMENT_CODE_BLOCK,
  ELEMENT_H1,
  ELEMENT_H2,
  ELEMENT_H3,
  ELEMENT_H4,
  ELEMENT_H5,
  ELEMENT_H6,
  ELEMENT_HR,
  ELEMENT_IMAGE,
  ELEMENT_MEDIA_EMBED,
  ELEMENT_PARAGRAPH,
  ELEMENT_TD,
  ELEMENT_TODO_LI,
  ExitBreakPlugin,
  IndentPlugin,
  isBlockAboveEmpty,
  isSelectionAtBlockStart,
  KEYS_HEADING,
  PlatePlugin,
  ResetNodePlugin,
  SelectOnBackspacePlugin,
  SoftBreakPlugin,
  TrailingBlockPlugin,
} from "@udecode/plate";
import { EditableProps } from "slate-react/dist/components/editable";

const resetBlockTypesCommonRule = {
  types: [ELEMENT_BLOCKQUOTE, ELEMENT_TODO_LI],
  defaultType: ELEMENT_PARAGRAPH,
};

interface Config {
  components: Record<string, any>;
  editableProps: EditableProps;
  initialValue: any;

  align: Partial<PlatePlugin>;
  exitBreak: Partial<PlatePlugin<Record<string, unknown>, ExitBreakPlugin>>;
  // forceLayout: Partial<PlatePlugin<Record<string, unknown>, NormalizeTypesPlugin>>;
  indent: Partial<PlatePlugin<Record<string, unknown>, IndentPlugin>>;
  lineHeight: Partial<PlatePlugin>;
  resetBlockType: Partial<PlatePlugin<Record<string, unknown>, ResetNodePlugin>>;
  selectOnBackspace: Partial<PlatePlugin<Record<string, unknown>, SelectOnBackspacePlugin>>;
  softBreak: Partial<PlatePlugin<Record<string, unknown>, SoftBreakPlugin>>;
  trailingBlock: Partial<PlatePlugin<Record<string, unknown>, TrailingBlockPlugin>>;
}

export const CONFIG: Config = {
  editableProps: {
    autoFocus: true,
    spellCheck: false,
    placeholder: "Type…",
    style: {
      padding: "2rem",
      border: "1px solid #e4e7ea",
      borderRadius: "15px",
    },
  },
  initialValue: [
    {
      children: [
        {
          text: "",
        },
      ],
    },
  ],
  components: createPlateUI({}),

  align: {
    inject: {
      props: {
        validTypes: [
          ELEMENT_PARAGRAPH,
          ELEMENT_H1,
          ELEMENT_H2,
          ELEMENT_H3,
          ELEMENT_H4,
          ELEMENT_H5,
          ELEMENT_H6,
        ],
      },
    },
  },
  indent: {
    inject: {
      props: {
        validTypes: [
          ELEMENT_PARAGRAPH,
          ELEMENT_H1,
          ELEMENT_H2,
          ELEMENT_H3,
          ELEMENT_H4,
          ELEMENT_H5,
          ELEMENT_H6,
          ELEMENT_BLOCKQUOTE,
          ELEMENT_CODE_BLOCK,
        ],
      },
    },
  },
  lineHeight: {
    inject: {
      props: {
        defaultNodeValue: "normal",
        validTypes: [
          ELEMENT_PARAGRAPH,
          ELEMENT_H1,
          ELEMENT_H2,
          ELEMENT_H3,
          ELEMENT_H4,
          ELEMENT_H5,
          ELEMENT_H6,
        ],
      },
    },
  },
  resetBlockType: {
    options: {
      rules: [
        {
          ...resetBlockTypesCommonRule,
          hotkey: "Enter",
          predicate: isBlockAboveEmpty,
        },
        {
          ...resetBlockTypesCommonRule,
          hotkey: "Backspace",
          predicate: isSelectionAtBlockStart,
        },
      ],
    },
  },
  trailingBlock: { type: ELEMENT_PARAGRAPH },
  softBreak: {
    options: {
      rules: [
        { hotkey: "shift+enter" },
        {
          hotkey: "enter",
          query: {
            allow: [ELEMENT_CODE_BLOCK, ELEMENT_BLOCKQUOTE, ELEMENT_TD],
          },
        },
      ],
    },
  },
  exitBreak: {
    options: {
      rules: [
        {
          hotkey: "mod+enter",
        },
        {
          hotkey: "mod+shift+enter",
          before: true,
        },
        {
          hotkey: "enter",
          query: {
            start: true,
            end: true,
            allow: KEYS_HEADING,
          },
        },
      ],
    },
  },
  selectOnBackspace: {
    options: {
      query: {
        allow: [ELEMENT_IMAGE, ELEMENT_MEDIA_EMBED, ELEMENT_HR],
      },
    },
  },
  // forceLayout: {
  //   options: {
  //     rules: [{ path: [0], strictType: ELEMENT_H1 }],
  //   },
  // },
};
