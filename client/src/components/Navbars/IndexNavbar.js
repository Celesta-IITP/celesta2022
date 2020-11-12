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
        className= {this.state.color + " fixed-top"}
        color-on-scroll="100"
        expand="lg"
      >
        <Container>
            <header className="cd-header">
            <div className="cd-logo">
              
                <ul>
                  <NavItem>
                    <NavLink href="/">
                      <img
                        src={logo}
                        alt="Logo"
                        style={{ maxHeight: "45px" }}
                      />
                    </NavLink>
                  </NavItem>
                </ul>
              
            </div>

            {Object.keys(this.state.userInfo).length !== 0 ? (
              
                <ul className="cd-secondary-nav">
                  {this.state.userInfo.isAdmin ? (
                    <li>
                      <Button>
                        <Link to="/events/add">Add an event!</Link>
                      </Button>
                    </li>
                  ) : (
                    <Button>
                      <Link to="/events-page">Events</Link>
                    </Button>
                  )}
                  <li>
                    <Button>
                      <Link to="/profile-page">{this.state.userInfo.name}</Link>
                    </Button>
                  </li>
                  <li>
                    <Button onClick={this.logoutHandler}>
                      <Link to="/signin-page">Logout</Link>
                    </Button>
                  </li>
                </ul>
              
            ) : (
              <nav>
                <ul className="cd-secondary-nav">
                  <NavItem>
                    <NavLink href="/signin-page">Login</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/register-page">Register</NavLink>
                  </NavItem>
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
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/admin">Admin Portal</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/ca">Campus Ambasaddor</NavLink>
              </NavItem>
              {(userInfo.ca || (userInfo.roles && userInfo.roles.includes("MPR"))) &&
                <NavItem>
                  <NavLink href="/Points">Live Points Table</NavLink>
                </NavItem>
              }
              <NavItem>
                <NavLink href="/events-page">Events</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/gallery">Gallery</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/sponsors">Sponsors</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Team">Our Team</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/contact-us-page">Contact Us</NavLink>
              </NavItem>

              {Object.keys(this.state.userInfo).length !== 0 ? (
                <nav>
                  <ul>
                    <NavItem>
                      <Link to="/signin-page" onClick={this.logoutHandler}>
                        Logout
                      </Link>
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
                          <Link to="/events/add">Add an event!</Link>
                        </Button>
                      </li>
                    ) : (
                      <Button>
                        <Link to="/events-page">Events</Link>
                      </Button>
                    )}
                  </ul>
                </nav>
              ) : (
                <ul>
                  <NavItem>
                    <NavLink href="/signin-page">Login</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/register-page">Register</NavLink>
                  </NavItem>
                </ul>
              )}

              <li className="cd-label">Follow us</li>

              <li className="cd-social cd-facebook">
                <a href="#0">Facebook</a>
              </li>
              <li className="cd-social cd-instagram">
                <a href="#0">Instagram</a>
              </li>
              <li className="cd-social cd-dribbble">
                <a href="#0">Dribbble</a>
              </li>
              <li className="cd-social cd-twitter">
                <a href="#0">Twitter</a>
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
