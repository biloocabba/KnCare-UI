import { MouseEvent } from "react";
import { Column } from "react-table";

import { Button, Row } from "reactstrap";

export interface IDefaultActionButtons {
  onDetailsButtonClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  onRemoveButtonClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const TwoMouseEventActionButtons = <T extends { id: string }>({
  onDetailsButtonClick,
  onRemoveButtonClick,
}: IDefaultActionButtons) => {
  if (onDetailsButtonClick && onRemoveButtonClick) {
    return {
      accessor: "action",
      Header: "",
      Cell: ({ row }) => {
        const item = row.original as T;
        const id = item.id.toString();
        return (
          <Row>
            <Button
              id={id}
              className="btn-icon mr-1"
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
              className="btn-icon m-0"
              color="danger"
              type="button"
              onClick={onRemoveButtonClick}
            >
              <span id={id} className="btn-inner--icon">
                <i id={id} className="ni ni-fat-remove" />
              </span>
            </Button>
          </Row>
        );
      },
    } as Column;
  } else {
    return <></>;
  }
};
