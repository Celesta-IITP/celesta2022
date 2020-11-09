import React, { Component } from "react";
import { Link } from "react-router-dom";
import { EventsFunctions } from "./EventsFunctions";
import "./Events.css";
import IndexNavbar from "../Navbars/IndexNavbar";

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    EventsFunctions();
  }

  render() {
    return (
      <div className="demo-cont">
        <IndexNavbar style={{ backgroundColor: "black" }} />
        {/* <br/>
		<br/>
		<br/>
		<br/>		 */}

        <div className="fnc-slider example-slider">
          <div className="fnc-slider__slides">
            <div className="fnc-slide m--blend-green m--active-slide">
              <div className="fnc-slide__inner">
                <div className="fnc-slide__mask">
                  <div className="fnc-slide__mask-inner"></div>
                </div>
                <div className="fnc-slide__content">
                  <h2 className="fnc-slide__heading">
                    <div className="fnc-slide__heading-line">
                      {/*<span>Events Open to All</span>*/}
                    </div>
                    <div className="fnc-slide__heading-line">
                      <span></span>
                    </div>
                  </h2>
                  <Link to="events/online_events">
                    <button type="button" className="fnc-slide__action-btn">
                      Explore
                      <span data-text="Explore">Explore</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="fnc-slide m--blend-dark">
              <div className="fnc-slide__inner">
                <div className="fnc-slide__mask">
                  <div className="fnc-slide__mask-inner"></div>
                </div>
                <div className="fnc-slide__content">
                  <h2 className="fnc-slide__heading">
                    <div className="fnc-slide__heading-line">
                      {/*<span>College</span>*/}
                    </div>
                    <div className="fnc-slide__heading-line">
                      {/*<span>Events</span>*/}
                    </div>
                  </h2>
                  <Link to="events/onsite_events">
                    <button type="button" className="fnc-slide__action-btn">
                      Explore
                      <span data-text="Explore">Explore</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="fnc-slide m--blend-red">
              <div className="fnc-slide__inner">
                <div className="fnc-slide__mask">
                  <div className="fnc-slide__mask-inner"></div>
                </div>
                <div className="fnc-slide__content">
                  <h2 className="fnc-slide__heading">
                    <div className="fnc-slide__heading-line">
                      {/*<span>School</span>*/}
                    </div>
                    <div className="fnc-slide__heading-line">
                      {/*<span>Events</span>*/}
                    </div>
                  </h2>
                  <Link to="events/tech_events">
                    <button type="button" className="fnc-slide__action-btn">
                      Explore
                      <span data-text="Explore">Explore</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="fnc-slide m--blend-blue">
              <div className="fnc-slide__inner">
                <div className="fnc-slide__mask">
                  <div className="fnc-slide__mask-inner"></div>
                </div>
                <div className="fnc-slide__content">
                  <h2 className="fnc-slide__heading">
                    <div className="fnc-slide__heading-line">
                      {/*<span>Ozone</span>*/}
                    </div>
                    <div className="fnc-slide__heading-line">
                      <span></span>
                    </div>
                  </h2>
                  <Link to="events/SUSP_events">
                    <button type="button" className="fnc-slide__action-btn">
                      Explore
                      <span data-text="Explore">Explore</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="fnc-slide m--blend-dark">
              <div className="fnc-slide__inner">
                <div className="fnc-slide__mask">
                  <div className="fnc-slide__mask-inner"></div>
                </div>
                <div className="fnc-slide__content">
                  <h2 className="fnc-slide__heading">
                    <div className="fnc-slide__heading-line">
                      {/*<span className="managerial">Workshops</span>*/}
                    </div>
                    <div className="fnc-slide__heading-line">
                      <span></span>
                    </div>
                  </h2>
                  <Link to="events/man_events">
                    <button type="button" className="fnc-slide__action-btn">
                      Explore
                      <span data-text="Explore">Explore</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="fnc-slide m--blend-red">
              <div className="fnc-slide__inner">
                <div className="fnc-slide__mask">
                  <div className="fnc-slide__mask-inner"></div>
                </div>
                <div className="fnc-slide__content">
                  <h2 className="fnc-slide__heading">
                    <div className="fnc-slide__heading-line">
                      {/*<span>Guest</span>*/}
                    </div>
                    <div className="fnc-slide__heading-line">
                      {/*<span>Talks</span>*/}
                    </div>
                  </h2>
                  <Link to="events/gamiacs_events">
                    <button type="button" className="fnc-slide__action-btn">
                      Explore
                      <span data-text="Explore">Explore</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="fnc-slide m--blend-dark">
              <div className="fnc-slide__inner">
                <div className="fnc-slide__mask">
                  <div className="fnc-slide__mask-inner"></div>
                </div>
                <div className="fnc-slide__content">
                  <h2 className="fnc-slide__heading">
                    <div className="fnc-slide__heading-line">
                      {/*<span>Pronite</span>*/}
                    </div>
                    <div className="fnc-slide__heading-line">
                      <span></span>
                    </div>
                  </h2>
                  <Link to="events/robo_events">
                    <button type="button" className="fnc-slide__action-btn">
                      Explore
                      <span data-text="Explore">Explore</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <nav className="fnc-nav">
              <div className="fnc-nav__bgs">
                <div className="fnc-nav__bg m--navbg-green m--active-nav-bg"></div>
                <div className="fnc-nav__bg m--navbg-dark"></div>
                <div className="fnc-nav__bg m--navbg-red"></div>
                <div className="fnc-nav__bg m--navbg-blue"></div>
                <div className="fnc-nav__bg m--navbg-dark"></div>
                <div className="fnc-nav__bg m--navbg-red"></div>
                <div className="fnc-nav__bg m--navbg-dark"></div>
              </div>
              <div className="fnc-nav__controls">
                <button className="fnc-nav__control">
                  Events Open to All
                  <span className="fnc-nav__control-progress"></span>
                </button>
                <button className="fnc-nav__control">
                  College Events
                  <span className="fnc-nav__control-progress"></span>
                </button>
                <button className="fnc-nav__control">
                  School Events
                  <span className="fnc-nav__control-progress"></span>
                </button>
                <button className="fnc-nav__control">
                  Ozone
                  <span className="fnc-nav__control-progress"></span>
                </button>
                <button className="fnc-nav__control">
                  Workshops
                  <span className="fnc-nav__control-progress"></span>
                </button>
                <button className="fnc-nav__control">
                  Guest Talks
                  <span className="fnc-nav__control-progress"></span>
                </button>
                <button className="fnc-nav__control">
                  Pronite
                  <span className="fnc-nav__control-progress"></span>
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Events;
