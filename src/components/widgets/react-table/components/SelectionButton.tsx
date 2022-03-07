import { Row } from "react-table";

import { Button } from "reactstrap";

interface Props {
  selectButtonText: string | undefined;
  selectedFlatRows: Row<Record<string, unknown>>[];
}

export const SelectionButton = <T,>({ selectButtonText, selectedFlatRows }: Props) => {
  return (
    <>
      {selectButtonText && (
        <>
          <Button
            className="btn btn-success btn-md h-25"
            onClick={() =>
              console.log(
                "selectedRows",
                selectedFlatRows.map(row => row.original as unknown as T)
              )
            }
          >
            {selectButtonText}
          </Button>
        </>
      )}
    </>
  );
};
