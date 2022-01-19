import React, { useState } from "react";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  FormGroup,
  Input,
  Row,
} from "reactstrap";

import { BoxHeader } from "components/headers";

export const BestPracticePage = () => {
  const [disableEdit, setDisableEdit] = useState(true);
  const [title] = useState("");
  const [description] = useState("");

  /*
    const getBestPractice = id => {
        BestPracticeService.get(id)
            .then(response => {
                setCurrentBestPractice(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const handleInputChange = event => {
        const { name, value } = event.target;
        setCurrentBestPractice({ ...currentBestPractice, [name]: value });
    };

    const updateContent = () => {
        dispatch(updateBestPractice(currentBestPractice.id, currentBestPractice))
            .then(response => {
                console.log(response);
            })
            .catch(e => {
                console.log(e);
            });
        setDisableEdit(!disableEdit);
    };

    const removeBestPractice = () => {
        confirmAlert({
            title: "Confirmation",
            message: "Are you sure you want to remove this best practice?",
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        dispatch(deleteBestPractice(currentBestPractice.id))
                            .then(() => {
                                props.history.push("/admin/search-best-practices");
                            })
                            .catch(e => {
                                console.log(e);
                            });
                    }
                },
                {
                    label: 'No',
                    onClick: () => { }
                }
            ]
        });
    };

    useEffect(() => {
        getBestPractice(props.match.params.id);
    }, [props.match.params.id]);
*/

  return (
    <>
      <BoxHeader />
      <Container className="mt-6 ml-6 container-sm" fluid>
        <Row>
          <div className="col">
            <Card>
              <CardHeader>
                <h3 className="mb-0">Search Employees</h3>
                <p className="text-sm mb-0">Filters</p>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col md="12">
                    <FormGroup>
                      <label htmlFor="title" className="form-control-label">
                        Title
                      </label>
                      <Input id="title" name="title" value={title} />
                    </FormGroup>
                  </Col>
                  <Col md="12">
                    <FormGroup>
                      <label htmlFor="description" className="form-control-label">
                        Description
                      </label>
                      <Input id="description" name="description" value={description} />
                    </FormGroup>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </div>
        </Row>

        {/*
                <Row>
                    <Col className="order-xl-1">
                        <FormGroup>
                            <label className="form-control-label">Title</label>
                            <Input name="title" value={currentBestPractice.title || ""} disabled={disableEdit} onChange={handleInputChange} />
                        </FormGroup>
                    </Col>
                </Row><Row>
                    <Col className="order-xl-1">
                        <FormGroup>
                            <label className="form-control-label">Description</label>
                            <Input name="description" value={currentBestPractice.description || ""} disabled={disableEdit} onChange={handleInputChange} />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col className="order-xl-1" xl="12">
                        <FormGroup>
                            <label className="form-control-label">Attachment</label>
                            <p>coming soon ...</p>
                        </FormGroup>
                    </Col>
                </Row>
*/}
        <Button
          id="edit"
          className="btn btn-info"
          type="button"
          onClick={() => setDisableEdit(!disableEdit)}
        >
          <span className="btn-inner--icon">Edit</span>
        </Button>
        <Button
          id="remove"
          className="btn-icon btn-2"
          color="danger"
          type="button"
          onClick={e => console.log(e)}
        >
          <span className="btn-inner--icon">
            <i className="ni ni-fat-remove" />
          </span>
        </Button>
        <Button
          id="update"
          className="btn btn-success float-right"
          type="button"
          hidden={disableEdit}
          onClick={e => console.log(e)}
        >
          Save
        </Button>
      </Container>
    </>
  );
};
