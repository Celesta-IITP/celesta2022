import React from "react";
import { Link } from "react-router-dom";
import "./BackToEvents.css";
import { NavLink } from "reactstrap";

export const BackToEvents = () => {
  return (
    <div className="events_back">
      <NavLink href="/events-page">
        <span className="fas fa-arrow-left"></span>
      </NavLink>
    </div>
  );
};
