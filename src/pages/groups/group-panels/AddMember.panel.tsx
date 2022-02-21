import { useRef, useState } from "react";

import { Button, Collapse, FormGroup, Spinner } from "reactstrap";

import { emptyFormatter, ReactTable } from "components/widgets";

import { careMemberTableColumns, SearchCareMemberFilterPanel } from "pages/users";
import { CareMember, CareMemberQueryFilters, Group } from "types";

import { useAppSelector } from "redux/app";
import { selectCareMembersByFilters, selectLoggedUserDefaultCountry } from "redux/features";

// import { AddMemberFilterPanel } from ".";

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

  const userCountry = useAppSelector(selectLoggedUserDefaultCountry);
  const [filters, setFilters] = useState<CareMemberQueryFilters>({
    countryIso3: userCountry,
  });

  const careMemberResultSet: CareMember[] = useAppSelector(selectCareMembersByFilters(filters));
  const [selectedCareMembers, setSelectedCareMembers] = useState<CareMember[]>([]);

  const onCareMemberAdd = () => {
    const careMemberIds = selectedCareMembers.map(careMember => careMember.id);
    setGroup({ ...group, members: [...group.members, ...careMemberIds] });
    setCurrentGroupMembers(previousCareMembers => [...previousCareMembers, ...selectedCareMembers]);
    setSelectedCareMembers([]);
    // @ts-ignore
    tableRef.current.selectionContext.selected = [];
  };

  return (
    <Collapse isOpen={addMemberCollapse}>
      <SearchCareMemberFilterPanel filters={filters} setFilters={setFilters} />
      <FormGroup>
        <Button color="success" onClick={onCareMemberAdd}>
          Add Member To Group
        </Button>
      </FormGroup>
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
          formatterFn={emptyFormatter}
        />
      )}
    </Collapse>
  );
};
