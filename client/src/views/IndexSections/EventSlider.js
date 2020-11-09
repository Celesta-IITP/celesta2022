import React from "react";
import classnames from "classnames";
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";
//import '../../assets/css/event.css';

// reactstrap components
import {
  Button,
  FormGroup,
  Container,
  Row,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
  UncontrolledTooltip,
  UncontrolledPopover,
  PopoverBody,
  PopoverHeader,
  Modal,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  UncontrolledCarousel
} from "reactstrap";

const carouselItems = [
    {
      src: require('../../assets/img/homeassets/ha7.jpeg'),
      altText: "Slide 1",
      caption: ""
    },
    {
      src: require('../../assets/img/homeassets/a.jpg'),
      altText: "Slide 2",
      caption: ""
    },
    {
      src: require('../../assets/img/homeassets/ha3.jpeg'),
      altText: "Slide 3",
      caption: ""
    },
    {
      src: require('../../assets/img/homeassets/ha8.jpeg'),
      altText: "Slide 4",
      caption: ""
    }, 
    {
      src: require('../../assets/img/homeassets/ha9.jpeg'),
      altText: "Slide 5",
      caption: ""
    },
    {
      src: require('../../assets/img/homeassets/ha10.jpeg'),
      altText: "Slide 6",
      caption: ""
    },
    {
      src: require('../../assets/img/homeassets/ha11.jpeg'),
      altText: "Slide 7",
      caption: ""
    },
  ];

class EventSlider extends React.Component{
    render(){
        return(
            <div className="page-header header-filter">
            <div className="squares square1" />
            <div className="squares square2" />
            <div className="squares square3" />
            <div className="squares square4" />
            <div className="squares square5" />
            <div className="squares square6" />
            <div className="squares square7" />
            <Container>
                <br />
                <br />
                <br />
                <h1 align="center">
                    {/* Events */}
                </h1>
                <Row>
                    <Col lg="2">

                    </Col>
                    <Col lg="8">
                    <h2 className="glimpses"> Some glimpses from last year...</h2>  
                    <div className="crouselimg">
                    <UncontrolledCarousel
                        items={carouselItems}
                        indicators={false}
                        autoPlay={false}
                    />
                    </div>
                    <div  className="spacein"></div>
                    </Col>
                    

                </Row>
            </Container>
			</div>
        );
    }
}

export default EventSlider;