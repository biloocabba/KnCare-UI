import { Column } from "react-table";

import { TwoMouseEventActionButtons, IDefaultActionButtons } from "components/widgets";

export const careMemberTableColumns = ({
  onDetailsButtonClick,
  onRemoveButtonClick,
}: IDefaultActionButtons) => {
  const tableArray = [
    {
      accessor: "id",
      Header: "id",
    },
    {
      accessor: "firstName",
      Header: "First Name",
    },
    {
      accessor: "lastName",
      Header: "lastName",
    },
    {
      accessor: "internationalName",
      Header: "int Name",
    },
    {
      accessor: "title",
      Header: "title",
    },
    {
      accessor: "businessUnit",
      Header: "bUnit",
    },
    {
      accessor: "managementGroup",
      Header: "Man Group",
    },
    {
      accessor: "companyCode",
      Header: "companyCode",
    },
    {
      accessor: "costCenter",
      Header: "costCenter",
    },
    {
      accessor: "office.country",
      Header: "country",
    },
  ] as Array<Column>;

  if (onDetailsButtonClick && onRemoveButtonClick) {
    tableArray.push(TwoMouseEventActionButtons({ onDetailsButtonClick, onRemoveButtonClick }));
  }

  return tableArray;
};
