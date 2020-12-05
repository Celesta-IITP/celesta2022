import moment, { months } from "moment";
import { Container, Row } from "reactstrap";
import React from "react";
//import { Row } from "reactstrap";
//import "bootstrap-css-only/css/bootstrap.min.css";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: undefined,
      hours: undefined,
      minutes: undefined,
      seconds: undefined,
      months: undefined,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      var d_day = moment("2020-12-12");
      var now = moment();

      var left_time = moment(d_day - now);

      var days = d_day.diff(now, "days");
      var hours = left_time.format("HH");
      var minutes = left_time.format("mm");
      var seconds = left_time.format("ss");

      this.setState({ days, hours, minutes, seconds, months });
    }, 1000);
  }
  render() {
    const { days, hours, minutes, seconds } = this.state;
    return (
      <div style={{ textAlign: "center" }}>
        <h1 className="d-flex justify-content-center countdown-head">
          FUN BEGINS IN
        </h1>
        <Container className="countdown-wrapper text-white mt-5">
          <Row className="row justify-content-center">
            <div className="col-2 ">
              <span className="countdown-item">{days}</span>
              <br />
              <br />
              Days
            </div>
            <div className="col-2 ">
              <span className="countdown-item">{hours}</span>
              <br />
              <br />
              Hours
            </div>
            <div className="col-2">
              <span className="countdown-item">{minutes}</span>
              <br />
              <br />
              Minutes
            </div>
            <div className="col-2">
              <span className="countdown-item">{seconds}</span>
              <br />
              <br />
              Seconds
            </div>
          </Row>
        </Container>
        <img
          class="rocket-object"
          src={require("../../assets/img/homeassets/rocket.svg")}
          width="60px"
        ></img>
      </div>
    );
  }
}

export default Timer;
