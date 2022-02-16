import { useRef, useState } from "react";

import { Collapse, Spinner } from "reactstrap";

import { ReactTable } from "components/widgets";

import { CareMember, Group } from "types";

import { careMemberTableColumns } from "../../users";

import { AddMemberFilterPanel } from ".";

interface Props {
  group: Group;
  setGroup: (group: Group) => void;
  addMemberCollapse: boolean;
  setCurrentGroupMembers: React.Dispatch<React.SetStateAction<CareMember[]>>;
}

export const AddMemberPanel = ({
  group,
  setGroup,
  addMemberCollapse,
  setCurrentGroupMembers,
}: Props) => {
  const tableRef = useRef();

  const [selectedCareMembers, setSelectedCareMembers] = useState<CareMember[]>([]);
  const [careMemberResultSet, setCareMemberResultSet] = useState<CareMember[]>([]);

  return (
    <Collapse isOpen={addMemberCollapse}>
      <AddMemberFilterPanel
        group={group}
        setGroup={setGroup}
        selectedRows={selectedCareMembers}
        setSelectedRows={setSelectedCareMembers}
        tableRef={tableRef}
        setCareMemberResultSet={setCareMemberResultSet}
        setCurrentGroupMembers={setCurrentGroupMembers}
      />
      {/* @todo add loading here */}
      {!careMemberResultSet ? (
        <div className="text-center">
          <Spinner />
        </div>
      ) : (
        <ReactTable
          data={careMemberResultSet}
          keyField="id"
          columns={careMemberTableColumns}
          selectedRows={selectedCareMembers}
          setSelectedRows={setSelectedCareMembers}
          tableRef={tableRef}
        />
      )}
    </Collapse>
  );
};
