import classnames from "classnames";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Alert,
} from "reactstrap";

import { Role } from "types/security";

import { useAppDispatch, useAppSelector } from "redux/app";
import { login, selectPrincipalState } from "redux/features";

import { AuthHeader } from "components/headers";

export const LoginPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [focusedEmail, setfocusedEmail] = useState(false);
  const [focusedPassword, setfocusedPassword] = useState(false);

  const [email, setEmail] = useState("gabriela.rios@kuehne-nagel.com");
  const [password, setPassword] = useState("");

  const user = useAppSelector(selectPrincipalState);

  const handleSignIn = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  useEffect(() => {
    if (user.entity !== null && user.entity.authRole !== Role.Anonymous) {
      navigate("/admin/home");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.entity]);

  return (
    <>
      <AuthHeader title="Welcome to Kn Care" lead="Please login" />

      <Container className="mt--8 pb-5">
        {user.entity !== null && user.entity.authRole === Role.Anonymous && (
          <Alert color="warning">Login Failed! Email or Password was wrong.</Alert>
        )}
        <Row className="justify-content-center">
          <Col lg="5" md="7">
            <Card className="bg-secondary border-0 mb-0">
              <CardHeader className="bg-transparent pb-5">
                <div className="btn-wrapper text-center">
                  <Button
                    className="btn-neutral btn-icon"
                    color="primary"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    Sign in with SSO
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
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>

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
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>

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
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
