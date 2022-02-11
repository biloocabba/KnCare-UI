import { MouseEvent, useState } from "react";

import { Button } from "reactstrap";

import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";

import { pagination, selectRow } from ".";
import { careMemberTableColumns, employeesTableColumns } from "../../../pages/users";
import { groupsTableColumns } from "../../../pages/groups";

const { SearchBar } = Search;

interface Props<T> {
  data: T[];
  columns: typeof employeesTableColumns | typeof groupsTableColumns | typeof careMemberTableColumns;
  keyField: string;
  onViewDetailsClick: (e: MouseEvent<HTMLButtonElement>) => void;
  onDeleteItemClick: (e: MouseEvent<HTMLButtonElement>) => void;
  // @todo change columns any type to generic type
  // this can be Employees or Groups, etc...
  selectedRows: T[];
  setSelectedRows: React.Dispatch<React.SetStateAction<T[]>>;
  searchBarPlaceholder?: string;
  selectButtonText?: string;
}

export const ReactTable = <T,>({
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

  // @todo change row type to generic type
  const formatActionButtonCell = (_: any, row: T) => {
    return (
      <>
        <Button
          id={row.id}
          className="btn-icon btn-2"
          type="button"
          color="info"
          onClick={onViewDetailsClick}
        >
          <span id={row.id} className="btn-inner--icon">
            <i id={row.id} className="ni ni-badge" />
          </span>
        </Button>
        <Button
          id={row.id}
          className="btn-icon btn-2"
          color="danger"
          type="button"
          onClick={onDeleteItemClick}
        >
          <span id={row.id} className="btn-inner--icon">
            <i id={row.id} className="ni ni-fat-remove" />
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
