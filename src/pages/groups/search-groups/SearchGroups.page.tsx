
import { ReactTable } from "components/widgets/react-table";
import {  useState } from "react";

import { useHistory } from "react-router";
import { Card, CardBody, CardHeader, Col, Container, FormGroup, Row} from "reactstrap";
import { groupsTableColumns } from ".";
import { useAppDispatch,useAppSelector } from "redux/app";
import { deleteGroup, searchGroups, selectGroups } from "redux/features";
import { BoxHeader } from "../../../components/headers";

export const SearchGroupsPage = () => {
  const history = useHistory();
  const dispatch = useAppDispatch()
  const groups = useAppSelector(selectGroups)

  const [selectedGroups, setSelectedGroups] = useState([]);



  const goToGroupDetails = (e:any) => {
    const { id } = e.target;
    history.push(`/admin/groups/group-details/${id}`);
  };

  const removeGroup = (e:any) => {
    const { id } = e.target;
    dispatch(deleteGroup(id));
  };

  const findByAllParameters = () => {
    dispatch(searchGroups());
  };

  return (
    <>
      <BoxHeader />
      <Container className="mt--6" fluid>
        <Row>
          <div className="col">
            <Card>
              <CardHeader>
                <h3 className="mb-0">Search Groups</h3>
                <p className="text-sm mb-0">Search</p>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col md="2">
                    <FormGroup>
                      <button
                        style={{
                          marginTop: "32px",
                          marginLeft: "32px",
                          height: "40px",
                        }}
                        className="btn btn-info"
                        type="button"
                        onClick={findByAllParameters}
                      >
                        Search
                      </button>
                    </FormGroup>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </div>
        </Row>

        <Row>
          <div className="col">
            <Card>
              <CardHeader>
                <h3 className="mb-0">Groups</h3>
                <p className="text-sm mb-0">Groups</p>
              </CardHeader>
              {/* {groups.isLoading ? (
                <div
                  style={{
                    textAlign: "center",
                  }}
                >
                  <Spinner />
                </div>
              ) : ( */}
                <ReactTable
                  data={groups}
                  keyField="id"
                  columns={groupsTableColumns}
                  onViewDetailsClick={goToGroupDetails}
                  onDeleteItemClick={removeGroup}
                  selectedRows={selectedGroups}
                  setSelectedRows={setSelectedGroups}
                />
              {/* )} */}
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};
