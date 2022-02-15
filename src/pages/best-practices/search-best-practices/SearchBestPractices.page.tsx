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

import { useHistory } from "react-router";

import { Card, CardHeader, Col, Container, Row, Spinner } from "reactstrap";

import { BoxHeader } from "components/headers";
import { ReactTable } from "components/widgets";

import { BestPractice, BestPracticesQueryFilters } from "types";

import { useAppDispatch, useAppSelector } from "redux/app";
import { deleteBestPractice, selectBestPracticeState, searchBestPractices } from "redux/features";

import { BEST_PRACTICE_DETAILS } from "../best-practices.routes.const";
import { BestPracticeHighlightsPanel } from "../panels";

import { SearchBestPracticesFilterPanel, bestPracticesTableColumns } from ".";

export const SearchBestPracticesPage = () => {
  const history = useHistory();

  const [alert] = useState(null);
  const [selectedRows, setSelectedRows] = useState<BestPractice[]>([]);

  const dispatch = useAppDispatch();

  const bestPractices = useAppSelector(selectBestPracticeState);

  const onClickSearchBestPractices = (filters: BestPracticesQueryFilters): void => {
    dispatch(searchBestPractices(filters));
  };

  const onRemoveBestPractice = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { id } = e.currentTarget as HTMLButtonElement;
    dispatch(deleteBestPractice(parseInt(id)));
  };

  const onGoToBestPracticeDetails = (e: MouseEvent<HTMLButtonElement>) => {
    const { id } = e.currentTarget as HTMLButtonElement;
    history.push(`/admin${BEST_PRACTICE_DETAILS}/${id}`);
  };

  return (
    <>
      {alert}
      <BoxHeader />
      <Container className="mt--6" fluid>
        <Row className="justify-content-center">
          <Col className="card-wrapper" lg="12">
            <BestPracticeHighlightsPanel onViewDetailsClick={onGoToBestPracticeDetails} />
          </Col>
        </Row>

        <Row>
          <div className="col">
            <SearchBestPracticesFilterPanel onSearch={onClickSearchBestPractices} />
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
                  keyField="id"
                  columns={bestPracticesTableColumns}
                  onViewDetailsClick={onGoToBestPracticeDetails}
                  onDeleteItemClick={onRemoveBestPractice}
                  selectedRows={selectedRows}
                  setSelectedRows={setSelectedRows}
                  searchBarPlaceholder="Filter results"
                />
              )}
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};
