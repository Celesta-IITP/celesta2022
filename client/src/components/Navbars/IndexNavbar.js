import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo_3.png";
import { compose } from "redux";
import { connect } from "react-redux";
import { logoutUser, refreshPage } from "../../redux/actions/authActions";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
import { style } from "@mui/system";

class ComponentsNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseOpen: false,
      userInfo: this.props.user ? this.props.user : {},
      color: "navbar-transparent",
    };
  }

  componentDidMount() {
    console.log(this.state.userInfo);
    window.addEventListener("scroll", this.changeColor);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.changeColor);
  }

  changeColor = () => {
    // if (
    //   document.documentElement.scrollTop > 99 ||
    //   document.body.scrollTop > 99
    // ) {
    //   this.setState({
    //     color: "bg-info"
    //   });
    //}
    //else
    if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      this.setState({
        color: "navbar-transparent",
      });
    }
  };
  logoutHandler = (e) => {
    this.props.logoutUser();
    /*this.props.history.push("/");*/
  };
  render() {
    const { userInfo } = this.state;
    return (
      <Navbar
        className={this.state.color + " fixed-top"}
        scrolling 
        dark
        fixed="top"
        // color-on-scroll="100"
        expand="lg"
      >
        <Container>
          <header className="cd-header">
            <div className="cd-logo">
              <ul>
                <NavItem>
                  <NavLink href="/">
                    <img src={logo} alt="Logo" style={{ maxHeight: "45px" }} />
                  </NavLink>
                </NavItem>
              </ul>
            </div>

            {Object.keys(this.state.userInfo).length !== 0 ? (
              <ul className="cd-secondary-nav">
                {this.state.userInfo.isAdmin ? (
                  <li>
                    <Button>
                      <NavLink href="/events/add">Add an event!</NavLink>
                    </Button>
                  </li>
                ) : (
                  <Button>
                    <NavLink href="/events-page">Events</NavLink>
                  </Button>
                )}
                <li>
                  <Button>
                    <NavLink href="/profile-page">
                      {this.state.userInfo.name}
                    </NavLink>
                  </Button>
                </li>
                <li>
                  <Button onClick={this.logoutHandler}>
                    <NavLink href="/signin-page">Logout</NavLink>
                  </Button>
                </li>
              </ul>
            ) : (
              <nav>
                <ul className="cd-secondary-nav">
                  <li>
                  
                      <NavLink href="/events-page"><Button>Events</Button></NavLink>
                      
                  </li>
                  {/* <li>
                    <Button >
                      <NavLink href="/signin-page">Login</NavLink>
                    </Button>
                  </li> */}
                  <li>
                  
                      <NavLink href="/register-page"><Button >Register</Button></NavLink>
                    
                  </li>
                  {/* <NavItem>
                    <NavLink href="/signin-page">Login</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/register-page">Register</NavLink>
                  </NavItem> */}
                </ul>
              </nav>
            )}
            <div className="nav-but-wrap">
              <div className="menu-icon hover-target">
                <span className="menu-icon__line menu-icon__line-left"></span>
                <span className="menu-icon__line"></span>
                <span className="menu-icon__line menu-icon__line-right"></span>
              </div>
            </div>
          </header>

          <nav>
            <ul className="cd-primary-nav">
              <NavItem>
                <NavLink className="nav-item-new" href="/">Home</NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink href="/Points">CA Leaderboard</NavLink>
              </NavItem> */}
              <NavItem>
                <NavLink className="nav-item-new" href="/ca">Campus Ambassador</NavLink>
              </NavItem>
              {(userInfo.ca ||
                (userInfo.roles && userInfo.roles.includes("MPR"))) && (
                <NavItem>
                  <NavLink href="/admin">Live Points Table</NavLink>
                </NavItem>
              )}
              <NavItem>
                <NavLink className="nav-item-new" href="/schedule">Schedule</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-item-new" href="/events-page">Events</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-item-new" href="/gallery">Gallery</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-item-new" href="/sponsors">Sponsors</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-item-new" href="/Team">Our Team</NavLink>
              </NavItem>

              <NavItem>
                <NavLink className="nav-item-new" href="/contact-us-page">Contact Us</NavLink>
              </NavItem>

              {Object.keys(this.state.userInfo).length !== 0 ? (
                <nav>
                  <ul>
                    <NavItem>
                      <NavLink href="/signin-page" onClick={this.logoutHandler}>
                        Logout
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/profile-page">
                        {this.state.userInfo.name}
                      </NavLink>
                    </NavItem>
                  </ul>
                  <ul className="cd-secondary-nav">
                    {this.state.userInfo.isAdmin ? (
                      <li>
                        <Button>
                          <NavLink href="/events/add">Add an event!</NavLink>
                        </Button>
                      </li>
                    ) : (
                      <div></div>
                      // <Button>
                      //   <NavLink href="/events-page">Events</NavLink>
                      // </Button>
                    )}
                  </ul>
                </nav>
              ) : (
                <ul>
                  {/* <NavItem>
                    <NavLink href="/signin-page">Login</NavLink>
                  </NavItem> */}
                  <NavItem>
                    <NavLink className="nav-item-new" href="/register-page">Register</NavLink>
                  </NavItem>
                </ul>
              )}

              <li className="cd-label">Follow us</li>
              <li className="cd-social">
                <Button
                    className="btn-icon btn-round"
                    color="twitter"
                    href="https://twitter.com/celesta_iitp?lang=en"
                    target="_blank"
                  >
                    <i className="fab fa-twitter" />
                </Button>
              </li>
              <li className="cd-social">
                <Button
                  className="btn-icon btn-round"
                  color="facebook"
                  href="https://www.facebook.com/CelestaIITP/"
                  target="_blank"
                >
                  <i className="fab fa-facebook-square" />
                </Button>
              </li>
              <li className="cd-social">
                <Button
                  className="btn-icon btn-round"
                  color="dribbble"
                  href="https://www.instagram.com/celestaiitp_official/?hl=en"
                  target="_blank"
                >
                  <i className="fab fa-instagram" />
                </Button>
              </li>
            </ul>
          </nav>
        </Container>
      </Navbar>
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.auth.user,
  isLoading: state.auth.isLoading,
  error: state.error,
});
export default withRouter(
  compose(connect(mapStateToProps, { logoutUser, refreshPage }))(
    ComponentsNavbar
  )
);
//export default ComponentsNavbar;
