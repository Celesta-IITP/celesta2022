import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss?v=1.1.0";
import "assets/demo/demo.css";
import "./app.css";
import './assets/fonts/Gotham-Black.otf';

import Index from "views/Index.js";
import LandingPage from "views/examples/LandingPage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import ForgotPage from "views/examples/ForgotPassword.js";
import ResetPage from "views/examples/ResetPassword.js";
import ProfilePage from "views/examples/ProfilePage.js";
import ContactUsPage from "views/examples/ContactUsPage.js";
import Photos from "components/Gallery/gallery.js";
import SigninPage from "views/examples/SigninPage.js";
import Sponsors from "components/Sponsors/sponsors.js";
import Stats from "components/Stats/stats.js";
import MouseEffect from "components/MouseEffect/mouseEffect";
import NotFound from "components/NotFound/notFound.js";
import Events from "components/Events/Events.js";
import Event from "./components/Explore/Event/event_explore";
import GuestLecture from "./components/Explore/GuestLec/gl_explore";
import Workshop from "./components/Explore/Workshop/work_explore";
import Hackathon from "./components/Explore/Hackathon/hack_explore";
import RoboticsEvents from "./components/Explore/Robotics/robo_explore";
import SuspEvents from "./components/Explore/SUSP/susp_explore";
import TechnicalEvents from "./components/Explore/Technical/tech_explore";
import CA from "components/CA/ca.js";
import AddEvent from "./components/AddEvent/addEvent";
import Points from "components/PtsTable/pts.js";
import Admin from "components/Admin";
import Schedule from "./components/Schedule/schedule";

import ProtectedRoute from "./components/ProtectedRoute";
import AuthenticatedRoute from "./components/AuthenticatedRoute";

import Teams from "./components/Team/team";

class App extends React.Component {
  // function SecuredRoute = (props) => {
  //   const user = localStorage.getItem("user");
  //   return (
  //     <Route
  //       path={props.path}
  //       render={(data) =>
  //         user.isAdmin ? (
  //           <props.component {...data}></props.component>
  //         ) : (
  //           <Redirect to={{ pathname: "/" }}></Redirect>
  //         )
  //       }
  //     ></Route>
  //   );
  // };
  render() {
    return (
      <BrowserRouter>
        {/*<MouseEffect />*/}
        <Switch>
          <Route
            path="/"
            exact="true"
            render={(props) => <Index {...props} />}
          />
          <ProtectedRoute
            path="/admin"
            exact="true"
            component={Admin}
            // render={(props) => <Admin {...props} />}
          />
           <Route
             path="/landing-page"
             render={(props) => <LandingPage {...props} />}
           />
          <Route
            path="/events-page"
            render={(props) => <Events {...props} />}
          />
          <Route
            path="/register-page"
            render={(props) => <RegisterPage {...props} />}
          />
          <Route
            path="/forgot-page"
            render={(props) => <ForgotPage {...props} />}
          />
          <Route
            path="/reset-page"
            render={(props) => <ResetPage {...props} />}
          />
          <Route
            path="/signin-page"
            exact="true"
            render={(props) => <SigninPage {...props} />}
          />
          <AuthenticatedRoute
            path="/profile-page"
            exact="true"
            component={ProfilePage}
          />
          <Route path="/Team" render={(props) => <Teams {...props} />} />
          <Route path="/Team" render={(props) => <Teams {...props} />} />
          <Route
            path="/contact-us-page"
            render={(props) => <ContactUsPage {...props} />}
          />
          <Route
            path="/events/add"
            exact="true"
            render={(props) => <AddEvent {...props} />}
          />
          <Route
            path="/events/event"
            exact
            render={(props) => <Event {...props} />}
          />
          <Route
            path="/events/gl"
            exact
            render={(props) => <GuestLecture {...props} />}
          />
          <Route
            path="/events/workshop"
            exact
            render={(props) => <Workshop {...props} />}
          />
          <Route
            path="/events/hackathon"
            exact
            render={(props) => <Hackathon {...props} />}
          />
          {/* <Route
            path="/events/robo_events"
            exact
            render={(props) => <RoboticsEvents {...props} />}
          />
          <Route
            path="/events/susp_events"
            exact
            render={(props) => <SuspEvents {...props} />}
          />
          <Route
            path="/events/tech_events"
            exact
            render={(props) => <TechnicalEvents {...props} />}
          /> */}
          <Route path="/gallery" render={(props) => <Photos {...props} />} />
          <Route path="/sponsors" render={(props) => <Sponsors {...props} />} />
          <Route path="/Points" render={(props) => <Points {...props} />} />
          <Route path="/schedule" render={(props) => <Schedule {...props} />} />
          <Route path="/stats" render={(props) => <Stats {...props} />} />
          <Route path="/ca" render={(props) => <CA {...props} />} />
          <Route path="*" component={NotFound} />
          {/* <Redirect from="/" to="/components" /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
