// core components
import React, { useRef, useState } from "react";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardText,
  Col,
  Container,
  FormGroup,
  Input,
  Row,
  Tooltip,
} from "reactstrap";

import Files from "react-files";
import { Redirect } from "react-router-dom";
import CreatableSelect from "react-select/creatable";
// reactstrap components
import SimpleReactValidator from "simple-react-validator";

import { BoxHeader } from "components/headers";

import bestPracticeService from "../../../services/BestPracticeService";

const initialState = {
  id: null,
  title: "",
  description: "",
  content: null,
};

export const CreateBestPracticePage = () => {
  const simpleValidator = useRef(new SimpleReactValidator());

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const [created, setCreated] = useState(false);
  const [formData] = useState(new FormData());
  const [, forceUpdate] = useState();
  const [errorAlert, setErrorAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Something went wrong");

  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);

  const [content, setContent] = useState(initialState);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setContent({ ...content, [name]: value });
    simpleValidator.current.showMessageFor(name);
  };

  const onFilesError = error => {
    setErrorMessage(error.message);
    setErrorAlert(true);
  };

  const fileUpload = files => {
    toggle();
    formData.delete("file");
    formData.append("file", files[0]);
    setErrorAlert(false);
    forceUpdate(formData.get("file").name);
  };

  const removeFile = () => {
    formData.delete("file");
    forceUpdate(1);
  };

  const saveBestPractice = () => {
    formData.append("content", content.title);
    formData.append("content", content.description);
    const formValid = simpleValidator.current.allValid();
    if (formValid) {
      bestPracticeService
        .create(formData)
        .then(setCreated(true))
        .catch(e => {
          setErrorAlert(true);
          setErrorMessage(e);
        });
    } else {
      simpleValidator.current.showMessages();
      forceUpdate(1);
    }
  };

  const defaultTags = [
    { value: "tag1", label: "Tag1" },
    { value: "tag2", label: "Tag2" },
    { value: "tag3", label: "Tag3" },
    { value: "tag4", label: "Tag4" },
    { value: "tag5", label: "Tag5" },
    { value: "tag6", label: "Tag6" },
  ];

  return (
    <>
      {created === true ? <Redirect to={"/admin/search-best-practices"} /> : null}
      <div className="alert alert-danger mt-3" role="alert" hidden={!errorAlert}>
        <span>{errorMessage}</span>
      </div>
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
                        <FormGroup>
                          <label className="form-control-label">Title</label>
                          <Input
                            className="text-sm"
                            name="title"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                      <Col md="10">
                        <FormGroup>
                          <label className="form-control-label">Description</label>
                          <Input
                            name="description"
                            type="textarea"
                            rows="5"
                            // onChange={handleInputChange}
                            onChange={e => setDescription(e.target.value)}
                            value={description}
                          />
                        </FormGroup>
                      </Col>
                      <Col md="10">
                        <FormGroup>
                          <label className="form-control-label">Tags</label>
                          <CreatableSelect
                            // styles={{
                            //   container: base => ({
                            //     ...base,
                            //   }),
                            // }}
                            isMulti
                            // onChange={handleChange}
                            options={defaultTags}
                          />
                        </FormGroup>
                      </Col>
                      <Col md="10">
                        <FormGroup>
                          <label className="form-control-label">Image Url</label>
                          <Input
                            className="text-sm"
                            name="title"
                            value={imageUrl}
                            onChange={e => setImageUrl(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </div>
            </Row>
            {/*
            <FormGroup>
              <label className="form-control-label">Title</label>
              {simpleValidator.current.message('title', content.title, 'required|min:3|max:50')}
              <Input
                type="text"
                name="title"
                onChange={handleInputChange}
                onBlur={() => simpleValidator.current.showMessageFor('title')}
              />
            </FormGroup>
             */}
          </Col>
        </Row>
        {/* <Row>
          <Col className="order-xl-1">
            <FormGroup>
              <label className="form-control-label">Description</label>
              {simpleValidator.current.message('description', content.description, 'required|max:1000')}
              <Input
                name="description"
                type="textarea"
                rows="5"
                onChange={handleInputChange}
              />
              <p className="float-right">{content.description.length} / 1000</p>
            </FormGroup>
          </Col>
        </Row> */}
        <Row>
          <Col>
            <FormGroup>
              <div className="files">
                <Files
                  className="files-dropzone"
                  onChange={fileUpload}
                  onError={onFilesError}
                  accepts={[".jpg", ".pdf", "audio/*", ".html"]}
                  multiple
                  maxFileSize={10000000}
                  minFileSize={0}
                  clickable
                >
                  <Tooltip
                    placement="right"
                    isOpen={tooltipOpen}
                    target="TooltipExample"
                    toggle={toggle}
                  >
                    Attach files
                  </Tooltip>
                  <svg
                    id="TooltipExample"
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-paperclip"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z" />
                  </svg>
                </Files>
                {/* <div className="file-name d-flex" hidden={formData.entries("file").next().done}> */}
                {/* <p className="mt-2">{formData.entries("file").next().done ? "" : formData.get("file").name}</p> */}
              </div>
            </FormGroup>
          </Col>
        </Row>
        <div className="uploaded-file">
          <Row>
            <Col sm="10">
              <Card hidden={formData.entries("file").next().done}>
                <CardBody>
                  <Button close onClick={removeFile} />
                  <CardText tag="h5">
                    {formData.entries().next().done ? "" : formData.get("file").name}
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
        <Row>
          <Button color="primary" type="submit" onClick={e => console.log(e)}>
            Create
          </Button>
        </Row>
      </Container>
    </>
  );
};
