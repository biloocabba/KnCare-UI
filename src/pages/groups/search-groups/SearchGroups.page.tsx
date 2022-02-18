import { MouseEvent, useState } from "react";

import { useHistory } from "react-router";

import { Card, CardHeader, Container, Row, Spinner } from "reactstrap";

import { BoxHeader } from "components/headers";
import { ReactTable } from "components/widgets";

import { Group, GroupQueryFilters } from "types";

import { useAppDispatch, useAppSelector } from "redux/app";
import { deleteGroup, searchEmployees, searchGroups, selectGroupState } from "redux/features";

import { groupsTableColumns, SearchGroupsFilter } from ".";

export const SearchGroupsPage = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const groups = useAppSelector(selectGroupState);

  const [selectedGroups, setSelectedGroups] = useState<Group[]>([]);

  const goToGroupDetails = (e: MouseEvent<HTMLButtonElement>) => {
    const { id } = e.target as HTMLElement;
    history.push(`/admin/groups/group-details/${id}`);
  };

  const removeGroup = (e: MouseEvent<HTMLButtonElement>) => {
    const { id } = e.target as HTMLElement;
    dispatch(deleteGroup(parseInt(id)));
  };

  const findByAllParameters = (filters: GroupQueryFilters): void => {
    dispatch(searchGroups(filters));
    // @todo find a fix to get rid of this
    // this gets all the employees so group members would'nt be empty
    dispatch(searchEmployees({}));
  };

  return (
    <>
      <BoxHeader />
      <Container className="mt--6" fluid>
        <Row>
          <div className="col">
            <SearchGroupsFilter onSearch={findByAllParameters} />
          </div>
        </Row>

        <Row>
          <div className="col">
            <Card>
              <CardHeader>
                <h3 className="mb-0">Groups</h3>
                <p className="text-sm mb-0">Groups</p>
              </CardHeader>
              {groups.isLoading ? (
                <div
                  style={{
                    textAlign: "center",
                  }}
                >
                  <Spinner />
                </div>
              ) : (
                <ReactTable
                  data={groups.entities}
                  keyField="id"
                  columns={groupsTableColumns}
                  onViewDetailsClick={goToGroupDetails}
                  onDeleteItemClick={removeGroup}
                  selectedRows={selectedGroups}
                  setSelectedRows={setSelectedGroups}
                />
              )}
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};
