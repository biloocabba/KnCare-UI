import { useEffect, useState } from "react";

import { Card, Collapse, Spinner } from "reactstrap";

import { useAppSelector } from "redux/app";
import { selectCareMembersByFilters, selectLoggedUserDefaultCountry } from "redux/features";

import { AddNewGroupMemberButton } from "components/buttons";
import { ReactTable } from "components/widgets";

import { careMemberTableColumns, SearchCareMemberFilterPanel } from "pages/users";

import { useLocalStateAlerts } from "hooks";
import { CareMember, CareMemberQueryFilters, Group } from "types";

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
  const { alert, setSaveSent, setSuccessMessage, setIsSuccess } =
    useLocalStateAlerts(currentGroupMembers);

  const userCountry = useAppSelector(selectLoggedUserDefaultCountry);

  const [filters, setFilters] = useState<CareMemberQueryFilters>({
    countryIso3: userCountry,
    members: group.members || [],
  });
  const careMemberResultSet: CareMember[] = useAppSelector(selectCareMembersByFilters(filters));

  useEffect(() => {
    setFilters(prevState => ({
      ...prevState,
      members: currentGroupMembers.map(careMember => careMember.id),
    }));
  }, [currentGroupMembers]);

  return (
    <>
      {alert}
      <Collapse isOpen={addMemberCollapse}>
        <Card>
          <SearchCareMemberFilterPanel filters={filters} setFilters={setFilters} />
          {/* @todo add loading here */}
          {!careMemberResultSet ? (
            <div className="text-center">
              <Spinner />
            </div>
          ) : (
            <ReactTable
              data={careMemberResultSet}
              selectElement={
                <AddNewGroupMemberButton
                  setGroup={setGroup}
                  setCurrentGroupMembers={setCurrentGroupMembers}
                  setSaveSent={setSaveSent}
                  setSuccessMessage={setSuccessMessage}
                  setIsSuccess={setIsSuccess}
                  group={group}
                />
              }
              columns={careMemberTableColumns({})}
            />
          )}
        </Card>
      </Collapse>
    </>
  );
};
