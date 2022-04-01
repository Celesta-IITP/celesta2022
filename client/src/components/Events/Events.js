import React, { useState, useEffect, Component } from "react";
import classnames from "classnames";
import { Link, Redirect } from "react-router-dom";
import { EventsFunctions } from "./EventsFunctions";
import TshirtModal from "components/Merchandise/TshirtModal";
import "./Events.css";
import IndexNavbar from "../Navbars/IndexNavbar";
import {Button} from 'reactstrap'
import RegistrationModal from "./RegistrationModal";
import { eventsList } from "./eventsJSON";
import Footer from "components/Footer/Footer";
import bgImage from '../../assets/img/newimg/celestafrontimg.png';
import onlineIcon from '../../assets/img/online.svg';
import offlineIcon from '../../assets/img/offline.svg';
import { workshops } from "./workshopJSON";
import guestLecture from './guestlecture'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

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
import { guestLectures } from "./guestlecture";

function EventBox({name, desc, date, img, form, rules, online, restricted, youtube, setForm, setImage, setOpen, submission}) {
  return(
    <div id="event-box">
        <div className="event-text">
          <div className="event-name">{name}</div>
          <div className="event-date">{date}</div>
          <div className="event-desc">{desc}</div>
        </div>
        {restricted ? <div className="event-comment">*Only for IITP students</div> : null}
        {/* <img className="status-icon" src={online ? onlineIcon : offlineIcon} alt={online ? "Online Event" : "Offline Event"}/> */}
        <img className="event-image" src={img || bgImage} />
        <div className="btn-row">
        {rules ? <button className="rules-btn"><a href={rules}>Rulebook</a></button> : null}
        {!form ? null : form.includes('dare2compete') ? <button className="reg-btn"><a target="_blank" href={form}>Register</a></button> : <button className="reg-btn" onClick={() => {
            setForm(form); 
            setImage(img); 
            setOpen(true);
        }}>Register</button>}
        {/* {submission ? <button className="rules-btn"><a href={submission}>Submission</a></button> : null} */}
        {!submission ? null : <button className="reg-btn" onClick={() => {
            setForm(submission); 
            setImage(img); 
            setOpen(true);
        }}>Submit</button>}
        {!youtube? null : <button className="rules-btn"><a href="https://www.youtube.com/c/CelestaIITPatna" target="_blank">Watch Live</a></button>}
        </div>
        {/* <iframe src={form + '?embedded=true'} width="640" height="947" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
    </div>
  )
}

function eventExists(slug) {
  var cond = false;
  eventsList.map((event) => {
    if(event.slug === slug) {
      cond = true;
    }
  })
  return cond;
}

function getEventForm(slug) {
  var cond = '';
  eventsList.map((event) => {
    if(event.slug === slug) {
      cond = event.form;
    }
  })
  return cond;
}

function Events() {
    const [open, setOpen] = useState(false);
    // const [open1, setOpen1] = useState(false);
    const [image, setImage] = useState('');
    const [form, setForm] = useState('https://docs.google.com/forms/d/e/1FAIpQLSdRPcp2wHppIp4s71Vk_iC0sQjHHC4ulid9wuPTaS11SNlh_g/viewform');
    //const [submission, setSubmission] = useState('https://docs.google.com/forms/d/e/1FAIpQLSck-cn2SiXFbDoToJrYW8S_oCWq_Cj2eRs8PxqkZJ_lMOjbUg/viewform');
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    }

    // useEffect(() => {
    //   setForm(() => {
    //     switch(window.location.split("/")[-1]) {
    //       case 'celesta':
    //         return ()
    //     }
    //   })
    // }, [window.location])

    useEffect(() => {
      console.log(window.location.href.split("/")[window.location.href.split("/").length - 1])
      // switch(window.location.href.split("/")[window.location.href.split("/").length - 1]) {
      //   case('njath') :
      //     setOpen(true);
      //     setForm('https://docs.google.com/forms/d/1hZcsk-gJ2dCGuQYMdbYH5lsQrlAiHGRG5AbJ8zxRbro/viewform');
      //     break
      //   case('astropv') :
      //     setOpen(true);
      //     setForm('https://docs.google.com/forms/d/10GN5l1E1EBSnaZVDwiSH5pZigCskn5bLw5BsN37xMPs/viewform');
      //     break
      //   case('njath') :
      //     setOpen(true);
      //     setForm('https://docs.google.com/forms/d/1hZcsk-gJ2dCGuQYMdbYH5lsQrlAiHGRG5AbJ8zxRbro/viewform');
      //     break
      //   default:
      //     setOpen(false);
      // }
      if(eventExists(window.location.href.split("/")[window.location.href.split("/").length - 1])) {
        setForm(getEventForm(window.location.href.split("/")[window.location.href.split("/").length - 1]));
        setOpen(true);
      }
      else if(!window.location.href.split("/")[window.location.href.split("/").length - 1] || window.location.href.split("/")[window.location.href.split("/").length - 1] === 'events-page') {
        setOpen(false);
        setForm('');
      }
      else {
        window.location = '/404'
      }
      // console.log("event:", eventExists('astropv'))
    }, [])

    return (
      <div className="events-container">
        <IndexNavbar style={{ backgroundColor: "black" }}/>
        {/* <Carousel autoPlay infiniteLoop interval={1000} showThumbs={false} showIndicators={false} showStatus={false}>
                <div className="carosuel-div">
                    <img src={bgImage} />
                    <p className="legend">Legend 1</p>
                </div>
                <div className="carosuel-div">
                    <img src={onlineIcon} />
                    <p className="legend">Legend 2</p>
                </div>
                <div className="carosuel-div">
                    <img src="assets/3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
         */}
         {/* <TshirtModal open={open1} onClose={() => {setOpen1(false)}} /> */}
        <RegistrationModal open={open} onClose={() => {setOpen(false)}} img={image} form={form} />
          <div className="event-nav">
          <ul>
            <li>
              <Button
                className={toggleState === 1 ? "events-tab events-tab-active" : "events-tab"}
                onClick={() => toggleTab(1)} 
              >
                Events
              </Button>
            </li>
            <li>
              <Button
                className={toggleState === 2 ? "events-tab events-tab-active" : "events-tab"}
                onClick={() => toggleTab(2)}
              >
                Workshops
              </Button>
            </li>
            <li>
              <Button
                className={toggleState === 3 ? "events-tab events-tab-active" : "events-tab"}
                onClick={() => toggleTab(3)}
              >
                Guest Lectures
              </Button>
            </li>
          </ul>
        </div>
        <div className="events-grid">
          {toggleState === 1 ? eventsList.map((item) => {
            return(<EventBox name={item.name} desc={item.desc} date={item.date} img={item.img} form={item.form} rules={item.rules} submission={item.submission} online={item.online} restricted={item.restricted} setForm={setForm} setImage={setImage} setOpen={setOpen} />)
          }) : toggleState ===2 ? workshops.map((item) => {
            return(<EventBox name={item.name} desc={item.desc} date={item.date} img={item.img} form={item.form} rules={item.rules} submission={item.submission} online={item.online} restricted={item.restricted} setForm={setForm} setImage={setImage} setOpen={setOpen} />)
          }) : guestLectures.map((item) => {
            return(<EventBox name={item.name} desc={item.desc} date={item.date} img={item.img} form={item.form} rules={item.rules} submission={item.submission} online={item.online} restricted={item.restricted} youtube="TRUE" setForm={setForm} setImage={setImage} setOpen={setOpen} />)
          })}
        </div>
        <Footer />
      </div>
    );
}

export default Events;