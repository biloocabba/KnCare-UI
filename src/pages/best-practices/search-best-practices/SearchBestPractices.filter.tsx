import { useState } from "react";

import { Col, FormGroup } from "reactstrap";

import ReactDatetimeClass from "react-datetime";
import Rating from "react-rating";

import { FilterPanel } from "components/panels";
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
  const [searchTitle, setSearchTitle] = useState("");
  const [searchTime, setSearchTime] = useState("");
  const [searchRating, setSearchRating] = useState("");

  const findByAllParameters = () => {
    const searchFilters: BestPracticesQueryFilters = {
      searchAuthor,
      searchTag,
      searchTitle,
      searchTime,
      searchRating,
    };

    onSearch(searchFilters);
  };
  return (
    <FilterPanel title="Search Best Practices" findByAllParameters={findByAllParameters}>
      <Col md="4">
        <InputField
          placeholder="Title"
          label="Title"
          onChange={e => setSearchTitle(e.target.value)}
          value={searchTitle}
          id="title"
          type="text"
        />
      </Col>
      <Col md="3">
        <InputField
          placeholder="Author"
          label="Author"
          onChange={e => setSearchAuthor(e.target.value)}
          value={searchAuthor}
          id="author"
          type="text"
        />
      </Col>
      <Col md="3">
        <InputField
          placeholder="Tag"
          label="Tag"
          onChange={e => setSearchTag(e.target.value)}
          value={searchTag}
          id="search-Tag"
          type="text"
        />
      </Col>
      <Col md="3">
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
      <Col md="3">
        <FormGroup>
          <label className="form-control-label" htmlFor="rating">
            Rating
          </label>
          <div>
            <Rating
              onClick={newRating => setSearchRating(newRating.toString())}
              initialRating={parseInt(searchRating)}
              emptySymbol="fa fa-star-o fa-2x"
              fullSymbol="fa fa-star fa-2x"
              className="mt-2"
            />
          </div>
        </FormGroup>
      </Col>
    </FilterPanel>
  );
};
