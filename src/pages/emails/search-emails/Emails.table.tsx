import { ColumnDescription } from "react-bootstrap-table-next";

export const emailsTableColumns: ColumnDescription<any, any>[] = [
  {
    dataField: "sendDate",
    text: "Date",
    sort: true,
  },
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
