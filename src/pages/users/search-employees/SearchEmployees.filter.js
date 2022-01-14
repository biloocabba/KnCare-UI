import React, { useState } from 'react'
import { Button, Card, CardBody, CardHeader, Col, FormGroup, Row } from 'reactstrap'

import { InputField } from 'components/widgets/input-field';
import { SelectField } from 'components/widgets/select-field';
import { DateField } from 'components/widgets/date-field';

export const SearchEmployeesFilterPanel = ({onSearchEmployees, countries, businessUnits}) => {

    const [searchLastName, setSearchLastName] = useState("");
    const [searchBusinessUnit, setSearchBusinessUnit] = useState("");
    const [searchCountry, setSearchCountry] = useState("");
    const [searchHiringDate, setSearchHiringDate] = useState(null);

    const onChangeSearchLastName = e => {
        const searchLastName = e.target.value;
        setSearchLastName(searchLastName);
      };
    const onChangeSearchHiringDate = dateAsMoment => {
        setSearchHiringDate(dateAsMoment.format("D-MM-YYYY"));
    };
    
      const findByAllParameters = () => {
        let filters = {
          lastName: searchLastName,
          businessUnitId: searchBusinessUnit,
          countryId: searchCountry,
          hiringDate: searchHiringDate,
        };
        console.log(filters);
       onSearchEmployees(filters);
      };

    return (
          <Card>
              <CardHeader>
                <h3 className="mb-0">Search Employees</h3>
                <p className="text-sm mb-0">Filters</p>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col md="3">
                    {/* <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="lastName"
                      >
                        Last name
                      </label>
                      <Input
                        id="lastName"
                        style={{ height: "36px" }}
                        className="form-control"
                        type="text"
                        placeholder="Last Name"
                        value={searchLastName}
                        onChange={onChangeSearchLastName}
                      />
                    </FormGroup> */}
                      <InputField
                            id="input-last-name"
                            label="Last name"
                            style={{ height: "36px" }}
                            className="form-control"
                            value={searchLastName}
                            placeholder="Last Name"
                            type="text"
                            onChange={onChangeSearchLastName}
                        />
                  </Col>
                  <Col md="3">
                    {/* <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="businessUnits"
                      >
                        Business Units
                      </label>
                      <Select
                        id="businessUnits"
                        components={makeAnimated()}
                        options={businessUnits}
                        onChange={item =>
                          setSearchBusinessUnit(item.value)
                        }
                      />
                    </FormGroup> */}
                        <SelectField 
                            id="select-businessUnits"
                            label="Business Units"
                            options={businessUnits}
                            onChange={item => setSearchBusinessUnit(item.value)}
                        />  
                  </Col>
                  <Col md="2">
                    {/* <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="country"
                      >
                        Countries
                      </label>
                      <Select
                        id="country"
                        components={makeAnimated()}
                        options={countries}
                        onChange={item => setSearchCountry(item.value)}
                      />
                    </FormGroup> */}

                    <SelectField 
                         id="select-country"
                         label="Countries"
                         options={countries}
                        onChange={item => setSearchCountry(item.value)}
                    />  
                  
                  </Col>
                  <Col md="2">
                    {/* <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="example3cols2Input"
                      >
                        Hire Date From
                      </label>
                      <ReactDatetime
                        inputProps={{
                          placeholder: "Hire date",
                        }}
                        onChange={e => onChangeSearchHiringDate(e)}
                        timeFormat={false}
                      />
                    </FormGroup> */}
                    <DateField
                        id="date-hire-from"
                        label="Hire Date From"
                        onChange={e => onChangeSearchHiringDate(e)}
                        timeFormat={false}
                    />
                  </Col>
                  <Col md="2">
                    <FormGroup>
                      <Button
                        style={{
                          marginTop: "32px",
                          marginLeft: "32px",
                          height: "40px",
                        }}
                        className="btn btn-primary"
                        color="primary"
                        onClick={findByAllParameters}
                      >
                        Search
                      </Button>
                    </FormGroup>
                  </Col>
                </Row>
              </CardBody>
            </Card>
    )
}


