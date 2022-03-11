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
import { MouseEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Card, CardHeader, Col, Container, Row, Spinner } from "reactstrap";

import { useAppDispatch, useAppSelector } from "redux/app";
import { deleteBestPractice, selectBestPracticeState, searchBestPractices } from "redux/features";

import { BoxHeader } from "components/headers";
import { ReactTable } from "components/widgets";

import { BestPracticesQueryFilters } from "types";

import { BEST_PRACTICE_DETAILS } from "../best-practices.routes.const";
import { BestPracticeHighlightsPanel } from "../panels";

import { SearchBestPracticesFilterPanel, bestPracticesTableColumns } from ".";

export const SearchBestPracticesPage = () => {
  const navigate = useNavigate();

  const [alert] = useState(null);

  const dispatch = useAppDispatch();
  const bestPractices = useAppSelector(selectBestPracticeState);

  const onSearchBestPractices = (filters: BestPracticesQueryFilters): void => {
    dispatch(searchBestPractices(filters));
  };

  const onDeleteBestPractice = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { id } = e.currentTarget as HTMLButtonElement;
    dispatch(deleteBestPractice(parseInt(id)));
  };

  const onViewBestPracticeDetails = (e: MouseEvent<HTMLButtonElement>) => {
    const { id } = e.currentTarget as HTMLButtonElement;
    navigate(`/admin${BEST_PRACTICE_DETAILS}/${id}`);
  };

  return (
    <>
      {alert}
      <BoxHeader />
      <Container className="mt--6" fluid>
        <Row className="justify-content-center">
          <Col className="card-wrapper" lg="12">
            <BestPracticeHighlightsPanel onViewDetailsClick={onViewBestPracticeDetails} />
          </Col>
        </Row>

        <Row>
          <div className="col">
            <SearchBestPracticesFilterPanel onSearch={onSearchBestPractices} />
          </div>
        </Row>

        <Row>
          <div className="col">
            <Card>
              <CardHeader>
                <h3 className="mb-0">Search results</h3>
              </CardHeader>
              {bestPractices.isLoading ? (
                <div
                  style={{
                    textAlign: "center",
                  }}
                >
                  <Spinner />
                </div>
              ) : (
                <ReactTable
                  data={bestPractices.entities}
                  columns={bestPracticesTableColumns({
                    onDetailsButtonClick: onViewBestPracticeDetails,
                    onRemoveButtonClick: onDeleteBestPractice,
                  })}
                />
              )}
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};
