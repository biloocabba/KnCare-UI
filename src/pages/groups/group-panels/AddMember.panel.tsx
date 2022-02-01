import { Button, FormGroup } from "reactstrap";

import { Employee, EmployeeQueryFilters, Group, SelectOption } from "types";

import { useAppDispatch, useAppSelector } from "redux/app";
import {
  searchEmployees,
  selectAllBusinessUnitsDataAsSelectOptions,
  selectAllCountryDataAsSelectOptions,
  selectEmployeesState,
} from "redux/features";

import { SearchEmployeesFilterPanel } from "../../users";

interface Props {
  group: Group;
  setGroup: (group: Group) => void;
}

export const AddMemberPanel = ({ group, setGroup }: Props) => {
  const dispatch = useAppDispatch();

  const countries = useAppSelector(selectAllCountryDataAsSelectOptions);
  const businessUnits = useAppSelector(selectAllBusinessUnitsDataAsSelectOptions);

  const employees = useAppSelector(selectEmployeesState);

  const jobTitles: SelectOption[] = [
    { value: "1", label: "product manager" },
    { value: "2", label: "qa engineer" },
    { value: "3", label: "hr consultant" },
    { value: "4", label: "office manager" },
    { value: "5", label: "sales representative" },
    { value: "6", label: "logistics consultant" },
  ];

  const onEmployeeAdd = (employee: Employee) => {
    setGroup({ ...group, members: [...group.members, employee.id] });
  };

  const onClickSearchEmployees = (filters: EmployeeQueryFilters): void => {
    dispatch(searchEmployees(filters));
  };
  // @todo make this find employees by filters
  return (
    <>
      <SearchEmployeesFilterPanel
        onSearchEmployees={onClickSearchEmployees}
        jobTitle={jobTitles}
        countries={countries}
        businessUnits={businessUnits}
      />
      <FormGroup>
        <Button
          style={{
            marginTop: "32px",
            marginLeft: "32px",
            height: "40px",
          }}
          color="success"
          onClick={() => onEmployeeAdd(employees.entities[0])}
        >
          Add
        </Button>
      </FormGroup>
    </>
  );
};
