import { Button, FormGroup } from "reactstrap";

import { useSelectCountries } from "hooks";
import { Employee, EmployeeQueryFilters, Group, SelectOption } from "types";

import { useAppDispatch, useAppSelector } from "redux/app";
import { searchEmployees, selectAllBusinessUnitsDataAsSelectOptions } from "redux/features";

import { SearchEmployeesFilterPanel } from "../../users";

interface Props {
  group: Group;
  setGroup: (group: Group) => void;
  selectedRows: Employee[];
  setSelectedRows: (selectedRows: Employee[]) => void;
  tableRef: React.MutableRefObject<undefined>;
}

export const AddMemberPanel = ({
  group,
  setGroup,
  selectedRows,
  setSelectedRows,
  tableRef,
}: Props) => {
  const dispatch = useAppDispatch();

  // const countries = useAppSelector(selectAllCountryDataAsSelectOptions);
  const { countries } = useSelectCountries();
  const businessUnits = useAppSelector(selectAllBusinessUnitsDataAsSelectOptions);

  const jobTitles: SelectOption[] = [
    { value: "1", label: "product manager" },
    { value: "2", label: "qa engineer" },
    { value: "3", label: "hr consultant" },
    { value: "4", label: "office manager" },
    { value: "5", label: "sales representative" },
    { value: "6", label: "logistics consultant" },
  ];

  const onEmployeeAdd = (selectedEmployees: Employee[]) => {
    const employeeIds = selectedEmployees.map(employee => employee.id);
    setGroup({ ...group, members: [...group.members, ...employeeIds] });
    setSelectedRows([]);
    // @ts-ignore
    tableRef.current.selectionContext.selected = [];
  };

  const onClickSearchEmployees = (filters: EmployeeQueryFilters): void => {
    dispatch(searchEmployees(filters));
  };

  return (
    <>
      <SearchEmployeesFilterPanel
        onSearchEmployees={onClickSearchEmployees}
        jobTitle={jobTitles}
        countries={countries}
        businessUnits={businessUnits}
      />
      <FormGroup>
        <Button color="success" onClick={() => onEmployeeAdd(selectedRows)}>
          Add Member To Group
        </Button>
      </FormGroup>
    </>
  );
};
