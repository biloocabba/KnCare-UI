import {
  AlignToolbarButton,
  BalloonToolbar,
  BlockToolbarButton,
  CodeBlockToolbarButton,
  ColorPickerToolbarDropdown,
  ELEMENT_BLOCKQUOTE,
  ELEMENT_CODE_BLOCK,
  ELEMENT_H1,
  ELEMENT_H2,
  ELEMENT_H3,
  ELEMENT_H4,
  ELEMENT_H5,
  ELEMENT_H6,
  ELEMENT_OL,
  ELEMENT_UL,
  getPluginType,
  getPreventDefaultHandler,
  indent,
  ListToolbarButton,
  MarkToolbarButton,
  MARK_BG_COLOR,
  MARK_BOLD,
  MARK_COLOR,
  MARK_ITALIC,
  MARK_STRIKETHROUGH,
  MARK_UNDERLINE,
  outdent,
  ToolbarButton,
  usePlateEditorRef,
} from "@udecode/plate";
import { AiOutlineFontColors } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import {
  MdCode,
  MdFontDownload,
  MdFormatAlignCenter,
  MdFormatAlignLeft,
  MdFormatAlignRight,
  MdFormatBold,
  MdFormatIndentDecrease,
  MdFormatIndentIncrease,
  MdFormatItalic,
  MdFormatListBulleted,
  MdFormatListNumbered,
  MdFormatQuote,
  MdFormatStrikethrough,
  MdFormatUnderlined,
  MdLooks3,
  MdLooks4,
  MdLooks5,
  MdLooks6,
  MdLooksOne,
  MdLooksTwo,
} from "react-icons/md";

export const BasicElementToolbarButtons = () => {
  const editor = usePlateEditorRef();

  return (
    <>
      <BlockToolbarButton type={getPluginType(editor, ELEMENT_H1)} icon={<MdLooksOne />} />
      <BlockToolbarButton type={getPluginType(editor, ELEMENT_H2)} icon={<MdLooksTwo />} />
      <BlockToolbarButton type={getPluginType(editor, ELEMENT_H3)} icon={<MdLooks3 />} />
      <BlockToolbarButton type={getPluginType(editor, ELEMENT_H4)} icon={<MdLooks4 />} />
      <BlockToolbarButton type={getPluginType(editor, ELEMENT_H5)} icon={<MdLooks5 />} />
      <BlockToolbarButton type={getPluginType(editor, ELEMENT_H6)} icon={<MdLooks6 />} />
      <BlockToolbarButton
        type={getPluginType(editor, ELEMENT_BLOCKQUOTE)}
        icon={<MdFormatQuote />}
      />
      <CodeBlockToolbarButton type={getPluginType(editor, ELEMENT_CODE_BLOCK)} icon={<MdCode />} />
    </>
  );
};

export const BasicMarkToolbarButtons = () => {
  const editor = usePlateEditorRef();

  return (
    <>
      <MarkToolbarButton type={getPluginType(editor, MARK_BOLD)} icon={<MdFormatBold />} />
      <MarkToolbarButton type={getPluginType(editor, MARK_ITALIC)} icon={<MdFormatItalic />} />
      <MarkToolbarButton
        type={getPluginType(editor, MARK_UNDERLINE)}
        icon={<MdFormatUnderlined />}
      />
      <MarkToolbarButton
        type={getPluginType(editor, MARK_STRIKETHROUGH)}
        icon={<MdFormatStrikethrough />}
      />
    </>
  );
};

export const ColorPickerToolbarButtons = () => {
  return (
    <>
      <ColorPickerToolbarDropdown
        pluginKey={MARK_COLOR}
        icon={<AiOutlineFontColors />}
        selectedIcon={<BsCheckLg />}
      />
      <ColorPickerToolbarDropdown
        pluginKey={MARK_BG_COLOR}
        icon={<MdFontDownload />}
        selectedIcon={<BsCheckLg />}
      />
    </>
  );
};

export const IndentToolbarButtons = () => {
  const editor = usePlateEditorRef();

  return (
    <>
      <ToolbarButton
        onMouseDown={editor && getPreventDefaultHandler(outdent, editor)}
        icon={<MdFormatIndentDecrease />}
      />
      <ToolbarButton
        onMouseDown={editor && getPreventDefaultHandler(indent, editor)}
        icon={<MdFormatIndentIncrease />}
      />
    </>
  );
};

export const ListToolbarButtons = () => {
  const editor = usePlateEditorRef();

  return (
    <>
      <ListToolbarButton type={getPluginType(editor, ELEMENT_UL)} icon={<MdFormatListBulleted />} />
      <ListToolbarButton type={getPluginType(editor, ELEMENT_OL)} icon={<MdFormatListNumbered />} />
    </>
  );
};

export const AlignToolbarButtons = () => {
  return (
    <>
      <AlignToolbarButton value="left" icon={<MdFormatAlignLeft />} />
      <AlignToolbarButton value="center" icon={<MdFormatAlignCenter />} />
      <AlignToolbarButton value="right" icon={<MdFormatAlignRight />} />
      {/* <AlignToolbarButton value="justify" icon={<MdFormatAlignJustify />} /> */}
    </>
  );
};

export const MarkBallonToolbar = () => {
  const editor = usePlateEditorRef();

  return (
    <BalloonToolbar
      popperOptions={{
        placement: "top",
      }}
      theme="light"
      arrow={false}
    >
      <MarkToolbarButton type={getPluginType(editor, MARK_BOLD)} icon={<MdFormatBold />} />
      <MarkToolbarButton type={getPluginType(editor, MARK_ITALIC)} icon={<MdFormatItalic />} />
      <MarkToolbarButton
        type={getPluginType(editor, MARK_UNDERLINE)}
        icon={<MdFormatUnderlined />}
      />
    </BalloonToolbar>
  );
};
