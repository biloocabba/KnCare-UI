import { ColumnDescription } from "react-bootstrap-table-next";

export const groupsTableColumns: ColumnDescription<any, any>[] = [
  {
    dataField: "id",
    text: "id",
    hidden: true,
  },
  {
    dataField: "name",
    text: "Name",
    sort: true,
  },
  {
    dataField: "description",
    text: "description",
    sort: true,
  },
  {
    dataField: "active",
    text: "active",
    sort: true,
  },
  {
    dataField: "action",
    text: "",
    formatter: () => {
      return <></>;
    },
  },
];
