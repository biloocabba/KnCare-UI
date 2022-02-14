import { useState } from "react";

import { useHistory } from "react-router";

import { Collapse, Card, CardHeader, Spinner } from "reactstrap";

import { ReactTable } from "components/widgets";

import { Employee, Group } from "types";

import { useAppSelector } from "redux/app";
import { selectEmployeesByIds, StateType } from "redux/features";

import { employeesTableColumns } from "../../users";

interface Props {
  group: Group;
  currentMembersCollapse: boolean;
  employeesState: StateType<Employee>;
}

export const CurrentMemberPanel = ({ group, employeesState, currentMembersCollapse }: Props) => {
  const history = useHistory();

  const [selectedEmployees, setSelectedEmployees] = useState<Employee[]>([]);
  const groupMembers = useAppSelector(selectEmployeesByIds(group.members)) as unknown as Employee[];

  const memberDetails = (e: any) => {
    const { id } = e.target;
    history.push(`/admin/users/employee-details/${id}`);
  };

  const memberRemove = () => {};

  return (
    <Collapse isOpen={currentMembersCollapse}>
      <Card>
        <CardHeader>
          <h3 className="mb-0">Group members</h3>
          <p className="text-sm mb-0">Care Members</p>
        </CardHeader>

        {employeesState.isLoading && !groupMembers ? (
          <div
            style={{
              textAlign: "center",
            }}
          >
            <Spinner />
          </div>
        ) : (
          <ReactTable
            data={groupMembers}
            keyField="id"
            columns={employeesTableColumns}
            onViewDetailsClick={memberDetails}
            onDeleteItemClick={memberRemove}
            selectedRows={selectedEmployees}
            setSelectedRows={setSelectedEmployees}
          />
        )}
      </Card>
    </Collapse>
  );
};
