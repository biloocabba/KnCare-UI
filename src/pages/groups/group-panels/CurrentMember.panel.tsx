import { useEffect, useState } from "react";

import { useHistory } from "react-router";

import { Collapse, Card, CardHeader, Spinner } from "reactstrap";

import { ReactTable } from "components/widgets";

import { CARE_MEMBER_EDIT, careMemberTableColumns } from "pages/users";
import { CareMember, Group } from "types";

import { careMemberService } from "redux/features";

interface Props {
  group: Group;
  currentMembersCollapse: boolean;
  currentGroupMembers: CareMember[];
  setCurrentGroupMembers: React.Dispatch<React.SetStateAction<CareMember[]>>;
}

export const CurrentMemberPanel = ({
  group,
  currentMembersCollapse,
  currentGroupMembers,
  setCurrentGroupMembers,
}: Props) => {
  const history = useHistory();

  const [selectedCareMembers, setSelectedCareMembers] = useState<CareMember[]>([]);

  useEffect(() => {
    const fetchGroupMembers = async (members: number[]) => {
      const groupMembers = await careMemberService.searchCareMembersByIds(members);
      setCurrentGroupMembers(groupMembers.data as CareMember[]);
    };

    if (group.members.length > 0) {
      fetchGroupMembers(group.members);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const memberDetails = (e: any) => {
    const { id } = e.target;
    //console.log(`${CARE_MEMBER_EDIT}/${id}`);
    history.push(`/admin${CARE_MEMBER_EDIT}/${id}`);
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
            columns={careMemberTableColumns}
            onViewDetailsClick={memberDetails}
            onDeleteItemClick={memberRemove}
            selectedRows={selectedCareMembers}
            setSelectedRows={setSelectedCareMembers}
          />
        )}
      </Card>
    </Collapse>
  );
};
