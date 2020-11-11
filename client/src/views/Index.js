import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router";
// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import PageHeader from "components/PageHeader/PageHeader.js";
import Footer from "components/Footer/Footer.js";


// sections for this page/view
import Basics from "views/IndexSections/Basics.js";
import Loader from "components/Loader/loader.js";
import Navbars from "views/IndexSections/Navbars.js";
import Tabs from "views/IndexSections/Tabs.js";
import Pagination from "views/IndexSections/Pagination.js";
import Notifications from "views/IndexSections/Notifications.js";
import Typography from "views/IndexSections/Typography.js";
import JavaScript from "views/IndexSections/JavaScript.js";
import NucleoIcons from "views/IndexSections/NucleoIcons.js";
import Signup from "views/IndexSections/Signup.js";
import Examples from "views/IndexSections/Examples.js";
import Download from "views/IndexSections/Download.js";
import Header from "views/IndexSections/Header.js";
import EventSlider from "views/IndexSections/EventSlider.js";
import StepWise from "views/IndexSections/StepWise.js";
import Stats from "../components/Stats/stats.js";
import Pronites from "../components/Pronites/pronites";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { refreshPage } from "../redux/actions/authActions";
import Timer from "views/IndexSections/Timer.js";
import CustomizedSnackbars from "./snackBar";

class Index extends React.Component {

  refreshFunction = async () => {
    await this.props.refreshPage(JSON.parse(localStorage.getItem("user")));
  };

  componentDidMount() {
    console.log("first");
    const token = localStorage.getItem("token");
    console.log(token);
    if (token) {
      this.refreshFunction();
    }
    document.body.classList.toggle("index-page");
  }

  componentWillUnmount() {
    document.body.classList.toggle("index-page");
  }
  

  render() {
    return (
      <div>
        <IndexNavbar />
        <div className="wrapper bg">
          <Header />
          <div className="main">
            <Timer />
            <br/>
            <br/>
            <br/>
            <StepWise />
            <Stats />
            <EventSlider />
            <br/>
            <br/>
            <br/>
          </div>
          <h1 align="center"  className="prontxt">
            LAST YEAR <br/> PRONITES ...
          </h1>

          <div className="wrapper-prn">
            <Pronites />
          </div>

          <Footer />
        </div>
        <CustomizedSnackbars />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  isLoading: state.auth.isLoading,
  error: state.error,
  user: state.auth.user,
});

export default withRouter(
  compose(connect(mapStateToProps, { refreshPage }))(Index)
);
