import { useState } from "react";

import { Button, Card, CardBody, CardHeader, Col, Container, FormGroup, Row } from "reactstrap";

import CreatableSelect from "react-select/creatable";

import { BoxHeader } from "components/headers";
import { InputField } from "components/widgets";

import { useAlerts } from "hooks";
import { BestPractice } from "types";
import { toFileArray } from "types/utils";
import { defaultBestPracticesTags } from "variables/app.consts";

import { useAppDispatch, useAppSelector } from "redux/app";
import { createBestPractice, selectBestPracticeState } from "redux/features";

import { bestPracticeDefaultState } from "..";

export const CreateBestPracticePage = () => {
  const dispatch = useAppDispatch();
  const [bestPractice, setBestPractice] = useState<BestPractice>(bestPracticeDefaultState);
  const bestPracticeState = useAppSelector(selectBestPracticeState);

  const { alert, setSaveSent } = useAlerts(bestPracticeState, "Best Practice Created");

  const changeFileHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.files) {
      setBestPractice({
        ...bestPractice,
        contentFiles: toFileArray(event.currentTarget.files),
      });
    }
  };

  const saveBestPractice = () => {
    dispatch(createBestPractice(bestPractice));
    setSaveSent(true);
  };

  const handleChange = (newValue: any) => {
    const currentTags = [...bestPractice.tags, newValue];
    setBestPractice({ ...bestPractice, tags: currentTags });
  };

  return (
    <>
      {alert}
      <BoxHeader />

      <Container className="mt--6" fluid>
        <Row>
          <Col className="order-xl-1">
            <Row>
              <div className="col">
                <Card>
                  <CardHeader>
                    <h3 className="mb-0">Best Practices</h3>
                    <p className="text-sm mb-0">Create new</p>
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col md="10">
                        <InputField
                          id="input-title"
                          label="Title"
                          value={bestPractice.title}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setBestPractice({
                              ...bestPractice,
                              title: e.target.value,
                            })
                          }
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col md="10">
                        <InputField
                          id="input-description"
                          label="Description"
                          type="textarea"
                          rows="5"
                          value={bestPractice.description}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setBestPractice({
                              ...bestPractice,
                              description: e.target.value,
                            })
                          }
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col md="10">
                        <FormGroup>
                          <label htmlFor="select-tags" className="form-control-label">
                            Tags
                          </label>
                          <CreatableSelect
                            id="select-tags"
                            isMulti
                            options={defaultBestPracticesTags}
                            onChange={handleChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="10">
                        <InputField
                          id="input-image-url"
                          label="Image Url"
                          value={bestPractice.imageUrl}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setBestPractice({
                              ...bestPractice,
                              imageUrl: e.target.value,
                            })
                          }
                        />
                      </Col>
                    </Row>
                    <Row>
                      <InputField
                        id="file-content-upload"
                        label="Content Files"
                        type="file"
                        name="file"
                        onChange={changeFileHandler}
                        className="form-control"
                      />
                    </Row>
                  </CardBody>
                </Card>
              </div>
            </Row>
          </Col>
        </Row>

        <Row>
          <Button color="primary" type="submit" onClick={saveBestPractice}>
            Create
          </Button>
        </Row>
      </Container>
    </>
  );
};
