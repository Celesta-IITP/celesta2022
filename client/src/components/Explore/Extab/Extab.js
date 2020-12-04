import React, { Component } from "react";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import "react-web-tabs/dist/react-web-tabs.css";
import "./Extab.css";
import {
  Button,
  FormGroup,
  Form,
  Label,
  Input,
  FormText,
  Col,
  Row,
} from "reactstrap";
import axios from 'axios';

class Extab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo:JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : {},
      eventId:this.props.eventDetails._id,
      teamName:"",
      registered:false,
      events:{}
    };
  }
  componentDidMount() {
    this.getReg();
  }

  componentWillUnmount() {}

  getReg = () => {
    const token = localStorage.getItem("token");
    axios
      .get(`/api/registrations/registered/${this.state.eventId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      })
      .then(async(response) => {
        const data = response.data;
        this.setState({registered:data.data})
        console.log(data.data);
        console.log("Data has been received!!");
      })
      .catch(() => {
        alert('Error retrieving data!!!');
      });
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  submit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    axios
      .post(`/api/registrations/register/${this.state.eventId}/`,{
        teamName:this.state.teamName,
        teamDetails:[]
      },{
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      })

      .then(() => {
        console.log("Data has been sent to the server");
        this.setState({registered:true});
      })
      .catch(() => {
        console.log("Internal server error");
      });
  };

  render() {
    const event = this.props.eventDetails;
    if (!event.charge) event.charge = "To be announced";
    /*if(!event.organizers.length)
      event.organizers='To be announced'*/
    if (!event.description) event.description = "To be announced";
    if (!event.date) event.date = "To be announced";
    if (!event.venue) event.venue = "To be announced";
    if (!event.startTime) event.startTime = "To be announced";
    if (!event.endTime) event.endTime = "To be announced";

    return (
      <div className="white tl tabs">
        <Tabs defaultTab="one" className="tab-content mv2">
          <TabList className="mv2">
            <Tab autoFocus tabFor="one">
              About
            </Tab>
            <Tab tabFor="two">Rules</Tab>
            {Object.keys(this.state.userInfo).length !== 0 ? (
            <Tab tabFor="three">Register</Tab>
            ):null}
          </TabList>
          <TabPanel tabId="one">
            <div className="f3 underline b">Description</div>
            <p
              className="eventDescription"
              dangerouslySetInnerHTML={{ __html: event.description }}
            ></p>
            <div className="f3 underline b">Charge</div>

            <p
              className="eventPrizes"
              dangerouslySetInnerHTML={{ __html: event.charge }}
            ></p>
            <div className="f3 underline b">Event Organizers</div>

            <p
              className="eventHead"
              dangerouslySetInnerHTML={{ __html: event.organizers }}
            ></p>
            <div className="f3 underline b">Registration Link</div>

            <p
              className="eventHead"
              dangerouslySetInnerHTML={{ __html: event.registrationUrl }}
            ></p>
            <div className="f3 underline b">Date</div>

            <p
              className="eventHead"
              dangerouslySetInnerHTML={{ __html: event.date }}
            ></p>
            <div className="f3 underline b">Start Time</div>

            <p
              className="eventHead"
              dangerouslySetInnerHTML={{ __html: event.startTime }}
            ></p>
            <div className="f3 underline b">End Time</div>

            <p
              className="eventHead"
              dangerouslySetInnerHTML={{ __html: event.endTime }}
            ></p>
          </TabPanel>
          <TabPanel tabId="two">
            <div className="f3 b underline">Rules</div>
            <div className="eventRules">
              <ul dangerouslySetInnerHTML={{ __html: event.rulebookUrl }}></ul>
            </div>
          </TabPanel>
          {Object.keys(this.state.userInfo).length !== 0 ? (
          <TabPanel tabId="three">
            <br/>
            <br/>
            { !this.state.registered ? (
            <div className="f3 b underline" style={{alignContent:"center"}}>Fill the form and Register</div>
            ): null}
            <Form 
              style={{
                padding: "30px",
                cursor: "pointer",
                color: "white",
              }}

              onSubmit={this.submit}>
              { (event.teamSize>1 && !this.state.registered) ? (
                <FormGroup row>
                  <Label for="exampleText" sm={2}>
                    Team Name
                  </Label>
                  <Col sm={10}>
                    <Input
                      type="textArea"
                      name="teamName"
                      id="exampleText"
                      placeholder="Team Name"
                      onChange={this.handleChange}
                    />
                  </Col>
                </FormGroup>
              ): null}

              { !this.state.registered ? (
              <FormGroup check row>
                <Col sm={{ size: 10, offset: 1 }}>
                  <Button
                    type="submit"
                    value="Submit"
              
                  >
                  Register</Button>
                </Col>
              </FormGroup>
              ): (
                <FormGroup check row>
                <Col sm={{ size: 20, offset: 1 }}>
                  <h3 style={{color:"white",fontFamily:"Itim,cursive"}}>
                    You have already Registered!!
                  </h3>
                </Col>
              </FormGroup>
              )}
            </Form>
          </TabPanel>
          ):null}
        </Tabs>
      </div>
    );
  }
}

export default Extab;
