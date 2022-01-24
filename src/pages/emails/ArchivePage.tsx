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
import { useRef } from "react";

import {
  ButtonGroup,
  Card,
  CardHeader,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";

import { BoxHeader } from "components/headers";
import { pagination } from "components/widgets";

import { useAlert } from "context";
import { dataTable } from "variables/general";

import { CopyButton, PrintButton } from "./components";

const { SearchBar } = Search;

export const ArchivePage = () => {
  const { alert } = useAlert();
  const componentRef = useRef(null);

  return (
    <>
      {alert}
      <BoxHeader />
      <Container className="mt--6" fluid>
        <Row>
          <div className="col">
            <Card>
              <CardHeader>
                <h3 className="mb-0">React Bootstrap Table 2</h3>
                <p className="text-sm mb-0">
                  This is an exmaple of data table using the well known react-bootstrap-table2
                  plugin. This is a minimal setup in order to get started fast.
                </p>
              </CardHeader>
              <ToolkitProvider
                data={dataTable}
                keyField="name"
                columns={[
                  {
                    dataField: "name",
                    text: "Name",
                    sort: true,
                  },
                  {
                    dataField: "position",
                    text: "Position",
                    sort: true,
                  },
                  {
                    dataField: "office",
                    text: "Office",
                    sort: true,
                  },
                  {
                    dataField: "age",
                    text: "Age",
                    sort: true,
                  },
                  {
                    dataField: "start_date",
                    text: "Start date",
                    sort: true,
                  },
                  {
                    dataField: "salary",
                    text: "Salary",
                    sort: true,
                  },
                ]}
                search
              >
                {props => (
                  <div className="py-4 table-responsive">
                    <div id="datatable-basic_filter" className="dataTables_filter px-4 pb-1">
                      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                      <label>
                        Search:
                        <SearchBar
                          className="form-control-sm"
                          placeholder=""
                          {...props.searchProps}
                        />
                      </label>
                    </div>
                    <BootstrapTable
                      {...props.baseProps}
                      bootstrap4={true}
                      pagination={pagination}
                      bordered={false}
                    />
                  </div>
                )}
              </ToolkitProvider>
            </Card>
            <Card>
              <CardHeader>
                <h3 className="mb-0">Action buttons</h3>
                <p className="text-sm mb-0">
                  This is an exmaple of data table using the well known react-bootstrap-table2
                  plugin. This is a minimal setup in order to get started fast.
                </p>
              </CardHeader>
              <ToolkitProvider
                data={dataTable}
                keyField="name"
                columns={[
                  {
                    dataField: "name",
                    text: "Name",
                    sort: true,
                  },
                  {
                    dataField: "position",
                    text: "Position",
                    sort: true,
                  },
                  {
                    dataField: "office",
                    text: "Office",
                    sort: true,
                  },
                  {
                    dataField: "age",
                    text: "Age",
                    sort: true,
                  },
                  {
                    dataField: "start_date",
                    text: "Start date",
                    sort: true,
                  },
                  {
                    dataField: "salary",
                    text: "Salary",
                    sort: true,
                  },
                ]}
                search
              >
                {props => (
                  <div className="py-4 table-responsive">
                    <Container fluid>
                      <Row>
                        <Col xs={12} sm={6}>
                          <ButtonGroup>
                            <CopyButton elementId="react-bs-table" />
                            <PrintButton ref={componentRef} />
                          </ButtonGroup>
                          <UncontrolledTooltip placement="top" target="print-tooltip">
                            This will open a print page with the visible rows of the table.
                          </UncontrolledTooltip>
                          <UncontrolledTooltip placement="top" target="copy-tooltip">
                            This will copy to your clipboard the visible rows of the table.
                          </UncontrolledTooltip>
                        </Col>
                        <Col xs={12} sm={6}>
                          <div
                            id="datatable-basic_filter"
                            className="dataTables_filter px-4 pb-1 float-right"
                          >
                            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                            <label>
                              Search:
                              <SearchBar
                                className="form-control-sm"
                                placeholder=""
                                {...props.searchProps}
                              />
                            </label>
                          </div>
                        </Col>
                      </Row>
                    </Container>
                    <BootstrapTable
                      ref={componentRef}
                      {...props.baseProps}
                      bootstrap4={true}
                      pagination={pagination}
                      bordered={false}
                      id="react-bs-table"
                    />
                  </div>
                )}
              </ToolkitProvider>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};
