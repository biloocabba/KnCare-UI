import { MouseEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Card, CardHeader, Container, Row, Spinner } from "reactstrap";

import { useAppDispatch, useAppSelector } from "redux/app";
import { deleteGroup, selectGroupState } from "redux/features";

import { BoxHeader } from "components/headers";
import { ReactTable } from "components/widgets";

import { Group } from "types";

import { GROUP_DETAILS } from "..";

import { groupsTableColumns } from ".";

export const SearchGroupsPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const groups = useAppSelector(selectGroupState);

  const [selectedGroups, setSelectedGroups] = useState<Group[]>([]);

  const goToGroupDetails = (e: MouseEvent<HTMLButtonElement>) => {
    const { id } = e.target as HTMLElement;
    navigate(`${GROUP_DETAILS}/${id}`);
  };

  const removeGroup = (e: MouseEvent<HTMLButtonElement>) => {
    const { id } = e.target as HTMLElement;
    dispatch(deleteGroup(parseInt(id)));
  };

  return (
    <>
      <BoxHeader />
      <Container className="mt--6" fluid>
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
