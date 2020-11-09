import React from "react";
import { withRouter } from "react-router";
import classnames from "classnames";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import { compose } from "redux";
import { connect } from "react-redux";
import { uploadPhoto } from "../../redux/actions/authActions";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Label,
  FormGroup,
  Form,
  Input,
  FormText,
  NavItem,
  NavLink,
  Nav,
  Table,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledCarousel,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footer/Footer.js";

const carouselItems = [
  {
    src: require("assets/img/denys.jpg"),
    altText: "Slide 1",
    caption: "Big City Life, United States",
  },
  {
    src: require("assets/img/fabien-bazanegue.jpg"),
    altText: "Slide 2",
    caption: "Somewhere Beyond, United States",
  },
  {
    src: require("assets/img/mark-finn.jpg"),
    altText: "Slide 3",
    caption: "Stocks, United States",
  },
];

let ps = null;

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: this.props.user,
      file: "",
      tabs: 1,
    };
  }
  componentDidMount() {
    console.log(this.state.userInfo.profilePhoto);
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    document.body.classList.toggle("profile-page");
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-off";
      document.documentElement.classList.remove("perfect-scrollbar-on");
    }
    document.body.classList.toggle("profile-page");
  }
  toggleTabs = (e, stateName, index) => {
    e.preventDefault();
    this.setState({
      [stateName]: index,
    });
  };
  uploadImage(e) {
    let imageObj = {};
    console.log(e.target.files[0]);
    this.setState({
      file: e.target.files[0],
    });
  }
  updateProfilePicture = async (e) => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (this.state.file) {
      await this.props.uploadPhoto(token, this.state.file);
      this.props.history.push("/");
    }
  };

  render() {
    return (
      <>
        <ExamplesNavbar />
        <div className="wrapper">
          <div className="page-header">
            <img
              alt="..."
              className="dots"
              src={require("assets/img/dots.png")}
            />
            <img
              alt="..."
              className="path"
              src={require("assets/img/path4.png")}
            />
            <Container className="align-items-center">
              <Row>
                <Col className="ml-auto mr-auto" lg="4" md="6">
                  <Card className="card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid rounded-circle"
                        //src={require("assets/img/mike.jpg")}
                        src={
                          this.state.userInfo.createdAt ===
                          this.state.userInfo.updatedAt
                            ? this.state.userInfo.profilePhoto
                            : `http://${this.state.userInfo.profilePhoto}`
                        }
                      />
                      <input
                        type="file"
                        onChange={(e) => {
                          this.uploadImage(e);
                        }}
                      ></input>
                    </CardHeader>
                    <Button
                      className="btn-round float-right"
                      color="primary"
                      data-placement="right"
                      id="tooltip341148792"
                      type="button"
                      onClick={(e) => this.updateProfilePicture(e)}
                    >
                      Update Profile Photo!
                    </Button>
                    <CardBody>
                      <Nav
                        className="nav-tabs-primary justify-content-center"
                        tabs
                      >
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: this.state.tabs === 1,
                            })}
                            onClick={(e) => this.toggleTabs(e, "tabs", 1)}
                            href="#pablo"
                          >
                            Registered events!
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="6">
                  <Card className="card-plain">
                    <CardHeader>
                      <h5 className="text-on-back">Info</h5>
                    </CardHeader>
                    <CardBody>
                      <Form>
                        <Row>
                          <Col md="6">
                            <FormGroup>
                              <label>Your Name</label>
                              <Input
                                defaultValue={this.state.userInfo.name}
                                type="text"
                              >
                                {this.state.userInfo.name}
                              </Input>
                            </FormGroup>
                          </Col>
                          <Col md="6">
                            <FormGroup>
                              <label>Email address</label>
                              <Input
                                defaultValue={this.state.userInfo.email}
                                type="email"
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col md="6">
                            <FormGroup>
                              <label>Phone</label>
                              <Input
                                defaultValue={this.state.userInfo.phone}
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                          <Col md="6">
                            <FormGroup>
                              <label>College</label>
                              <Input
                                defaultValue={this.state.userInfo.college}
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                          <Col md="6">
                            <FormGroup>
                              <label>Celesta Id</label>
                              <Input
                                defaultValue={this.state.userInfo.celestaId}
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                        </Row>

                        <Button
                          className="btn-round float-right"
                          color="primary"
                          data-placement="right"
                          id="tooltip341148792"
                          type="button"
                        >
                          Update details!
                        </Button>
                        <UncontrolledTooltip
                          delay={0}
                          placement="right"
                          target="tooltip341148792"
                        >
                          Can't wait for your message
                        </UncontrolledTooltip>
                      </Form>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>

          <Footer />
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.auth.user,
  isLoading: state.auth.isLoading,
  error: state.error,
});
export default withRouter(
  compose(connect(mapStateToProps, { uploadPhoto }))(ProfilePage)
);
