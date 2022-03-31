import React from "react";
import classnames from "classnames";
import { compose } from "redux";
import { connect } from "react-redux";
import { Alert } from "antd";
import { Link } from "react-router-dom";

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
  Dropdown,
  ButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  InputGroupButtonDropdown,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footer/Footer.js";
import { USER_LOADING } from "redux/actions/types";
import { registerUser } from "redux/actions/authActions";
import { clearErrors } from "redux/actions/errorActions";
import ValidatedLoginForm from "./ValidateLogin";
import { serverUrl } from "../../config";
class RegisterPage extends React.Component {
  state = {
    squares1to6: "",
    squares7and8: "",
    email: "",
    password: "",
    name: "",
    sex: "Sex",
    college: "",
    refId: "",
    phone: "",
    dob: "",
    msg: "",
    temp: "0",
    dropdownOpen: false,
  };
  componentDidMount() {
    document.body.classList.toggle("register-page");
    document.documentElement.addEventListener("mousemove", this.followCursor);
    console.log(this.props.isLoading);
    console.log(serverUrl);
  }
  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    const { name, email, password, college, sex, phone } = this.state;
    if (error !== prevProps.error) {
      if (error.id === "REGISTER_FAIL") {
        if (!email || !password || !name || !college || !sex || !phone) {
          this.setState({
            temp: "1",
            msg: "Please enter all mandatory fields!",
          });
        } else if (error.status === 403) {
          this.setState({
            temp: "1",
            msg: "Email is already registered :(",
          });
        } else if (error.status === 500) {
          this.setState({
            temp: "1",
            msg: "Could not send mail. Please try again!",
          });
        } else if (error.status === 404) {
          this.setState({
            temp: "1",
            msg: "Please check your referral id",
          });
        } else {
          this.setState({
            msg: "",
          });
        }
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
  toggleDropDown = (e) => {
    console.log(e.value);
    console.log(this.state.dropdownOpen);
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  };
  componentWillUnmount() {
    document.body.classList.toggle("register-page");
    document.documentElement.removeEventListener(
      "mousemove",
      this.followCursor
    );
    //alert("You have registered succesfully.")
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
  handleCreate = async (
    name,
    email,
    password,
    college,
    sex,
    phone,
    referralId,
    dob
  ) => {
    const user = {
      name,
      email:email.trim(),
      password,
      college,
      sex,
      phone,
      referralId,
      dob,
    };
    this.setState({
      msg: "",
    });
    await this.props.registerUser(user);
    if (this.state.msg === "") {
      this.setState({
        msg:
          "Registered Successfully and mail has been sent to your registered email",
      });
      this.resetUserInputs();
    }
    //this.props.history.push("/");
  };
  resetUserInputs = () => {
    console.log("Hello");
    this.setState({
      name: "",
      email: "",
      sex: "Sex",
      phone: "",
      password: "",
      college: "",
      refId: "",
      dob: "",
    });
    console.log(this.state.name);
  };
  submitHandler = (e) => {
    e.preventDefault();
    let result;
    if (this.state.sex == "Male") result = 0;
    else if (this.state.sex == "Female") result = 1;
    else result = 2;
    console.log(result);
    let email = this.state.email;
    email=email.trim();
    const password = this.state.password;
    const name = this.state.name;
    const college = this.state.college;
    const sex = result;
    const phone = this.state.phone;
    const refId = this.state.refId ? this.state.refId : "CLST0000";
    const dob = this.state.dob;

    this.handleCreate(name, email, password, college, sex, phone, refId, dob);
  };
  changeValue = (e) => {
    let result;
    if (e.currentTarget.textContent == "Male") result = 0;
    else if (e.currentTarget.textContent == "Female") result = 1;
    else result = 2;
    // console.log(result);
    this.setState({ sex: e.currentTarget.textContent });
  };
  render() {
    function formatDate (input) {
      if(!input) {
        return(input)
      }
      var datePart = input.match(/\d+/g);
      var year = datePart[0]; // get only two digits
      var month = datePart[1], day = datePart[2];
    
      return (day+'/'+month+'/'+year);
    }

    console.log(formatDate('2022/04/20'))

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
                        {/* <CardImg
                          alt="..."
                          src={require("assets/img/square-purple-1.png")}
                        /> */}

                        <CardTitle tag="h4" className="ml-2" style={{"color" :"#64ff9d"}}>
                          Register
                        </CardTitle>
                        {/* <Row>
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
                        </Row> */}
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
                        <h6>Time to get_TechXited....</h6>
                        <Form className="form" onSubmit={this.submitHandler} autoComplete="nopess">
                          <InputGroup
                            className={classnames({
                              "input-group-focus": this.state.fullNameFocus,
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-single-02" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Full Name"
                              type="text"
                              value={this.state.name}
                              onFocus={(e) =>
                                this.setState({ fullNameFocus: true })
                              }
                              onBlur={(e) =>
                                this.setState({ fullNameFocus: false })
                              }
                              onChange={(e) => {
                                this.setState({ name: e.target.value });
                              }}
                            />
                          </InputGroup>
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
                              value={this.state.email}
                              onFocus={(e) =>
                                this.setState({ emailFocus: true })
                              }
                              onBlur={(e) =>
                                this.setState({ emailFocus: false })
                              }
                              onChange={(e) => {
                                this.setState({ email: e.target.value});
                              }}
                            />
                            {/* <Input 
                            type="date"/> */}
                          </InputGroup>
                          <InputGroup
                            className={classnames({
                              "input-group-focus": this.state.passwordFocus,
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-lock-circle" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Password"
                              type="password"
                              value={this.state.password}
                              onFocus={(e) =>
                                this.setState({ passwordFocus: true })
                              }
                              onBlur={(e) =>
                                this.setState({ passwordFocus: false })
                              }
                              onChange={(e) =>
                                this.setState({ password: e.target.value })
                              }
                            />
                          </InputGroup>
                          <InputGroup
                            className={classnames({
                              "input-group-focus": this.state.dobFocus,
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-calendar-60" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Date of birth"
                              type="text"
                              value={formatDate(this.state.dob)}
                              onFocus={(e) => {this.setState({ dobFocus: true}); e.target.type = 'date'; e.target.value = this.state.dob}}
                              onBlur={(e) => {this.setState({ dobFocus: false }); e.target.type = 'text'; e.target.value = formatDate(this.state.dob)}}
                              onChange={(e) => {
                                this.setState({ dob: e.target.value });
                                console.log(this.state.dob)
                              }}
                            />
                            {/* <input placeholder="Date" class="textbox-n" type="text" onfocus="(this.type='date')" id="date"></input> */}
                          </InputGroup>
                          <InputGroup
                            className={classnames({
                              "input-group-focus": this.state.refIdFocus,
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="fa fa-id-badge" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="CA Referal Id(if any)"
                              type="text"
                              value={this.state.refId}
                              onFocus={(e) =>
                                this.setState({ refIdFocus: true })
                              }
                              onBlur={(e) =>
                                this.setState({ refIdFocus: false })
                              }
                              onChange={(e) =>
                                this.setState({ refId: e.target.value })
                              }
                            />
                          </InputGroup>
                          <InputGroup
                            className={classnames({
                              "input-group-focus": this.state.collegeFocus,
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-bank" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="College"
                              type="text"
                              value={this.state.college}
                              onFocus={(e) =>
                                this.setState({ collegeFocus: true })
                              }
                              onBlur={(e) =>
                                this.setState({ collegeFocus: false })
                              }
                              onChange={(e) =>
                                this.setState({ college: e.target.value })
                              }
                            />
                          </InputGroup>

                          {/*<InputGroup
                            className={classnames({
                              "input-group-focus": this.state.sexFocus,
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-badge" />
                              </InputGroupText>
                            </InputGroupAddon>
                            
                            
                            <Input
                              placeholder="Sex"
                              type="text"
                              onFocus={(e) => this.setState({ sexFocus: true })}
                              onBlur={(e) => this.setState({ sexFocus: false })}
                              onChange={(e) =>
                                this.setState({ sex: e.target.value })
                              }
                            />
                            </InputGroup>
                            <select id="sex" name="sex">
                            <option value="male">Male</option>
                            <option value="male">Female</option>
                            <option value="male">Others</option>
                            </select>*/}

                          <InputGroup
                            className={classnames({
                              "input-group-focus": this.state.phoneFocus,
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-mobile" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Phone-no"
                              type="text"
                              value={this.state.phone}
                              onFocus={(e) =>
                                this.setState({ phoneFocus: true })
                              }
                              onBlur={(e) =>
                                this.setState({ phoneFocus: false })
                              }
                              onChange={(e) =>
                                this.setState({ phone: e.target.value })
                              }
                            />
                          </InputGroup>
                          <InputGroup>
                            <InputGroupButtonDropdown
                              addonType="append"
                              isOpen={this.state.dropdownOpen}
                              toggle={this.toggleDropDown}
                            >
                              <DropdownToggle caret>
                                {this.state.sex}
                              </DropdownToggle>
                              <div>
                                <DropdownMenu>
                                  <DropdownItem>
                                    <div onClick={this.changeValue}>Male</div>
                                  </DropdownItem>

                                  <DropdownItem>
                                    <div onClick={this.changeValue}>Female</div>
                                  </DropdownItem>

                                  <DropdownItem>
                                    <div onClick={this.changeValue}>Others</div>
                                  </DropdownItem>
                                </DropdownMenu>
                              </div>
                            </InputGroupButtonDropdown>
                          </InputGroup>
                        </Form>
                      </CardBody>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-around",
                        }}
                      >
                        <CardFooter>
                          <Button
                            className="btn-round"
                            color="primary"
                            size="lg"
                            onClick={this.submitHandler}
                          >
                            Register
                          </Button>
                          {/* <Link to="/ca">
                            <Button
                              className="btn-round"
                              color="primary"
                              size="lg"
                            >
                              Register as CA?
                            </Button>
                          </Link> */}
                        </CardFooter>

                        {/* <a href={serverUrl + "ca"}>
                          {" "}
                          <Button
                            className="btn-round"
                            color="primary"
                            size="lg"
                          >
                            Register as CA?
                          </Button>
                        </a> */}
                      </div>
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

export default compose(connect(mapStateToProps, { registerUser, clearErrors }))(
  RegisterPage
);
