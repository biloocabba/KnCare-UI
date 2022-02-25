import { Moment } from "moment";
import { useState } from "react";

import { Col, Row } from "reactstrap";

import { FilterPanel } from "components/panels";
import { InputField, DateField, SelectField } from "components/widgets";

import { BestPracticesQueryFilters, SelectOption } from "types";
import { bestPracticeRatings, DATE_FILTER_FORMAT } from "variables/app.consts";

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

  const [searchPublishDate, setSearchPublishDate] = useState<Moment | undefined>(undefined);

  const ratings: SelectOption[] = bestPracticeRatings;
  const [ratingSelected, setRatingSelected] = useState<SelectOption | null>();

  const resetFilters = () => {
    setSearchAuthor("");
    setSearchPublishDate(undefined);
    setSearchTag("");
    setSearchTitle("");
    setRatingSelected(null);
  };

  const findByAllParameters = () => {
    const searchFilters = parametersToFilter();
    onSearch(searchFilters);
  };

  const parametersToFilter = (): BestPracticesQueryFilters => {
    return Object.assign(
      {},
      searchAuthor && searchAuthor !== "" ? { author: searchAuthor } : null,
      searchTag && searchTag !== "" ? { tag: searchTag } : null,
      searchTitle && searchTitle !== "" ? { title: searchTitle } : null,
      searchPublishDate ? { publishDate: searchPublishDate.format(DATE_FILTER_FORMAT) } : null,
      ratingSelected ? { rating: parseInt(ratingSelected.value) } : null
    );
  };

  return (
    <FilterPanel
      title="Search Best Practices"
      findByAllParameters={findByAllParameters}
      resetFilters={resetFilters}
    >
      <Row>
        <Col md="5">
          <InputField
            placeholder="Title"
            label="Title"
            onChange={e => setSearchTitle(e.target.value)}
            value={searchTitle}
            id="title"
            type="text"
          />
        </Col>
        <Col md="6">
          <InputField
            placeholder="Author"
            label="Author"
            onChange={e => setSearchAuthor(e.target.value)}
            value={searchAuthor}
            id="author"
            type="text"
          />
        </Col>
        <Col md="1">&nbsp;</Col>
      </Row>
      <Row>
        <Col md="3">
          <DateField
            id="creation-date"
            label="Creation Date"
            inputProps={{
              placeholder: "Creation Date",
            }}
            value={searchPublishDate}
            setValue={setSearchPublishDate}
          />
        </Col>
        <Col md="2">
          <SelectField
            id="select-rating"
            label="Rating"
            value={ratingSelected}
            options={ratings}
            onChange={item => {
              setRatingSelected(item as SelectOption);
            }}
          />
        </Col>
        <Col md="6">
          <InputField
            placeholder="Tag"
            label="Tag"
            onChange={e => setSearchTag(e.target.value)}
            value={searchTag}
            id="search-Tag"
            type="text"
          />
        </Col>
        <Col md="1">&nbsp;</Col>
      </Row>

      {/* <FormGroup>
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
        </FormGroup> */}
    </FilterPanel>
  );
};
