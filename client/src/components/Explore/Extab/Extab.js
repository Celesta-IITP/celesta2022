import React, { Component } from "react";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import "react-web-tabs/dist/react-web-tabs.css";
import "./Extab.css";

class Extab extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}

  componentWillUnmount() {}

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
            <Tab tabFor="three">Register</Tab>
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
          <TabPanel tabId="three"></TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default Extab;
