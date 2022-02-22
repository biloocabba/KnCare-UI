import moment from "moment";
import { useState } from "react";
import Rating from "react-rating";

import { Col, FormGroup } from "reactstrap";

import { FilterPanel } from "components/panels";
import { InputField, DateField } from "components/widgets";

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
  const [searchRating, setSearchRating] = useState("");
  const [searchPublishDate, setSearchPublishDate] = useState("");

  const resetFilters = () => {
    setSearchAuthor("");
    setSearchTag("");
    setSearchTitle("");
    setSearchRating("");
    setSearchPublishDate("");
  };

  const findByAllParameters = () => {
    const searchFilters: BestPracticesQueryFilters = {
      searchAuthor,
      searchTag,
      searchTitle,
      searchRating,
      searchPublishDate,
    };

    onSearch(searchFilters);
  };
  return (
    <FilterPanel
      title="Search Best Practices"
      findByAllParameters={findByAllParameters}
      resetFilters={resetFilters}
    >
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
        <DateField
          id="creation-date"
          inputProps={{
            placeholder: "Creation Date",
          }}
          label="Creation Date"
          onChange={dateAsMoment => setSearchPublishDate(moment(dateAsMoment).toLocaleString())}
        />
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
