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
                        <SelectField 
                            id="select-businessUnits"
                            label="Business Unit"
                            options={businessUnits}
                            onChange={item => setSearchBusinessUnit(item.value)}
                        />  
                  </Col>
                  <Col md="2">    
                    <SelectField 
                         id="select-country"
                         label="Country"
                         options={countries}
                        onChange={item => setSearchCountry(item.value)}
                    />                    
                  </Col>
                  <Col md="2">                    
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


