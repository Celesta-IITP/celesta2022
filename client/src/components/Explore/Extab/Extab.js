import React, { Component } from "react";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import "react-web-tabs/dist/react-web-tabs.css";
import { NavLink } from "reactstrap";
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

const processString = require('react-process-string');
let config = [{
  regex: /(http|https):\/\/(\S+)\.([a-z]{2,}?)(.*?)( |\,|$|\.)/gim,
  fn: (key, result) => <span key={key}>
                          <a target="_blank" href={`${result[1]}://${result[2]}.${result[3]}${result[4]}`}>{result[2]}.{result[3]}{result[4]}</a>{result[5]}
                      </span>
}, {
  regex: /(\S+)\.([a-z]{2,}?)(.*?)( |\,|$|\.)/gim,
  fn: (key, result) => <span key={key}>
                          <a target="_blank" href={`http://${result[1]}.${result[2]}${result[3]}`}>{result[1]}.{result[2]}{result[3]}</a>{result[4]}
                      </span>
}];

class Extab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo:JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : {},
      eventId:this.props.eventDetails._id,
      teamName:"",
      registered:false,
      team: (this.props.eventDetails.teamSize==="1") ? true : false,
      dispmsg:"",
      youtubeLink:"",
      fbLink:"",
      paymentStatus: (this.props.eventDetails.charge!=="0") ? "pending" : "completed"
    };
  }
  componentDidMount() {
    if(localStorage.getItem('user')) this.getReg();
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
        this.setState({dispmsg:"You have already registered!!"})
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
    if(!this.state.team && this.state.teamName===""){
      console.log("hehehehe");
      alert("Please enter the team name");
    }else{
      const token = localStorage.getItem("token");
      axios
        .post(`/api/registrations/register/${this.state.eventId}/`,{
          teamName:this.state.teamName,
          teamDetails:[],
          paymentStatus:this.state.paymentStatus
        },{
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        })

        .then(() => {
          console.log("Data has been sent to the server");
          this.setState({registered:true});
          this.setState({dispmsg:"Registration Successful!!"})
        })
        .catch(() => {
          console.log("Internal server error");
        });
    }
  };

  render() {
    const event = this.props.eventDetails;
    //if (event.charge==="0") event.charge = "Free";
    /*if(!event.organizers.length)
      event.organizers='To be announced'*/
    if (!event.description) event.description = "To be announced";
    //if (!event.date) event.date = "To be announced";
    if (!event.venue) event.venue = "To be announced";
    if (!event.venueUrl) event.venueUrl = "To be announced";
    if (!event.startTime) event.startTime = "To be announced";
    if (!event.endTime) event.endTime = "To be announced";

    let submission = processString(config)(event.venue)
    let fb = processString(config)(event.postLinks)
    let rule = processString(config)(event.rulebookUrl)
    let description = processString(config)(event.description)

    return (
      <div className="white tl tabs">
        <Tabs defaultTab="one" className="tab-content mv2">
          <TabList className="mv2">
            <Tab autoFocus tabFor="one">
              About
            </Tab>
            { (event.eventType!=='gl') ? ( 
            <Tab tabFor="two">Rules</Tab>
            ) : null}
            <Tab tabFor="three">Register</Tab>
          </TabList>
          <TabPanel tabId="one">
          { (event.eventType==='gl') && 
              <>
          <br/>
            <div className="f3 underline b">Topic</div>
            <p
              className="eventDescription"
              dangerouslySetInnerHTML={{ __html: event.venueUrl }}
            ></p>
            </>
          }
          <br/>
            <div className="f3 underline b">Description</div>
            <p
              className="eventDescription"
            >{description}</p>
            <br/>
            { this.state.registered && (event.eventType!=='gl') && (event.imageUrl==="sel") &&
              <>
              <div className="f3 underline b">Submission Link</div>
              <p
                className="eventDescription"
              >{submission}</p>
              <br/>
              </>
             }
             { this.state.registered && (event.eventType==='gl') &&
              <>
              <div className="f3 underline b">Youtube Link</div>
              <p
                className="eventDescription"
              >{submission}</p>
              <br/>
              </>
             }
             { this.state.registered && (event.eventType==='gl') &&
              <>
              <div className="f3 underline b">Facebook Link</div>
              <p
                className="eventDescription"
              >{fb}</p>
              <br/>
              </>
             }
             { this.state.registered && (event.eventType!=='gl') && (event.imageUrl==="reg") && (event.postLinks!=="") && (event.name!=="NJATH") &&
              <>
              <div className="f3 underline b">Registration link</div>
              <p
                className="eventDescription"
              >{fb}</p>
              <br/>
              </>
             }
             { (event.eventType!=='gl') && (event.imageUrl==="reg") && (event.postLinks!=="") && (event.name==="NJATH") &&
              <>
              <div className="f3 underline b">NJATH site</div>
              <p
                className="eventDescription"
              >{fb}</p>
              <br/>
              </>
             }
            <div className="f3 underline b">Charge</div>

            <p
              className="eventPrizes"
            >{(event.charge==="0") ? "Free" : "₹"+event.charge}</p>
            { event.organizers &&
            <>
            <br/>
            <div className="f3 underline b">Event Organizers</div>

            <p
              className="eventHead"
              dangerouslySetInnerHTML={{ __html: event.organizers }}
            ></p>
            </>
            }
            <br/>
            {/* <div className="f3 underline b">Registration Link</div>

            <p
              className="eventHead"
              dangerouslySetInnerHTML={{ __html: event.registrationUrl }}
            ></p>
            <br/> */}
            { event.date &&
            <>
            <div className="f3 underline b">Date</div>

            <p
              className="eventHead"
              dangerouslySetInnerHTML={{ __html: event.date }}
            ></p>
            <br/>
            </>
            }

            { (!event.date) &&
            <>
            <div className="f3 underline b">Start Date</div>

            <p
              className="eventHead"
              dangerouslySetInnerHTML={{ __html: event.startTime }}
            ></p>
            <br/>
            </>
            }

            { (event.date) &&
            <>
            <div className="f3 underline b">Start Time</div>

            <p
              className="eventHead"
              dangerouslySetInnerHTML={{ __html: event.startTime }}
            ></p>
            <br/>
            </>
            }

            { (!event.date) &&
            <>
            <div className="f3 underline b">End Date</div>

            <p
              className="eventHead"
              dangerouslySetInnerHTML={{ __html: event.endTime }}
            ></p>
            </>
            }

            { (event.date) &&
            <>
            <div className="f3 underline b">End Time</div>

            <p
              className="eventHead"
              dangerouslySetInnerHTML={{ __html: event.endTime }}
            ></p>
            </>
            }
          </TabPanel>
          <TabPanel tabId="two">
          <br/>
            <div className="f3 b underline">Rules</div>
            <div className="eventRules">
              <ul>{rule}</ul>
            </div> 
          </TabPanel>
          {Object.keys(this.state.userInfo).length !== 0 ? (
          <TabPanel tabId="three">
            <br/>
            { (event.charge!=="0") ? (
              <div className="f3 b underline" style={{alignContent:"center"}}>
                Please click on both the buttons for registration
              </div>
            ) : null }
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
              { (event.teamSize!=="1" && !this.state.registered) ? (
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
                    {this.state.dispmsg}
                  </h3>
                </Col>
              </FormGroup>
              )}
            </Form>
            { (event.charge!=="0") && (event.name!=="Hack It Out") ? (
              <Col sm={{ size: 10, offset: 1 }}>
                <Button href="https://www.townscript.com/v2/e/celesta2k20/booking/tickets">Pay</Button>
              </Col>
              ) : null }
          </TabPanel>
          ):null}
          {Object.keys(this.state.userInfo).length === 0 ? (
          <TabPanel tabId="three">
            <br/>
            <div className="f3 b underline" style={{alignContent:"center"}}>
              Please login to the website to be able to register for the event. Click the button below to be directed to the signin page.
            </div>
            <br/>          
            <Col sm={{ size: 10, offset: 1 }}>
              <Button>
                <NavLink href="/signin-page">Signin Page</NavLink>
              </Button>
            </Col>
          </TabPanel>
          ):null}
        </Tabs>
      </div>
    );
  }
}

export default Extab;
