import { ColumnDescription } from "react-bootstrap-table-next";

export const careMemberTableColumns: ColumnDescription<any, any>[] = [
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
    text: "lastName",
  },
  {
    dataField: "internationalName",
    text: "int Name",
    sort: true,
  },
  {
    dataField: "title",
    text: "title",
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
    dataField: "managementGroup",
    text: "Man Group",
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
    dataField: "costCenter",
    text: "costCenter",
    sort: true,
  },
  {
    dataField: "country",
    text: "country",
    sort: true,
  },
  {
    dataField: "action",
    text: "",
    formatter: () => {
      return <div></div>;
    },
  },
];
