import { MouseEvent, useState } from "react";

import { Button } from "reactstrap";

import BootstrapTable, { ColumnDescription } from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";

import { pagination, selectRow } from ".";

const { SearchBar } = Search;

interface Props<T> {
  data: T[];
  columns: ColumnDescription<any, T>[];
  keyField: string;
  onViewDetailsClick: (e: MouseEvent<HTMLButtonElement>) => void;
  onDeleteItemClick: (e: MouseEvent<HTMLButtonElement>) => void;
  selectedRows: T[];
  setSelectedRows: React.Dispatch<React.SetStateAction<T[]>>;
  searchBarPlaceholder?: string;
  selectButtonText?: string;
}

export const ReactTable = <T extends { id: number }>({
  columns,
  keyField,
  data,
  onViewDetailsClick,
  onDeleteItemClick,
  selectedRows,
  setSelectedRows,
  searchBarPlaceholder,
  selectButtonText,
}: Props<T>) => {
  const [formatterFunction, setFormatterFunction] = useState(false);

  const formatActionButtonCell = (_: any, row: T) => {
    const rowId = row.id.toString();
    return (
      <>
        <Button
          id={rowId}
          className="btn-icon btn-2"
          type="button"
          color="info"
          onClick={onViewDetailsClick}
        >
          <span id={rowId} className="btn-inner--icon">
            <i id={rowId} className="ni ni-badge" />
          </span>
        </Button>
        <Button
          id={rowId}
          className="btn-icon btn-2"
          color="danger"
          type="button"
          onClick={onDeleteItemClick}
        >
          <span id={rowId} className="btn-inner--icon">
            <i id={rowId} className="ni ni-fat-remove" />
          </span>
        </Button>
      </>
    );
  };

  if (!formatterFunction) {
    columns[columns.length - 1].formatter = formatActionButtonCell; //we can/should force formatter always to be on last column
    setFormatterFunction(true);
  }

  return (
    <ToolkitProvider data={data} keyField={keyField} columns={columns} bootstrap4 search>
      {props => (
        <div className="py-4 table-responsive">
          <div
            id="datatable-basic_filter"
            className="dataTables_filter px-4 pb-1"
            style={{ display: "flex" }}
          >
            <label>
              {searchBarPlaceholder}
              <SearchBar className="form-control-sm mr-3" placeholder="" {...props.searchProps} />
            </label>

            {selectButtonText && (
              <>
                <Button
                  className="btn btn-success"
                  onClick={() => console.log("selectedRows", selectedRows)}
                >
                  {selectButtonText}
                </Button>
              </>
            )}
          </div>
          <BootstrapTable
            {...props.baseProps}
            bootstrap4
            pagination={pagination}
            bordered={false}
            selectRow={selectRow(setSelectedRows)}
          />
        </div>
      )}
    </ToolkitProvider>
  );
};
