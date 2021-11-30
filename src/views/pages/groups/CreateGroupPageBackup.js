/*!

=========================================================
* Argon Dashboard PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import { createGroup } from "actions/groups";
import GradientEmptyHeader from "components/Headers/GradientEmptyHeader";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Select from "react-select";
// reactstrap components
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Row,
} from "reactstrap";

function CreateGroupPage() {
  const dispatch = useDispatch();
  const initialGroupState = {
    id: null,
    name: "",
    description: "",
    members: [],
  };

  const [group, setGroup] = useState(initialGroupState);
  const [submitted, setSubmitted] = useState(false);

  const optionsRegion = [
    { value: "EE", label: "Estonia" },
    { value: "FI", label: "Finland" },
  ];
  const [region, setRegion] = useState(optionsRegion[0]);
  const [currentCountry, setCurrentCountry] = useState(null);
  const onchangeSelect = item => {
    setCurrentCountry(null);
    setRegion(item);
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setGroup({ ...group, [name]: value });
  };

  const saveGroup = e => {
    e.preventDefault();
    const { name, description } = group;
    dispatch(createGroup(name, description))
      .then(data => {
        setGroup({
          id: Math.floor(Math.random() * 10000),
          name: data.name,
          description: data.description,
        });
        setSubmitted(true);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newGroup = () => {
    setSubmitted(false);
  };

  let options = [];

  const [members, setMembers] = useState([]);

  const handleChangeMembers = e => {
    setMembers(Array.isArray(e) ? e.map(x => x.value) : []);
  };

  const getMembers = () => {
    //  user_initialState.map(user => options.push( {value: user.id, label: `${user.firstName} ${user.lastName}`}))
  };

  const filterMembers = inputValMembers => {
    return options.filter(i =>
      i.label.toLowerCase().includes(inputValMembers.toLowerCase()),
    );
  };

  //temporary before being able to make query with search parameter

  // const promiseOptions = inputValMembers =>
  // new Promise(resolve => {
  //   setTimeout(() => {
  //     resolve(filterMembers(inputValMembers));
  //   }, 1000);
  // });

  // useEffect(() => {
  //   getMembers()
  // }, []);

  return (
    <>
      <GradientEmptyHeader />

      <Container className="mt--6" fluid>
        <Row>
          <Col className="order-xl-1" xl="12">
            <Card>
              <CardHeader>
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Create Group</h3>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                {submitted ? (
                  <div>
                    <h4>You submitted successfully!</h4>
                    <button className="btn btn-success" onClick={newGroup}>
                      Add
                    </button>
                  </div>
                ) : (
                  <Form>
                    <h6 className="heading-small text-muted mb-4">
                      Group information
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="10">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-group-name"
                            >
                              Group Name
                            </label>
                            <Input
                              name="name"
                              value={group.name}
                              required
                              id="input-group-name"
                              placeholder="Group name"
                              type="text"
                              onChange={handleInputChange}
                            />
                          </FormGroup>
                        </Col>
                      </Row>

                      <Row>
                        <Col lg="10">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="description"
                            >
                              Group Description (optional)
                            </label>
                            <Input
                              name="description"
                              id="description"
                              placeholder="A few words about the group"
                              rows="4"
                              type="textarea"
                              onChange={handleInputChange}
                              value={group.description}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    {/* <hr className="my-4" />

                      <h6 className="heading-small text-muted mb-4">
                        Add Employees
                      </h6> */}

                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="10">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="members"
                            >
                              Add members
                            </label>
                            {/* <Select
                                  defaultValue={selectedOption}
                                  onChange={setSelectedOption}
                                  options={members}
                                  isMulti
                                /> */}
                            <div className="my-3">
                              <Select
                                value={region}
                                onChange={onchangeSelect}
                                options={optionsRegion}
                                getOptionValue={option => option.value}
                                getOptionLabel={option => option.value}
                              />
                            </div>

                            <div className="my-3">
                              {/* <SelectMemberPaginate
                                    regionName={region.value}
                                    value={currentCountry}
                                    onChange={(country) => setCurrentCountry(country)}
                                  /> */}
                            </div>

                            {/* 
                          <AsyncSelect
                                  isMulti
                                  cacheOptions
                                  defaultOptions
                                  loadOptions={promiseOptions}
                                  onChange={handleChangeMembers}
                                  isClearable
                                  value={options.filter(obj => members.includes(obj.value))}
                                /> */}
                          </FormGroup>
                        </Col>
                      </Row>

                      <Row></Row>
                    </div>

                    <div className="pl-lg-4">
                      <button
                        onClick={saveGroup}
                        className="btn btn-success"
                      >
                        {" "}
                        Submit{" "}
                      </button>
                    </div>
                  </Form>
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CreateGroupPage;
