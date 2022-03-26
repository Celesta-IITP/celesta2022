import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";

// reactstrap components
import {
  Button,
  FormGroup,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledPopover,
  PopoverBody,
  PopoverHeader,
  Modal,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  UncontrolledCarousel,
  NavLink,
} from "reactstrap";
import { serverUrl } from "../../config";
const carouselItems = [
  {
    src:
      "https://scontent.fpat2-2.fna.fbcdn.net/v/t1.0-9/126571846_4403571509658157_6900766232859162323_o.jpg?_nc_cat=100&ccb=2&_nc_sid=8bfeb9&_nc_ohc=09rChryv7s0AX9Iuxfv&_nc_ht=scontent.fpat2-2.fna&oh=f60d15793e291d7301ac912d1c8e1a84&oe=5FEE6710",
    altText: "Slide 1",
    caption: "",
  },
  {
    src: require("../../assets/img/homeassets/whatsapp_image_2019-12-10_at_15.51.14.jpeg"),
    altText: "Slide 2",
    caption: "",
  },
  {
    src: require("../../assets/img/homeassets/ha3.jpeg"),
    altText: "Slide 3",
    caption: "",
  },
  {
    src: require("../../assets/img/homeassets/HA4.jpeg"),
    altText: "Slide 4",
    caption: "",
  },
];

let ps = null;

class StepWise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      demoModal: false,
      miniModal: false,
      formModal: false,
    };
  }
  toggleModal = (modalState) => {
    this.setState({
      [modalState]: !this.state[modalState],
    });
  };
  render() {
    return (
      <div className="section bg">
        <Container>
          <Row className="justify-content-between align-items-center">
            <Col className="mb-5 mb-lg-0" lg="5">
              <h1
                className="text-white font-weight-light"
                style={{ fontSize: "30px" }}
              >
                About Celesta
              </h1>

              <p className="text-white mt-4">
                Celesta is the annual Techno-Management Fest of IIT Patna. To
                promote technical and managerial enthusiasm amongst young and
                bright minds of our nation and to provide a platform to
                transform their innovative ideas into a meaningful reality.
              </p>
              <NavLink>
                <Button
                  className="mt-4"
                  color="warning"
                  href="https://youtu.be/iSA7maa9L2M"
                >
                  CA Program
                </Button>
              </NavLink>
              <NavLink href="/events-page">
                <Button className="mt-4" color="warning">
                  Events
                </Button>
              </NavLink>
              <NavLink href="/schedule">
                <Button className="mt-4" color="warning">
                  Events Schedule!
                </Button>
              </NavLink>

              <br />
            </Col>
            <Col lg="6">
              <UncontrolledCarousel
                items={carouselItems}
                indicators={false}
                autoPlay={true}
              />
            </Col>
          </Row>
        </Container>
        
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "4rem",
            padding: "1rem",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "4rem",
              padding: "1rem",
            }}
          >
            {/* <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "1rem",
                marginLeft: "2rem",
                padding: "1rem",
              }}
            >
              <iframe
                width="400"
                height="350"
                src="https://www.youtube.com/embed/1_xkJJ5XMyM"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div> */}
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
        <Container>
          <Row className="justify-content-between align-items-center">
            <Col lg="6">
              <div className="img1">
                <img
                  className="ca_img"
                  src={require("../../assets/img/newimg/ca.png")}
                  rounded
                />
              </div>{" "}
              <br />
              <br />
            </Col>

            <Col className="mb-5 mb-lg-0" lg="5">
              <h1
                className="text-white font-weight-light"
                style={{ fontSize: "30px" }}
              >
                CA Program
              </h1>
              <p className="text-white mt-4">
                The Campus Ambassador program is one of the leading publicity
                programs of Celesta. The promotion of the fest in the respective
                colleges is assigned to the campus ambassadors. They serve as
                the intermediaries who bridge the gap between their college and
                our campus i.e, as a nodal point for any kind of communication
                or promotion. Campus ambassadors act as the face of one of the
                biggest techno-management festival in the entire North-East
                India and are entrusted with the job of increasing the outreach
                of the fest through on field and social media publicity. The
                campus ambassadors are entitled to exciting prizes, apart from
                the coveted certificate and many other goodies.
              </p>
              {/* <Button href="/ca">Register</Button> */}
              <Button className="mt-4" color="warning">
                <NavLink href="/ca">Register Here!</NavLink>
              </Button>
              <Button className="mt-4" color="warning">
                <NavLink href="https://drive.google.com/file/d/1eoq0klP8LmGccQWTx-F-H9nrU7LOWj1z/view?usp=sharing">
                  FAQ
                </NavLink>
              </Button>
            </Col>
          </Row>
        </Container>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "4rem",
            padding: "1rem",
          }}
        >
          <iframe
            width="600"
            height="350"
            src="https://www.youtube.com/embed/iSA7maa9L2M"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    );
  }
}

export default StepWise;
