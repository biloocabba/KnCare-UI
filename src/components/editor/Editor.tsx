import { useState } from "react";

import { HeadingToolbar, ImageToolbarButton, LinkToolbarButton, Plate } from "@udecode/plate";
import { MdAttachFile, MdImage, MdLink } from "react-icons/md";

import { EmailContent } from "pages/emails";
import { toFileArray } from "types";

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
        <label
          style={{ cursor: "pointer", marginBottom: "0.2rem" }}
          htmlFor="file-content-upload"
          id="fileUpload"
        >
          <MdAttachFile size={17} />
        </label>
        <input
          id="file-content-upload"
          style={{
            visibility: "hidden",
            position: "absolute",
            width: "0px",
          }}
          type="file"
          onChange={changeFileHandler}
          multiple
        />
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
        {files.length > 0 && `Files: ${files.map(file => file.name).join(", ")}`}
      </div>
    </>
  );
};
