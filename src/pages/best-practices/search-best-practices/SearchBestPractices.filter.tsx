import { useState } from "react";

import { Card, CardHeader, CardBody, Row, Col, FormGroup } from "reactstrap";

import ReactDatetimeClass from "react-datetime";

import { InputField } from "components/widgets";

import { BestPracticesQueryFilters } from "types";

interface onSearchFunction {
  (searchRequest: BestPracticesQueryFilters): void;
}

interface Props {
  onSearch: onSearchFunction;
}

export const SearchBestPracticesFilterPanel = ({ onSearch }: Props) => {
  const [searchAuthor, setSearchAuthor] = useState("");
  const [searchTag, setSearchTag] = useState("");
  // const [searchRate] = useState("");
  const [searchTitle, setSearchTitle] = useState("");
  const [searchTime, setSearchTime] = useState("");

  const findByAllParameters = () => {
    const searchFilters: BestPracticesQueryFilters = {
      searchAuthor,
      searchTag,
      searchTitle,
      searchTime,
    };

    onSearch(searchFilters);
  };
  return (
    <Card>
      <CardHeader>
        <h3 className="mb-0">Search Best Practices</h3>
        <p className="text-sm mb-0">Filters</p>
      </CardHeader>
      <CardBody>
        <Row>
          <Col md="3">
            <InputField
              placeholder="Author"
              label="Author"
              onChange={(e: any) => setSearchAuthor(e.target.value)}
              value={searchAuthor}
              id="author"
              type="text"
            />
          </Col>
          <Col md="3">
            <InputField
              placeholder="Title"
              label="Title"
              onChange={(e: any) => setSearchTitle(e.target.value)}
              value={searchTitle}
              id="title"
              type="text"
            />
          </Col>
          <Col md="2">
            <InputField
              placeholder="Tag"
              label="Tag"
              onChange={(e: any) => setSearchTag(e.target.value)}
              value={searchTag}
              id="search-Tag"
              type="text"
            />
          </Col>
          <Col md="2">
            <FormGroup>
              <label className="form-control-label" htmlFor="example3cols2Input">
                Creation Date
              </label>
              <ReactDatetimeClass
                inputProps={{
                  placeholder: "Creation Date",
                }}
                onChange={e => setSearchTime(e.toLocaleString())}
                timeFormat={false}
              />
            </FormGroup>
          </Col>
          <Col md="2">
            <FormGroup>
              <button
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
              </button>
            </FormGroup>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};
