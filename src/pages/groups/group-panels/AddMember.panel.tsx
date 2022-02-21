import { useRef, useState } from "react";

import { Button, Collapse, FormGroup, Spinner } from "reactstrap";

import { emptyFormatter, ReactTable } from "components/widgets";

import { useLocalStateAlerts } from "hooks";
import { careMemberTableColumns, SearchCareMemberFilterPanel } from "pages/users";
import { CareMember, CareMemberQueryFilters, Group } from "types";

import { useAppSelector } from "redux/app";
import { selectCareMembersByFilters, selectLoggedUserDefaultCountry } from "redux/features";

interface Props {
  group: Group;
  setGroup: (group: Group) => void;
  addMemberCollapse: boolean;
  currentGroupMembers: CareMember[];
  setCurrentGroupMembers: React.Dispatch<React.SetStateAction<CareMember[]>>;
}

export const AddMemberPanel = ({
  group,
  setGroup,
  addMemberCollapse,
  currentGroupMembers,
  setCurrentGroupMembers,
}: Props) => {
  const tableRef = useRef();
  const { alert, setSaveSent, setSuccessMessage, setIsSuccess } =
    useLocalStateAlerts(currentGroupMembers);

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

    setSuccessMessage("Member(s) added successfully");
    setIsSuccess(true);
    setSaveSent(true);

    setSelectedCareMembers([]);

    // @ts-ignore
    tableRef.current.selectionContext.selected = [];
  };

  return (
    <>
      {alert}
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
    </>
  );
};
