import { useEffect, useState } from "react";

import { useHistory } from "react-router";

import { Collapse, Card, CardHeader, Spinner } from "reactstrap";

import { ReactTable } from "components/widgets";

import { CareMember, Employee, Group } from "types";

import { careMemberService } from "redux/features";

import { employeesTableColumns } from "../../users";

interface Props {
  group: Group;
  currentMembersCollapse: boolean;
  currentGroupMembers: Employee[];
  setCurrentGroupMembers: React.Dispatch<React.SetStateAction<CareMember[]>>;
}

export const CurrentMemberPanel = ({
  group,
  currentMembersCollapse,
  currentGroupMembers,
  setCurrentGroupMembers,
}: Props) => {
  const history = useHistory();

  const [selectedEmployees, setSelectedEmployees] = useState<CareMember[]>([]);

  useEffect(() => {
    const fetchGroupMembers = async (members: number[]) => {
      if (members.length > 0) {
        const groupMembers = await careMemberService.searchCareMembersByIds(members);
        setCurrentGroupMembers(groupMembers.data as CareMember[]);
      }
    };

    fetchGroupMembers(group.members);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        {/* @todo add loading here */}
        {!currentGroupMembers ? (
          <div
            style={{
              textAlign: "center",
            }}
          >
            <Spinner />
          </div>
        ) : (
          <ReactTable
            data={currentGroupMembers}
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
