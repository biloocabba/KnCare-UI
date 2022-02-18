import { Button } from "reactstrap";

import ReactToPrint from "react-to-print";

interface Props {
  ref: React.MutableRefObject<null>;
}

export const PrintButton = ({ ref }: Props) => {
  return (
    <ReactToPrint
      trigger={() => (
        <Button color="primary" size="sm" className="buttons-copy buttons-html5" id="print-tooltip">
          Print
        </Button>
      )}
      content={() => ref.current}
    />
  );
};
