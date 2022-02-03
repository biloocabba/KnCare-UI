import { useEffect, useState } from "react";

// nodejs library that concatenates classes
import { useHistory } from "react-router";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

import classnames from "classnames";

// reactstrap components
// core components
import { AuthHeader } from "components/headers";

import githubIcon from "assets/img/icons/common/github.svg";
import googleIcon from "assets/img/icons/common/google.svg";

import { useAppDispatch, useAppSelector } from "redux/app";
import { login, selectPrincipalState } from "redux/features";

export const LoginPage = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  const [focusedEmail, setfocusedEmail] = useState(false);
  const [focusedPassword, setfocusedPassword] = useState(false);

  const [email, setEmail] = useState("jozef.peterson@kuehne-nagel.com");
  const [password, setPassword] = useState("test1234");

  const user = useAppSelector(selectPrincipalState);

  const handleSignIn = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  useEffect(() => {
    if (user.entity !== null) {
      history.push("/admin/home");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.entity]);

  return (
    <>
      <AuthHeader
        title="Welcome!"
        lead="Use these awesome forms to login or create new account in your project for free."
      />
      <Container className="mt--8 pb-5">
        <Row className="justify-content-center">
          <Col lg="5" md="7">
            <Card className="bg-secondary border-0 mb-0">
              <CardHeader className="bg-transparent pb-5">
                <div className="text-muted text-center mt-2 mb-3">
                  <small>Sign in with</small>
                </div>
                <div className="btn-wrapper text-center">
                  <Button
                    className="btn-neutral btn-icon"
                    color="default"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <span className="btn-inner--icon mr-1">
                      <img alt="..." src={githubIcon} />
                    </span>
                    <span className="btn-inner--text">Github</span>
                  </Button>
                  <Button
                    className="btn-neutral btn-icon"
                    color="default"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <span className="btn-inner--icon mr-1">
                      <img alt="..." src={googleIcon} />
                    </span>
                    <span className="btn-inner--text">Google</span>
                  </Button>
                </div>
              </CardHeader>
              <CardBody className="px-lg-5 py-lg-5">
                <div className="text-center text-muted mb-4">
                  <small>Or sign in with credentials</small>
                </div>
                <Form role="form">
                  <FormGroup
                    className={classnames("mb-3", {
                      focused: focusedEmail,
                    })}
                  >
                    <InputGroup className="input-group-merge input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-email-83" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Email"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        onFocus={() => setfocusedEmail(true)}
                        onBlur={() => setfocusedEmail(true)}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup
                    className={classnames({
                      focused: focusedPassword,
                    })}
                  >
                    <InputGroup className="input-group-merge input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-lock-circle-open" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Password"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        onFocus={() => setfocusedPassword(true)}
                        onBlur={() => setfocusedPassword(true)}
                      />
                    </InputGroup>
                  </FormGroup>
                  <div className="custom-control custom-control-alternative custom-checkbox">
                    <input
                      className="custom-control-input"
                      id=" customCheckLogin"
                      type="checkbox"
                    />
                    <label className="custom-control-label" htmlFor=" customCheckLogin">
                      <span className="text-muted">Remember me</span>
                    </label>
                  </div>
                  <div className="text-center">
                    <Button
                      className="my-4"
                      color="info"
                      type="button"
                      onClick={e => handleSignIn(e)}
                    >
                      Sign in
                    </Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
            <Row className="mt-3">
              <Col xs="6">
                <a className="text-light" href="#pablo" onClick={e => e.preventDefault()}>
                  <small>Forgot password?</small>
                </a>
              </Col>
              <Col className="text-right" xs="6">
                <a className="text-light" href="#pablo" onClick={e => e.preventDefault()}>
                  <small>Create new account</small>
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
