import React from "react";
import classnames from "classnames";
import ExamplesNavbar from "../Navbars/IndexNavbar.js";
import Footer from "..//Footer/Footer.js";
// reactstrap components
import {
  TabContent,
  Table,
  TabPane,
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

class schedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iconTabs: 1,
      textTabs: 4
    };
  }
  toggleTabs = (e, stateName, index) => {
    e.preventDefault();
    this.setState({
      [stateName]: index
    });
  };
  render() {
    return (
    <div>
    <ExamplesNavbar />
      <div className="section section-tabs">
        <Container>
          <div className="title">
            <h1 className="mb-3 my-3 text-center">Schedule</h1>
          </div>
          <Row>
            <Col className="ml-auto mr-auto" >
              <div className="mb-3">
                <small className="text-uppercase font-weight-bold">
                </small>
              </div>
              <Card>
                <CardHeader>
                  <Nav className="nav-tabs-info" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: this.state.textTabs === 4
                        })}
                        onClick={e => this.toggleTabs(e, "textTabs", 4)}
                        href="#pablo"
                      >
                        Guest Lectures
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: this.state.textTabs === 5
                        })}
                        onClick={e => this.toggleTabs(e, "textTabs", 5)}
                        href="#pablo"
                      >
                        Events
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: this.state.textTabs === 6
                        })}
                        onClick={e => this.toggleTabs(e, "textTabs", 6)}
                        href="#pablo"
                      >
                        Workshops
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="tab-space"
                    activeTab={"link" + this.state.textTabs}
                  >
                    <TabPane tabId="link4">
                    <TabPane tabId="tab1">
                          <Table className="tablesorter" responsive>
                          <thead className="text-primary">
                              <tr>
                                <th className="header">GUEST NAME</th>
                                <th className="header" style={{ textAlign: "center"}}>TOPIC</th>
                                <th className="header" style={{ textAlign: "center"}}>DAY</th>
                                <th className="header" style={{ textAlign: "center"}}>DATE</th>
                                <th className="header" style={{ textAlign: "center"}}>TIME-SLOT</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Haren Chelle</td>
                                <td>The StartUp Growth Journey</td>
                                <td>Saturday</td>
                                <td>02/04/22</td>
                                
                                <td>15:00-16:00</td>
                              </tr>
                              <tr>
                                <td>Prateek Kishore</td>
                                <td>Transforming Challenges into Opportunities</td>
                                <td>Sunday</td>
                                <td>03/04/22</td>
                                
                                <td>12:00-13:00</td>
                              </tr>
                              <tr>
                                <td>Anil Kakodkar</td>
                                <td>Clean Energy Transition</td>
                                <td>Tuesday</td>
                                <td>05/04/22</td>
                                
                                <td>17:30-18:30</td>
                              </tr>
                              {/* <tr>
                                <td>Shiraz Minwalla</td>
                                <td>The search for Quantum Gravity</td>
                                <td>Thursday</td>
                                <td>17/12/20</td>
                                
                                <td>17:00-18:00</td>
                              </tr>
                              <tr>
                                <td>Rajan Singh</td>
                                <td>Rediscovering focus in a sea of distraction</td>
                                <td>Friday</td>
                                <td>18/12/20</td>
                               
                                <td>17:00-18:00</td>
                              </tr>
                              <tr>
                                <td>Samar Singla</td>
                                <td>Samar's journey as an entrepreneur </td>
                                <td>Saturday</td>
                                <td>19/12/20</td>
                                
                                <td>10:00-11:00</td>
                              </tr>
                              <tr>
                                <td>Abhinay Bhasin</td>
                                <td>The Impact of AI on Human Effort: Does it Empower or Overpower</td>
                                <td>Saturday</td>
                                <td>19/12/20</td>
                                
                                <td>17:00-18:00</td>
                                
                              </tr>
                              <tr>
                                <td>HC Verma</td>
                                <td>The spirit of taking up challenges</td>
                                <td>Sunday</td>
                                <td>20/12/20</td>
                                
                                <td>10:00-11:00</td>
                                
                              </tr>
                              <tr>
                                <td>Alyne Tamir</td>
                                <td>Ask Alyne</td>
                                <td>Sunday</td>
                                <td>20/12/20</td>
                                
                                <td>17:00-18:00</td>
                              </tr> */}
                            </tbody>
                          </Table>
                        </TabPane>
                    </TabPane>
                    <TabPane tabId="link5">

                    <TabPane tabId="tab1">
                          <Table className="tablesorter" responsive>
                            <thead className="text-primary">
                              <tr>
                                <th className="header">Event</th>
                                <th className="header" style={{ textAlign: "center"}}>Date</th>
                                <th className="header" style={{ textAlign: "center"}}>Paid/Non-Paid</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Virtual Crypto Trading</td>
                                <td>31st March-2nd April 2022</td>
                                <td>Not Paid</td>
                              </tr>
                              <tr>
                                <td>Astro Particle Voyage</td>
                                <td>25,26 March, 30 March-1 April 2022</td>
                                <td>Not Paid</td>
                              </tr>
                              <tr>
                                <td>Sudo Override (Capture the Flag)</td>
                                <td>28 March 2022</td>
                                <td>Not Paid</td>
                              </tr>
                              <tr>
                                <td>Hack-it-out</td>
                                <td>27 March-3 April 2022</td>
                                <td>Not Paid</td>
                              </tr>
                              <tr>
                                <td>Depiction</td>
                                <td>27 March- 3 April 2022</td>
                                <td>Not Paid</td>
                              </tr>
                              <tr>
                                <td>Brand-Verse</td>
                                <td>27 March- 3 April 2022</td>
                                <td>Not Paid</td>
                              </tr>
                              <tr>
                                <td>QUEST-ion</td>
                                <td>2nd April 2022</td>
                                <td>Not Paid</td>
                              </tr>
                              <tr>
                                <td>SolidDesign</td>
                                <td>30th - 31st March 2022</td>
                                <td>Not Paid</td>
                              </tr>
                              <tr>
                                <td>Devil's Advocate</td>
                                <td>1 April 2022</td>
                                <td>Not Paid</td>
                              </tr>
                              <tr>
                                <td>Static Rush</td>
                                <td>2nd April 2022</td>
                                <td>Not Paid</td>
                              </tr>
                              <tr>
                                <td>Beg Borrow Steal</td>
                                <td>3rd April 2022</td>
                                <td>Not Paid</td>
                              </tr> 
                            </tbody>
                          </Table>
                        </TabPane>
                      
                    </TabPane>
                    <TabPane tabId="link6">
                      <TabPane tabId="tab1">
                        <Table className="tablesorter" responsive>
                            <thead className="text-primary">
                              <tr>
                                <th className="header">Workshop</th>
                                <th className="header" style={{ textAlign: "center"}}>Date</th>
                                <th className="header" style={{ textAlign: "center"}}>Paid/Non-Paid</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Nvidia DLI Workshop</td>
                                <td>9th April 2022</td>
                                <td>Not Paid</td>
                              </tr>
                              <tr>
                                <td>The Ledger Workshop</td>
                                <td>10th April 2022</td>
                                <td>Not Paid</td>
                              </tr>
                              <tr>
                                <td>Robotic Workshop And Hackathon</td>
                                <td>11th - 17th April 2022</td>
                                <td>Paid</td>
                              </tr>
                            </tbody>
                        </Table>
                      </TabPane>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>       
      </div>
      <Footer />
      </div>
    );
  }
}

export default schedule;
