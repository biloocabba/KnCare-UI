import { Button, FormGroup } from "reactstrap";

import { SearchCareMemberFilterPanel } from "pages/users";
import { CareMember, CareMemberQueryFilters, Group } from "types";

import { useAppSelector } from "redux/app";
import {
  careMemberService,
  selectAllBusinessUnitsDataAsSelectOptions,
  selectAllCountriesDataAsSelectOptions,
  selectAllGroupsDataAsSelectOptions,
  selectAllRoleDataAsSelectOptions,
} from "redux/features";

interface Props {
  group: Group;
  setGroup: (group: Group) => void;
  selectedRows: CareMember[];
  setSelectedRows: (selectedRows: CareMember[]) => void;
  tableRef: React.MutableRefObject<undefined>;
  setCareMemberResultSet: React.Dispatch<React.SetStateAction<CareMember[]>>;
  setCurrentGroupMembers: React.Dispatch<React.SetStateAction<CareMember[]>>;
}

export const AddMemberFilterPanel = ({
  group,
  setGroup,
  selectedRows,
  setSelectedRows,
  tableRef,
  setCareMemberResultSet,
  setCurrentGroupMembers,
}: Props) => {
  const countries = useAppSelector(selectAllCountriesDataAsSelectOptions);
  const businessUnits = useAppSelector(selectAllBusinessUnitsDataAsSelectOptions);
  const roles = useAppSelector(selectAllRoleDataAsSelectOptions);
  const groups = useAppSelector(selectAllGroupsDataAsSelectOptions);

  const onCareMemberAdd = (selectedCareMembers: CareMember[]) => {
    const careMemberIds = selectedCareMembers.map(careMember => careMember.id);
    setGroup({ ...group, members: [...group.members, ...careMemberIds] });
    setCurrentGroupMembers(previousCareMembers => [...previousCareMembers, ...selectedCareMembers]);
    setSelectedRows([]);
    // @ts-ignore
    tableRef.current.selectionContext.selected = [];
  };

  const onClickSearchCareMember = async (filters: CareMemberQueryFilters) => {
    console.log(JSON.stringify(filters));
    const queryParams = new URLSearchParams(JSON.stringify(filters));
    const { data } = await careMemberService.searchCareMembers(queryParams);
    setCareMemberResultSet(data);
  };

  return (
    <>
      <SearchCareMemberFilterPanel
        onSearchCareMembers={onClickSearchCareMember}
        roles={roles}
        groups={groups}
        countries={countries}
        businessUnits={businessUnits}
      />
      <FormGroup>
        <Button color="success" onClick={() => onCareMemberAdd(selectedRows)}>
          Add Member To Group
        </Button>
      </FormGroup>
    </>
  );
};
