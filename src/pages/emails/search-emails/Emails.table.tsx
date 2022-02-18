import { ColumnDescription } from "react-bootstrap-table-next";

import { Email } from "types";

export const emailsTableColumns: ColumnDescription<any, Email>[] = [
  {
    dataField: "subject",
    text: "subject",
    sort: true,
  },
  {
    dataField: "actions",
    text: "",
    formatter: () => {
      return <></>;
    },
  },
];
