import { MouseEvent } from "react";
import { Column } from "react-table";

import { Button } from "reactstrap";

export interface IDefaultActionButtons {
  onDetailsButtonClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  onRemoveButtonClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const TwoMouseEventActionButtons = <T extends { id: string }>({
  onDetailsButtonClick,
  onRemoveButtonClick,
}: IDefaultActionButtons) => {
  return {
    accessor: "action",
    Header: "",
    Cell: ({ row }) => {
      const careMember = row.original as T;
      const id = careMember.id.toString();
      return (
        <>
          <Button
            id={id}
            className="btn-icon btn-2 m-0"
            type="button"
            color="info"
            onClick={onDetailsButtonClick}
          >
            <span id={id} className="btn-inner--icon">
              <i id={id} className="ni ni-badge" />
            </span>
          </Button>

          <Button
            id={id}
            className="btn-icon btn-2"
            color="danger"
            type="button"
            onClick={onRemoveButtonClick}
          >
            <span id={id} className="btn-inner--icon">
              <i id={id} className="ni ni-fat-remove" />
            </span>
          </Button>
        </>
      );
    },
  } as Column;
};
