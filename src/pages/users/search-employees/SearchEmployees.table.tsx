import { ColumnDescription } from "react-bootstrap-table-next";

export const employeesTableColumns: ColumnDescription<any, any>[] = [
  {
    dataField: "id",
    text: "id",
    hidden: true,
  },
  {
    dataField: "firstName",
    text: "First Name",
  },
  {
    dataField: "lastName",
    text: "Last Name",
  },
  {
    dataField: "internationalName",
    text: "Int Name",
    sort: true,
  },
  {
    dataField: "title",
    text: "Title",
    sort: true,
    style: { width: "50px" },
  },
  {
    dataField: "businessUnit",
    text: "bUnit",
    sort: true,
    style: { width: "50px" },
  },
  {
    dataField: "companyCode",
    text: "companyCode",
    sort: true,
    style: { width: "50px" },
  },
  {
    dataField: "office.country",
    text: "country",
    sort: true,
  },
  {
    dataField: "startDate",
    text: "Hire Date",
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
