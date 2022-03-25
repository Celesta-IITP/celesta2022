import React from "react";
import classnames from "classnames";
import { compose } from "redux";
import { connect } from "react-redux";
import { Alert } from "antd";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Label,
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
import { loginUser, forgotPassword } from "redux/actions/authActions";
import { clearErrors } from "redux/actions/errorActions";
// core components
import ExamplesNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footer/Footer.js";

class ForgotPage extends React.Component {
  state = {
    squares1to6: "",
    squares7and8: "",
    name: "",
    email: "",
    password: "",
    msg: null,
  };
  componentDidMount() {
    document.body.classList.toggle("register-page");
    document.documentElement.addEventListener("mousemove", this.followCursor);
    this.setState({
      msg: null,
    });
  }
  componentDidUpdate(prevProps) {
    //console.log(prevProps);
    const { error, isAuthenticated } = this.props;
    const { email } = this.state;
    //console.log(error);
    if (error !== prevProps.error) {
      if (error.id === "REGISTER_FAIL") {
        if (!email) {
          this.setState({
            msg: "Please enter all fields",
          });
        } else if (error.status === 404) {
          this.setState({
            msg: "Please check your email",
          });
        }
      } else {
        this.setState({
          msg: null,
        });
      }
    }
    if (isAuthenticated) {
      this.toggleModal();
    }
  }
  toggleModal = () => {
    this.props.clearErrors();
    this.props.history.push("/");
  };

  componentWillUnmount() {
    document.body.classList.toggle("register-page");
    document.documentElement.removeEventListener(
      "mousemove",
      this.followCursor
    );
  }
  followCursor = (event) => {
    let posX = event.clientX - window.innerWidth / 2;
    let posY = event.clientY - window.innerWidth / 6;
    this.setState({
      squares1to6:
        "perspective(500px) rotateY(" +
        posX * 0.05 +
        "deg) rotateX(" +
        posY * -0.05 +
        "deg)",
      squares7and8:
        "perspective(500px) rotateY(" +
        posX * 0.02 +
        "deg) rotateX(" +
        posY * -0.02 +
        "deg)",
    });
  };
  handleCreate = async (email) => {
    await this.props.forgotPassword(email);
    console.log(this.props.error.message);
    if (this.props.error.message === "") this.props.history.push("/reset-page");
  };
  submitHandler = (e) => {
    e.preventDefault();
    const x = this.state.email;
    this.handleCreate(x);
  };
  render() {
    const { msg } = this.state;
    return (
      <>
        <ExamplesNavbar />
        <div className="wrapper">
          <div className="page-header">
            <div className="page-header-image" />
            <div className="content">
              <Container>
                <Row>
                  <Col className="offset-lg-0 offset-md-3" lg="5" md="6">
                    <div
                      className="square square-7"
                      id="square7"
                      style={{ transform: this.state.squares7and8 }}
                    />
                    <div
                      className="square square-8"
                      id="square8"
                      style={{ transform: this.state.squares7and8 }}
                    />
                    <Card className="card-register">
                      <CardHeader>
                        <CardImg
                          alt="..."
                          src={require("assets/img/square-purple-1.png")}
                        />
                        <CardTitle tag="h4">Forgot?</CardTitle>
                        <Row>
                          <Button
                            className="btn-icon btn-round"
                            href="#pablo"
                            target="_blank"
                            color="neutral"
                            onClick={(e) => e.preventDefault()}
                            style={{ marginLeft: "20px" }}
                          >
                            <i className={"fab fa-twitter"} />
                          </Button>
                          <Button
                            className="btn-icon btn-round"
                            href="#pablo"
                            target="_blank"
                            color="neutral"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className={"fab fa-facebook"} />
                          </Button>
                          <Button
                            className="btn-icon btn-round"
                            href="#pablo"
                            target="_blank"
                            color="neutral"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className={"fab fa-google-plus-g"} />
                          </Button>
                        </Row>
                      </CardHeader>
                      <div>
                        {msg ? (
                          <h2
                            style={{
                              fontSize: "25px",
                              color: "black",
                              backgroundImage:
                                "linear-gradient(to bottom right, pink, violet)",
                              textAlign: "center",
                              marginBottom: "30px",
                            }}
                          >
                            {msg}!
                          </h2>
                        ) : null}
                      </div>
                      <CardBody>
                        <h6 style={{ marginBottom: "30px" }}>
                          Time to get_TechXited....
                        </h6>
                        <Form className="form">
                          <InputGroup
                            className={classnames({
                              "input-group-focus": this.state.emailFocus,
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-email-85" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Email"
                              type="text"
                              onFocus={(e) =>
                                this.setState({ emailFocus: true })
                              }
                              onBlur={(e) =>
                                this.setState({ emailFocus: false })
                              }
                              onChange={(e) => {
                                this.setState({ email: e.target.value });
                              }}
                            />
                          </InputGroup>
                        </Form>
                      </CardBody>
                      <CardFooter>
                        <Button
                          className="btn-round"
                          color="primary"
                          size="lg"
                          onClick={this.submitHandler}
                        >
                          {" "}
                          Reset Password!
                        </Button>
                      </CardFooter>
                    </Card>
                  </Col>
                </Row>
                <div className="register-bg" />
                <div
                  className="square square-1"
                  id="square1"
                  style={{ transform: this.state.squares1to6 }}
                />
                <div
                  className="square square-2"
                  id="square2"
                  style={{ transform: this.state.squares1to6 }}
                />
                <div
                  className="square square-3"
                  id="square3"
                  style={{ transform: this.state.squares1to6 }}
                />
                <div
                  className="square square-4"
                  id="square4"
                  style={{ transform: this.state.squares1to6 }}
                />
                <div
                  className="square square-5"
                  id="square5"
                  style={{ transform: this.state.squares1to6 }}
                />
                <div
                  className="square square-6"
                  id="square6"
                  style={{ transform: this.state.squares1to6 }}
                />
              </Container>
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  isLoading: state.auth.isLoading,
  error: state.error,
});

export default compose(
  connect(mapStateToProps, { loginUser, clearErrors, forgotPassword })
)(ForgotPage);
