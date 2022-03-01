import { Column } from "react-table";

import { TwoMouseEventActionButtons, IDefaultActionButtons } from "components/widgets";

export const groupsTableColumns = ({
  onDetailsButtonClick,
  onRemoveButtonClick,
}: IDefaultActionButtons) => {
  return [
    {
      accessor: "id",
      Header: "id",
    },
    {
      accessor: "name",
      Header: "Name",
    },
    {
      accessor: "description",
      Header: "description",
    },
    {
      accessor: "active",
      Header: "active",
    },
    TwoMouseEventActionButtons({ onDetailsButtonClick, onRemoveButtonClick }),
  ] as Array<Column>;
};
