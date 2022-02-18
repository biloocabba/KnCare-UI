import { useState } from "react";

import { HeadingToolbar, ImageToolbarButton, LinkToolbarButton, Plate } from "@udecode/plate";
import { MdImage, MdLink } from "react-icons/md";

import { EmailContent } from "pages/emails";
import { toFileArray } from "types";

import { DisplayFiles, FileInput } from "../widgets";

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
  setEmailContent: React.Dispatch<React.SetStateAction<EmailContent>>;
}

export const Editor = ({ setEmailContent }: Props) => {
  const [files, setFiles] = useState<File[]>([]);

  const changeFileHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFiles(toFileArray(event.currentTarget.files));
    setEmailContent(oldEmailContent => ({
      ...oldEmailContent,
      contentFiles: toFileArray(event.currentTarget.files),
    }));
  };

  return (
    <>
      <HeadingToolbar>
        <BasicElementToolbarButtons />
        <BasicMarkToolbarButtons />
        <ColorPickerToolbarButtons />
        <IndentToolbarButtons />
        <ListToolbarButtons />
        <AlignToolbarButtons />
        <LinkToolbarButton icon={<MdLink />} />
        <ImageToolbarButton icon={<MdImage />} />
        <FileInput id="file-content-upload" onChange={changeFileHandler} />
      </HeadingToolbar>
      <Plate
        id="1"
        editableProps={CONFIG.editableProps}
        plugins={plugins}
        onChange={newValue => {
          setEmailContent(oldEmailContent => ({ ...oldEmailContent, text: newValue }));
        }}
      >
        <MarkBallonToolbar />
      </Plate>
      <div className="mt-3">
        <DisplayFiles files={files} />
      </div>
    </>
  );
};
