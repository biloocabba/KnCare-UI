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
import React from "react";

// react component used to create sweet alerts
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  Col,
  Container,
  Row,
  UncontrolledTooltip,
} from "reactstrap";

import ReactBSAlert from "react-bootstrap-sweetalert";
// react component for creating dynamic tables
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
// react plugin that prints a given react component
import ReactToPrint from "react-to-print";

// reactstrap components
import { BoxHeader } from "components/headers";
import { pagination } from "components/widgets";

import { dataTable } from "variables/general";

const { SearchBar } = Search;

var SearchTemplatePage = () => {
  const [alert, setAlert] = React.useState(null);
  const componentRef = React.useRef(null);
  // this function will copy to clipboard an entire table,
  // so you can paste it inside an excel or csv file
  const copyToClipboardAsTable = el => {
    var body = document.body,
      range,
      sel;
    if (document.createRange && window.getSelection) {
      range = document.createRange();
      sel = window.getSelection();
      sel.removeAllRanges();
      try {
        range.selectNodeContents(el);
        sel.addRange(range);
      } catch (e) {
        range.selectNode(el);
        sel.addRange(range);
      }
      document.execCommand("copy");
    } else if (body.createTextRange) {
      range = body.createTextRange();
      range.moveToElementText(el);
      range.select();
      range.execCommand("Copy");
    }
    setAlert(
      <ReactBSAlert
        success
        style={{ display: "block", marginTop: "-100px" }}
        title="Good job!"
        onConfirm={() => setAlert(null)}
        onCancel={() => setAlert(null)}
        confirmBtnBsStyle="info"
        btnSize=""
      >
        Copied to clipboard!
      </ReactBSAlert>
    );
  };

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
                            <Button
                              className="buttons-copy buttons-html5"
                              color="default"
                              size="sm"
                              id="copy-tooltip"
                              onClick={() =>
                                copyToClipboardAsTable(document.getElementById("react-bs-table"))
                              }
                            >
                              <span>Copy</span>
                            </Button>
                            <ReactToPrint
                              trigger={() => (
                                <Button
                                  color="default"
                                  size="sm"
                                  className="buttons-copy buttons-html5"
                                  id="print-tooltip"
                                >
                                  Print
                                </Button>
                              )}
                              content={() => componentRef.current}
                            />
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

export default SearchTemplatePage;
