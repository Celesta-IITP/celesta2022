import React, { useState, useEffect, Component } from "react";
import classnames from "classnames";
import { Link, Redirect } from "react-router-dom";
import { EventsFunctions } from "./EventsFunctions";
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

function EventBox({name, desc, date, img, form, rules, online, restricted, setForm, setImage, setOpen}) {
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

const events = [
  {
    name: "Athul",
    desc: "Sharma",
    img: "https://s3.india.com/travel/wp-content/uploads/2018/02/Satara-photo-2.jpg",
    form: "https://docs.google.com/forms/d/e/1FAIpQLSdRPcp2wHppIp4s71Vk_iC0sQjHHC4ulid9wuPTaS11SNlh_g/viewform",
    slug: 'celesta',
  },
]

function Events() {
    const [open, setOpen] = useState(false);
    const [image, setImage] = useState('');
    const [form, setForm] = useState('https://docs.google.com/forms/d/e/1FAIpQLSdRPcp2wHppIp4s71Vk_iC0sQjHHC4ulid9wuPTaS11SNlh_g/viewform');

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
          </ul>
        </div>
        <div className="events-grid">
          {toggleState === 1 ? eventsList.map((item) => {
            return(<EventBox name={item.name} desc={item.desc} date={item.date} img={item.img} form={item.form} rules={item.rules} online={item.online} restricted={item.restricted} setForm={setForm} setImage={setImage} setOpen={setOpen} />)
          }) : workshops.map((item) => {
            return(<EventBox name={item.name} desc={item.desc} date={item.date} img={item.img} form={item.form} rules={item.rules} online={item.online} restricted={item.restricted} setForm={setForm} setImage={setImage} setOpen={setOpen} />)
          })}
        </div>
        <Footer />
      </div>
    );
}

export default Events;