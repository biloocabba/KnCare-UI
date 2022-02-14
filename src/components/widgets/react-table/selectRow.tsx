import { SelectRowProps } from "react-bootstrap-table-next";

export const selectRow = <T extends { id: number }>(
  setSelectedRows: React.Dispatch<React.SetStateAction<T[]>>
) => {
  return {
    mode: "checkbox",
    onSelect: (row, isSelect) => {
      // if select is true
      if (isSelect) {
        // adds this selected row to the selectedRows array
        setSelectedRows(oldRows => [...oldRows, row]);
        // select
        return true;
        // if user unseleceted a row
      } else {
        // removes this selected row from the selectedRows array
        setSelectedRows(oldRows => oldRows.filter(oldRow => oldRow.id !== row.id));
        // unselect
        return true;
      }
    },

    onSelectAll: (isSelect, rows) => {
      // if select is true
      if (isSelect) {
        // adds this selected row to the selectedRows array
        setSelectedRows(oldRows => [...oldRows, ...rows]);
        // select
        return;
      } else {
        // removes this selected row from the selectedRows array
        setSelectedRows(oldRows =>
          // if rows array includes oldRow remove it from state
          oldRows.filter(oldRow => !rows.includes(oldRow))
        );
        // unselect
        return;
      }
    },
    // @todo change this type to generic type
  } as SelectRowProps<any>;
};
