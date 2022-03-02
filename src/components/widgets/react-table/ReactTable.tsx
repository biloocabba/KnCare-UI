import { MouseEvent } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, {
  Search,
  // @ts-ignore
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";

import { Button } from "reactstrap";

import { useFeatureDisabledWarning } from "hooks";

import { pagination, selectRow } from ".";

const { SearchBar } = Search;

interface Props<T> {
  data: T[];
  columns: any; //@todo find a better type for columns
  keyField: string;
  onViewDetailsClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  onDeleteItemClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  selectedRows: T[];
  setSelectedRows: React.Dispatch<React.SetStateAction<T[]>>;
  searchBarPlaceholder?: string;
  selectButtonText?: string;
  tableRef?: React.MutableRefObject<any>;
  formatterFn?: (_: any, row: T) => React.ReactNode;
}

export const ReactTable = <T extends { id: number }>({
  columns,
  keyField,
  data,
  onViewDetailsClick,
  selectedRows,
  setSelectedRows,
  searchBarPlaceholder,
  selectButtonText,
  tableRef,
  formatterFn,
}: Props<T>) => {
  const { alert, fireAlert } = useFeatureDisabledWarning();

  const formatActionButtonCell = (_: any, row: T): React.ReactNode => {
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
          onClick={() => fireAlert()}
        >
          <span id={rowId} className="btn-inner--icon">
            <i id={rowId} className="ni ni-fat-remove" />
          </span>
        </Button>
      </>
    );
  };

  // const [formatterFunction, setFormatterFunction] = useState(formatterFnc);

  // if (!formatterFunction) {
  columns[columns.length - 1].formatter = formatterFn ? formatterFn : formatActionButtonCell; //we can/should force formatter always to be on last column
  //   setFormatterFunction(true);
  // }

  return (
    <>
      {alert}
      <ToolkitProvider data={data} keyField={keyField} columns={columns} bootstrap4 search>
        {(props: any) => (
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
              ref={tableRef}
              bootstrap4
              pagination={pagination}
              bordered={false}
              selectRow={selectRow(setSelectedRows)}
            />
          </div>
        )}
      </ToolkitProvider>
    </>
  );
};

export const emptyFormatter = (): React.ReactNode => {
  return <></>;
};
