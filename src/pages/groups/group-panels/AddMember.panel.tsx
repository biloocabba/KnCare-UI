import { useRef, useState } from "react";

import { Collapse, Spinner } from "reactstrap";

import { ReactTable } from "components/widgets";

import { Employee, Group } from "types";

import { StateType } from "redux/features";

import { employeesTableColumns } from "../../users";

import { AddMemberFilterPanel } from ".";

interface Props {
  group: Group;
  setGroup: (group: Group) => void;
  addMemberCollapse: boolean;
  employeesState: StateType<Employee>;
}

export const AddMemberPanel = ({ group, setGroup, addMemberCollapse, employeesState }: Props) => {
  const [selectedEmployees, setSelectedEmployees] = useState<Employee[]>([]);
  const tableRef = useRef();
  return (
    <Collapse isOpen={addMemberCollapse}>
      <AddMemberFilterPanel
        group={group}
        setGroup={setGroup}
        selectedRows={selectedEmployees}
        setSelectedRows={setSelectedEmployees}
        tableRef={tableRef}
      />
      {employeesState.isLoading ? (
        <div className="text-center">
          <Spinner />
        </div>
      ) : (
        <ReactTable
          data={employeesState.entities}
          keyField="id"
          columns={employeesTableColumns}
          selectedRows={selectedEmployees}
          setSelectedRows={setSelectedEmployees}
          tableRef={tableRef}
        />
      )}
    </Collapse>
  );
};
