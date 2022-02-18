interface Props {
  files: File[];
}

export const DisplayFiles = ({ files }: Props) => {
  return <>{files.length > 0 && `Files: ${files.map(file => file.name).join(", ")}`}</>;
};
