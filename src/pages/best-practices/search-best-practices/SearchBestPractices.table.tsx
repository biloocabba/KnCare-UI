import { ColumnDescription } from "react-bootstrap-table-next";

export const bestPracticesTableColumns: ColumnDescription<any, any>[] = [
  {
    dataField: "id",
    text: "id",
    hidden: true,
  },
  {
    dataField: "title",
    text: "Title",
    sort: true,
  },
  {
    dataField: "content",
    text: "Content",
    sort: true,
  },
  {
    dataField: "description",
    text: "Description",
    sort: true,
  },
  {
    dataField: "author",
    text: "Author",
    sort: true,
  },
  {
    dataField: "tag",
    text: "Tag",
    sort: true,
  },
  {
    dataField: "rate",
    text: "Rate",
    sort: true,
  },
  {
    dataField: "time",
    text: "Time",
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
