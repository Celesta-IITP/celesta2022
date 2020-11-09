import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { loginUser } from "redux/actions/authActions";

class ProtectedRoute extends React.Component {
  render() {
    const Component = this.props.component;
    const isAuthenticated = localStorage.getItem("token");
    console.log(isAuthenticated);

    return isAuthenticated ? (
      <Component />
    ) : (
      <Redirect to={{ pathname: "/signin-page" }} />
    );
  }
}
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  isLoading: state.auth.isLoading,
  error: state.error,
});

export default compose(connect(mapStateToProps, { loginUser }))(ProtectedRoute);
