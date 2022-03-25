import React, { useState, useEffect, Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { EventsFunctions } from "./EventsFunctions";
import "./Events.css";
import IndexNavbar from "../Navbars/IndexNavbar";
import {Button} from 'reactstrap'
import RegistrationModal from "./RegistrationModal";
import { eventsList } from "./eventsJSON";

function EventBox({name, desc, date, img, form, setForm, setOpen}) {
  return(
    <div id="event-box">
        <div className="event-text">
          <div className="event-name">{name}</div>
          <div className="event-date">{date}</div>
          <div className="event-desc">{desc}</div>
        </div>
        <img className="event-image" src={img} />
        {form ? <button onClick={() => {setForm(form); setOpen(true)}} >Register</button> : null}
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
    const [form, setForm] = useState('https://docs.google.com/forms/d/e/1FAIpQLSdRPcp2wHppIp4s71Vk_iC0sQjHHC4ulid9wuPTaS11SNlh_g/viewform');

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
      else if(window.location.href.split("/")[window.location.href.split("/").length - 1] === 'events-page') {
        setOpen(false);
        setForm('');
      }
      else {
        window.location = '/404'
      }
      console.log("event:", eventExists('astropv'))
    }, [])

    return (
      <div className="events-container">
        <IndexNavbar style={{ backgroundColor: "black" }} />
        <RegistrationModal open={open} onClose={() => {setOpen(false)}} form={form} />
        <div className="events-grid">
          {eventsList.map((item) => {
            return(<EventBox name={item.name} desc={item.desc} date={item.date} img={item.img} form={item.form} setForm={setForm} setOpen={setOpen} />)
          })}
        </div>
      </div>
    );
}

export default Events;