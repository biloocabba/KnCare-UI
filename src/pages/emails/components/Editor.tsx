import {
  AnyObject,
  HeadingToolbar,
  ImageToolbarButton,
  LinkToolbarButton,
  Plate,
  TNode,
} from "@udecode/plate";
import { MdImage, MdLink } from "react-icons/md";

import {
  AlignToolbarButtons,
  MarkBallonToolbar,
  BasicElementToolbarButtons,
  BasicMarkToolbarButtons,
  ColorPickerToolbarButtons,
  CONFIG,
  IndentToolbarButtons,
  ListToolbarButtons,
  plugins,
} from ".";

interface Props {
  setEmailContent: React.Dispatch<React.SetStateAction<TNode<AnyObject>[]>>;
}

export const Editor = ({ setEmailContent }: Props) => {
  return (
    <>
      <HeadingToolbar>
        <BasicElementToolbarButtons />
        <BasicMarkToolbarButtons />
        <ColorPickerToolbarButtons />
        <IndentToolbarButtons />
        <ListToolbarButtons />
        <AlignToolbarButtons />
        {/* <LineHeightToolbarDropdown icon={<MdLineWeight />} /> */}
        <LinkToolbarButton icon={<MdLink />} />
        <ImageToolbarButton icon={<MdImage />} />
      </HeadingToolbar>
      <Plate
        id="1"
        editableProps={CONFIG.editableProps}
        plugins={plugins}
        onChange={newValue => {
          setEmailContent(newValue);
        }}
      >
        <MarkBallonToolbar />
      </Plate>
    </>
  );
};
