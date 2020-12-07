import React from "react";
import { withRouter } from "react-router";
import classnames from "classnames";
import axios from "axios";
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
import MaterialTable, { MTableToolbar } from "material-table";
import Grow from "@material-ui/core/Grow";

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
      regEveId: [],
      events: [],
      name: this.props.user.name,
      phone: this.props.user.phone,
      coll: this.props.user.college,
      //payUser:[]
    };
  }
  // componentWillMount(){
  //   if(this.props.user && this.state.payUser.length===0) this.getTownReg();
  // }

  componentDidMount() {
    this.getRegEve();
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

  // getTownReg = () => {
  //   console.log("hi");
  //   const token = `eyJhbGciOiJIUzUxMiJ9.eyJST0xFIjoiUk9MRV9VU0VSIiwic3ViIjoic3BvbnNvcnNoaXAuY2VsZXN0YS5paXRwQGdtYWlsLmNvbSIsImF1ZGllbmNlIjoid2ViIiwiY3JlYXRlZCI6MTYwNzE5OTI4MzYwNywiVVNFUl9JRCI6MjQ3ODE1MSwiZXhwIjoxNjE0OTc1MjgzfQ.3KzAA3QYDuVFW2QlKw7ahuv1SvlI55TdPwNOcTrCrNaUaPXmebh4KGocBENCVAMih-mGc7dntVWrNbIp-6962w`;
  //   axios
  //     .get(`https://cors-anywhere.herokuapp.com/https://www.townscript.com/api/registration/getRegisteredUsers?eventCode=celesta2k20`, {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: token,
  //       },
  //     })
  //     .then(async(response) => {
  //       const data = response.data;
  //       const arrdata = JSON.parse(data.data);
  //       const filterdata = arrdata.filter(dat => dat.customQuestion1.includes(this.props.user.celestaId));
  //       this.setState({payUser: filterdata});
  //       this.check();
  //       console.log("Data has been received!!");
  //     })
  //     .catch(() => {
  //       console.log('Error retrieving data!!!');
  //     });
  // }

  getRegEve = () => {
    const token = localStorage.getItem("token");
    axios
      .get(`/api/registrations/myregistrations`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      })
      .then(async (response) => {
        const data = response.data;
        this.setState({ regEveId: data });
        console.log(this.state.regEveId.data);
        console.log("Data has been received!!");
        this.getEveDetails();
      })
      .catch(() => {
        alert("Error retrieving data!!!");
      });
  };

  getEveDetails = () => {
    const token = localStorage.getItem("token");
    //Object.entries(this.state.regEveId).map(([key, value]) => {
    this.state.regEveId.data.map((val) => {
      axios
        .get(`/api/events/event/${val.eventId}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        })
        .then(async (response) => {
          const data = response.data;
          this.setState({ events: this.state.events.concat(data) });
          console.log(this.state.events);
          console.log("Data has been received!!");
        })
        .catch(() => {
          alert("Error retrieving data!!!");
        });
    });
    //})
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

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  submit = (e) => {
    e.preventDefault();
    console.log("hehehe");
    axios
      .put("/api/users/updatedetails/", {
        id: this.state.userInfo._id,
        name: this.state.name,
        phone: this.state.phone,
        college: this.state.coll,
      })

      .then(() => {
        console.log("Data has been sent to the server");
        this.state.userInfo.name = this.state.name;
        this.state.userInfo.phone = this.state.phone;
        this.state.userInfo.college = this.state.coll;
        localStorage.setItem("user", JSON.stringify(this.state.userInfo));
        this.props.history.push("/");
      })
      .catch(() => {
        console.log("Internal server error");
      });
  };

  render() {
    console.log("State: ", this.state);

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
                      {/* <input
                        type="file"
                        onChange={(e) => {
                          this.uploadImage(e);
                        }}
                      ></input> */}
                    </CardHeader>
                    {/* <Button
                      className="btn-round float-right"
                      color="primary"
                      data-placement="right"
                      id="tooltip341148792"
                      type="button"
                      onClick={(e) => this.updateProfilePicture(e)}
                    >
                      Update Profile Photo!
                    </Button> */}
                    {/* <CardBody>
                      <Nav
                        className="nav-tabs-primary justify-content-center"
                        tabs
                      >
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: this.state.tabs === 1,
                            })}
                            onClick={(e) => this.toggleTabs(e, "tabs", 2)}
                            href="#pablo"
                          >
                            Registered events!
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </CardBody> */}
                  </Card>
                </Col>
                <Col md="6">
                  <Card className="card-plain">
                    <CardHeader>
                      <h5 className="text-on-back">Info</h5>
                    </CardHeader>
                    <CardBody>
                      <Form onSubmit={this.submit}>
                        <Row>
                          <Col md="6">
                            <FormGroup>
                              <label>Your Name</label>
                              <Input
                                defaultValue={this.state.userInfo.name}
                                type="text"
                                name="name"
                                onChange={this.handleChange}
                              />
                            </FormGroup>
                          </Col>
                          <Col md="6">
                            <FormGroup>
                              <label>Email address</label>
                              <Input
                                value={this.state.userInfo.email}
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
                                name="phone"
                                onChange={this.handleChange}
                              />
                            </FormGroup>
                          </Col>
                          <Col md="6">
                            <FormGroup>
                              <label>Celesta Id</label>
                              <Input
                                value={this.state.userInfo.celestaId}
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
                                name="coll"
                                onChange={this.handleChange}
                              />
                            </FormGroup>
                          </Col>
                        </Row>

                        <Button
                          className="btn-round float-right"
                          color="primary"
                          data-placement="right"
                          id="tooltip341148792"
                          type="submit"
                          value="Submit"
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
              <Row>
                <h2 style={{ textDecoration: "underline" }}>
                  Registered Events
                </h2>
                <Table
                  responsive
                  style={{
                    width: "max-content",
                    borderCollapse: "collapse",
                    borderStyle: "hidden",
                    border: "2px solid grey",
                  }}
                >
                  <thead>
                    <tr>
                      <th
                        style={{
                          fontSize: "18px",
                          textAlign: "center",
                          border: "2px solid grey",
                        }}
                      >
                        Registered Events
                      </th>
                      <th
                        style={{
                          fontSize: "18px",
                          textAlign: "center",
                          border: "2px solid grey",
                        }}
                      >
                        Date
                      </th>
                      <th
                        style={{
                          fontSize: "18px",
                          textAlign: "center",
                          border: "2px solid grey",
                        }}
                      >
                        Start Date/Time
                      </th>
                      <th
                        style={{
                          fontSize: "18px",
                          textAlign: "center",
                          border: "2px solid grey",
                        }}
                      >
                        End Date/Time
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.events.map((event) => (
                      <tr>
                        <td
                          style={{
                            color: "grey",
                            fontSize: "15px",
                            textAlign: "center",
                            border: "2px solid grey",
                          }}
                        >
                          {event.data.name}
                        </td>
                        <td
                          style={{
                            color: "grey",
                            fontSize: "15px",
                            textAlign: "center",
                            border: "2px solid grey",
                          }}
                        >
                          {event.data.date==="" ? "-" : event.data.date}
                        </td>
                        <td
                          style={{
                            color: "grey",
                            fontSize: "15px",
                            textAlign: "center",
                            border: "2px solid grey",
                          }}
                        >
                          {event.data.startTime}
                        </td>
                        <td
                          style={{
                            color: "grey",
                            fontSize: "15px",
                            textAlign: "center",
                            border: "2px solid grey",
                          }}
                        >
                          {event.data.endTime}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
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
