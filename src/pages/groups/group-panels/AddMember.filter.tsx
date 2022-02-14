import { Button, FormGroup } from "reactstrap";

import { SearchEmployeesFilterPanel } from "pages/users";
import { Employee, EmployeeQueryFilters, Group, SelectOption } from "types";

import { useAppSelector } from "redux/app";
import {
  employeeService,
  selectAllBusinessUnitsDataAsSelectOptions,
  selectAllCountriesDataAsSelectOptions,
} from "redux/features";

interface Props {
  group: Group;
  setGroup: (group: Group) => void;
  selectedRows: Employee[];
  setSelectedRows: (selectedRows: Employee[]) => void;
  tableRef: React.MutableRefObject<undefined>;
  setEmployeeResultSet: React.Dispatch<React.SetStateAction<Employee[]>>;
  setCurrentGroupMembers: React.Dispatch<React.SetStateAction<Employee[]>>;
}

export const AddMemberFilterPanel = ({
  group,
  setGroup,
  selectedRows,
  setSelectedRows,
  tableRef,
  setEmployeeResultSet,
  setCurrentGroupMembers,
}: Props) => {
  const countries = useAppSelector(selectAllCountriesDataAsSelectOptions);
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
    setCurrentGroupMembers(oldEmployees => [...oldEmployees, ...selectedEmployees]);
    setSelectedRows([]);
    // @ts-ignore
    tableRef.current.selectionContext.selected = [];
  };

  const onClickSearchEmployees = async (filters: EmployeeQueryFilters) => {
    // @todo find correct type for filters
    const queryParams = new URLSearchParams(filters as any);
    const { data } = await employeeService.searchEmployees(queryParams);

    setEmployeeResultSet(data);
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
