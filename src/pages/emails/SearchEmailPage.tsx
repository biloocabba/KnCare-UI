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
import React, { useEffect, useState, useRef } from "react";

import { useHistory } from "react-router";

import { Button, ButtonGroup, Card, Col, Container, Row, UncontrolledTooltip } from "reactstrap";

import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";

import { BoxHeader } from "components/headers";
import { pagination } from "components/widgets";

import { useAlert } from "context";

import { CopyButton, PrintButton } from "./components";

const { SearchBar } = Search;

export const ReactBSTables = () => {
  const { alert } = useAlert();
  const history = useHistory();
  const componentRef = useRef(null);

  const initialEmailState = [
    {
      id: "1",
      subject: "Sample subject",
      content: "Hello world!",
      attachments: null,
      createdBy: {},
      recipients: null,
      recipientGroups: null,
    },
  ];
  const [emails] = useState(initialEmailState);

  useEffect(() => {
    // emailService.getAll().then(response => {
    //   setEmails(response.data);
    // });
  }, []);

  const onEditDraftClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { id } = e.target as HTMLButtonElement;
    history.push("/admin/email-details/" + id);
  };

  const formatActionButtonCell = (cell: any, row: any) => {
    return (
      <>
        <Button
          id={row.id}
          className="btn-icon btn-2"
          type="button"
          onClick={e => onEditDraftClick(e)}
        >
          Edit
        </Button>
      </>
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
              <ToolkitProvider
                data={emails}
                keyField="id"
                columns={[
                  {
                    dataField: "id",
                    text: "Id",
                    sort: true,
                  },
                  {
                    dataField: "subject",
                    text: "Subject",
                    sort: true,
                  },
                  {
                    dataField: "action",
                    text: "",
                    formatter: formatActionButtonCell,
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
                            Search:
                            <SearchBar
                              className="form-control-sm"
                              placeholder=""
                              {...props.searchProps}
                            />
                          </div>
                        </Col>
                      </Row>
                    </Container>
                    <BootstrapTable
                      hover
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
