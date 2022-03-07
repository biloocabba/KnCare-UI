import { Column } from "react-table";

import { TwoMouseEventActionButtons, IDefaultActionButtons } from "components/widgets";

export const emailsTableColumns = ({
  onDetailsButtonClick,
  onRemoveButtonClick,
}: IDefaultActionButtons) => {
  return [
    {
      accessor: "id",
      Header: "id",
    },
    {
      accessor: "subject",
      Header: "subject",
    },
    TwoMouseEventActionButtons({ onDetailsButtonClick, onRemoveButtonClick }),
  ] as Array<Column>;
};
