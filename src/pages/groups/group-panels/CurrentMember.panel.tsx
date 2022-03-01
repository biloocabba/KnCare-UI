import { useEffect } from "react";
import { useHistory } from "react-router";

import { Collapse, Card, CardHeader, Spinner } from "reactstrap";

import { careMemberService } from "redux/features";

import { ReactTable } from "components/widgets";

import { CARE_MEMBER_EDIT, careMemberTableColumns } from "pages/users";

import { CareMember, Group } from "types";

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
            columns={careMemberTableColumns({
              onDetailsButtonClick: memberDetails,
              onRemoveButtonClick: memberRemove,
            })}
          />
        )}
      </Card>
    </Collapse>
  );
};
