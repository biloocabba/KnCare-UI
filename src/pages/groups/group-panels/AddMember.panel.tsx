import { useRef, useState } from "react";

import { Collapse, Spinner } from "reactstrap";

import { ReactTable } from "components/widgets";

import { Employee, Group } from "types";

import { employeesTableColumns } from "../../users";

import { AddMemberFilterPanel } from ".";

interface Props {
  group: Group;
  setGroup: (group: Group) => void;
  addMemberCollapse: boolean;
  setCurrentGroupMembers: React.Dispatch<React.SetStateAction<Employee[]>>;
}

export const AddMemberPanel = ({
  group,
  setGroup,
  addMemberCollapse,
  setCurrentGroupMembers,
}: Props) => {
  const tableRef = useRef();

  const [selectedEmployees, setSelectedEmployees] = useState<Employee[]>([]);
  const [employeeResultSet, setEmployeeResultSet] = useState<Employee[]>([]);

  return (
    <Collapse isOpen={addMemberCollapse}>
      <AddMemberFilterPanel
        group={group}
        setGroup={setGroup}
        selectedRows={selectedEmployees}
        setSelectedRows={setSelectedEmployees}
        tableRef={tableRef}
        setEmployeeResultSet={setEmployeeResultSet}
        setCurrentGroupMembers={setCurrentGroupMembers}
      />
      {/* @todo add loading here */}
      {!employeeResultSet ? (
        <div className="text-center">
          <Spinner />
        </div>
      ) : (
        <ReactTable
          data={employeeResultSet}
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
