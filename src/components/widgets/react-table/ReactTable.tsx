import { MouseEvent, useState } from "react";

import { Button } from "reactstrap";

import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";

import { pagination, selectRow } from ".";

const { SearchBar } = Search;

interface Props {
  // @todo change data any type to generic type
  data: any[];
  // @todo change columns any type to generic type
  columns: any;
  keyField: string;
  onViewDetailsClick: (e: MouseEvent<HTMLButtonElement>) => void;
  onDeleteItemClick: (e: MouseEvent<HTMLButtonElement>) => void;
  // @todo change columns any type to generic type
  // this can be Employees or Groups, etc...
  selectedRows: any;
  setSelectedRows: any;
  // setSelectedRows: React.Dispatch<React.SetStateAction<any[]>>;
  searchBarPlaceholder?: string;
  selectButtonText?: string;
}

export const ReactTable = ({
  columns,
  keyField,
  data,
  onViewDetailsClick,
  onDeleteItemClick,
  selectedRows,
  setSelectedRows,
  searchBarPlaceholder,
  selectButtonText,
}: Props) => {
  // @todo change row type to generic type
  const formatActionButtonCell = (_: any, row: any) => {
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

  const [formatterFunction, setFormatterFunction] = useState(false);

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
            // deleteRow // does not exist
            selectRow={selectRow(setSelectedRows)}
          />
        </div>
      )}
    </ToolkitProvider>
  );
};

// ReactTable.propTypes = {
//   columns: PropTypes.array.isRequired,
//   keyField: PropTypes.string.isRequired,
//   data: PropTypes.array.isRequired,
//   selectedRows: PropTypes.array.isRequired,
//   setSelectedRows: PropTypes.func.isRequired,
//   searchBarPlaceholder: PropTypes.string,
//   selectButtonText: PropTypes.string,
// };
